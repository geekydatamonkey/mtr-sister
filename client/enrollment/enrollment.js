Template.enrollment.helpers({
  fullName: function() {
    return [this.firstName, this.lastName].join(' ');
  }
});