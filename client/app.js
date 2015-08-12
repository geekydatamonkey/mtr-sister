_ = lodash;

Template.app.events({
  'click .js-getEnrollments': function() {
    Meteor.call('getStudentsInCourse', function(err, result) {
      if (err) { throw new Error(err); }
      Session.set('enrollments',result);
    });
  }
})