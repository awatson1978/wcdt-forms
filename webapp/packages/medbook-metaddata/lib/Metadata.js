Metadata = new Meteor.Collection('Metadata');

Metadata.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});


if (Meteor.isClient){
  Meteor.subscribe("metadata");
}
