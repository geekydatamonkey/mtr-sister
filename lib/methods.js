    // var opts = {
    //   query : "select * from table where name = @firstname",
    //   inputs : {
    //     firstname : Sql.driver.NVarChar
    //   }
    // }

    // // Sync-style
    // try {
    //   var query = Sql.ps(opts);
    // } catch (e) {
    //   ...
    // }

    // var result  = query({ firstname : "Bob" });
    // var result2 = query({ firstname : "John" });

    // query.unprepare();


// do we need to do this everwhere if we use _? 
_ = lodash;

const enrollments = [
  {
    firstName: 'James',
    lastName: 'Johnson',
    idNumber: 1733273,
  },
  {
    firstName: 'Rebecca',
    lastName: 'Alm',
    idNumber: 183048,
  },
  {
    firstName: 'Alissa',
    lastName: 'McCourt',
    idNumber: 1010101,
  },
];


Meteor.methods({
  
  /**
  * returns the students in a given course
  *
  * @param {object} opts
  */
  getStudentsInCourse: function(opts) {
    const defaults = {
      courseID: 'IDM  6610 10',
      term: 'FA',
      year: 2015,
    };

    opts = _.assign({}, defaults, opts);

    check(opts.courseID, String);
    check(opts.term, String);
    check(opts.year, Number);


    console.log(opts);

    // simulate data return
    //Meteor.sleep(1000);
    return enrollments;

  }

});