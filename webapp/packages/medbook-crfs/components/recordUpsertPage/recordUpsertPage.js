Session.setDefault('recordReadOnly', true);


Router.map(function (){
  this.route('newRecords.Route', {
    path: '/insert/record',
    template: 'recordUpsertPage',
    onAfterAction: function (){
      Session.set('recordReadOnly', false);
    }
  });

});


Router.route('/upsert/record/:id', {
  name: 'upsertRecords.Route',
  template: 'recordUpsertPage',
  data: function (){
    return CRFs.findOne(this.params.id);
  },
  onAfterAction: function (){
    Session.set('recordReadOnly', false);
  }
});
Router.route('/view/record/:id', {
  name: 'viewRecords.Route',
  template: 'recordUpsertPage',
  data: function (){
    return CRFs.findOne(this.params.id);
  },
  onAfterAction: function (){
    Session.set('recordReadOnly', true);
  }
});


//-------------------------------------------------------------


Template.recordUpsertPage.rendered = function (){
  Template.appLayout.layout();
};


Template.recordUpsertPage.helpers({
  getFormName: function () {
    return this.CRF;
  },
  getCurrentSchema: function (){
    console.log('Template.recordUpsertPage.getCurrentSchema');

    if (this) {
      console.log('currentRecord', this);

      var questionnaireMetadata = Metadata.findOne({_id: this.CRF});
      console.log('currentDehydratedSchema', questionnaireMetadata);

      if (questionnaireMetadata) {
        if (questionnaireMetadata) {
          console.log('SchemaHydrator.hydrate(questionnaireMetadata.schema)', SchemaHydrator.hydrate(questionnaireMetadata));
          return SchemaHydrator.hydrate(questionnaireMetadata);
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  isNewRecord: function (){
    if (this._id){
      return false;
    } else {
      return true;
    }
  },
  getLockIcon: function (){
    if (Session.get('recordReadOnly')){
      return "fa-lock";
    } else {
      return "fa-unlock";
    }
  },
  isReadOnly: function (){
    if (Session.get('recordReadOnly')){
      return "readonly";
    }
  },
  getRecordId: function () {
    if ( this._id ) {
      return this._id;
    } else {
      return "---";
    }
  }
});

Template.recordUpsertPage.events({
  'click #removeRecordButton': function (){
    Records.remove(this._id, function (error, result){
      if (result){
        Router.go('/list/records');
      }
    });
  },
  "click #saveRecordButton": function (event, template){
    event.preventDefault();
    Template.recordUpsertPage.saveRecord(false, this);
    Session.set('recordReadOnly', true);
  },
  "click .barcode": function (){
    // TODO:  refactor to Session.toggle('recordReadOnly')
    if (Session.equals('recordReadOnly', true)){
      Session.set('recordReadOnly', false);
    } else {
      Session.set('recordReadOnly', true);
      console.log('Locking the record...');
      Template.recordUpsertPage.saveRecord(false, this);
    }
  },
  "click #lockRecords.Button": function (){
    console.log("click #lockRecords.Button");

    if (Session.equals('recordReadOnly', true)){
      Session.set('recordReadOnly', false);
    } else {
      Session.set('recordReadOnly', true);
    }
  },
});


Template.recordUpsertPage.saveRecord = function (record, questionnaire){

  console.log("Template.recordUpsertPage.saveRecords.", questionnaire);
  // TODO:  add validation functions

  var newRecord = {};
  var inputElements = $('#recordUpsertPage input');
  var textareaElements = $('#recordUpsertPage textarea');

  console.log('inputElements', inputElements);
  console.log('textareaElements', textareaElements);

  for (var i = 0; i < inputElements.length; i++) {
    newRecord[inputElements[i].name] = inputElements[i].value;
  }
  for (var i = 0; i < textareaElements.length; i++) {
    newRecord[textareaElements[i].name] = textareaElements[i].value;
  }

  newRecord.createdAt = new Date();
  newRecord.questionnaireId = questionnaire._id;

  console.log ("newRecord", newRecord);


  if (record._id){
    CRFs.update({_id: record._id}, {$set: newRecord }, function (error, result){
      if (error) console.log(error);
      Router.go('/view/record/' + record._id);
    });
  } else {
    CRFs.insert(newRecord, function (error, result){
      if (error) console.log(error);
      Router.go('/list/records');
      //Router.go('/view/record/' + result);
    });
  }
};
