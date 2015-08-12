# TODO

## Doing
 - [ ] display data for a course

## ToDo

 - [ ] query string builder for Meteor?

## Done
- [x] connect to Jenzabar
  - [x] mssql package: emgee:mssql
  - [x] environment settings and security best practices?
    [x] http://joshowens.me/environment-settings-and-security-with-meteor-js/
  - [x] connect to db server
  - [ ] get data using default mssql package
    - where to put server methods?
      In server folder for now. Meteor docs shows lib tho.
    - Meteor.call() –  best practice for handing off returned data to template
      - session variable? (easiest)
      - put in MongoDB?
        - seems advantageous since other users then can get this info without a separate query
        - acts as cache
      - create new reactive var?