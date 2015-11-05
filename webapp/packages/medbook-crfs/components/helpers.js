Session.setDefault('recordSearchFilter', '');



Template.registerHelper("recordsList", function (argument){
  return CRFs.getFilteredData();
  // return CRFs.find({
  //   $or: [
  //     {
  //       institutionId: {
  //         $regex: Session.get('recordSearchFilter'),
  //         $options: 'i'
  //       }
  //     },
  //     {
  //       participantId: {
  //         $regex: Session.get('recordSearchFilter'),
  //         $options: 'i'
  //       }
  //     },
  //     {
  //       _id: {
  //         $regex: Session.get('recordSearchFilter'),
  //         $options: 'i'
  //       }
  //     },
  //     {
  //       physicianName: {
  //         $regex: Session.get('recordSearchFilter'),
  //         $options: 'i'
  //       }
  //     },
  //     {
  //       questionnaireName: {
  //         $regex: Session.get('recordSearchFilter'),
  //         $options: 'i'
  //       }
  //     },
  //     {
  //       collaborationName: {
  //         $regex: Session.get('recordSearchFilter'),
  //         $options: 'i'
  //       }
  //     }
  // ]
  // }, {
  //   sort: {
  //     createdAt: -1
  //   }
  // });
});
