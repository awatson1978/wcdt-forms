Meteor.publish("records", function (recordId) {
  if (recordId) {
    return CRFs.findOne({
      _id: recordId
    });
  } else {
    return CRFs.find();
  }
});
