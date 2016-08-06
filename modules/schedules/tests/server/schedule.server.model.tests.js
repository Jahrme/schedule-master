'use strict';
/**
 * Module dependencies.
 */
var should = require('should'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Schedule = mongoose.model('Schedule');
/**
 * Globals
 */
var user,
  schedule;
/**
 * Unit tests
 */
describe('Schedules Model Unit Tests:', function() {
  beforeEach(function(done) {
    user = new User({
      firstName: 'Full',
      lastName: 'Name',
      displayName: 'Full Name',
      email: 'test@test.com',
      username: 'username',
      password: 'M3@n.jsI$Aw3$0m3'
    });
    user.save(function() {
      schedule = new Schedule({
        title: 'Schedule Title',
        content: 'Schedule Content',
        user: user
      });
      done();
    });
  });
  describe('Method Save', function() {
    it('should be able to save without problems', function(done) {
      this.timeout(10000);
      return schedule.save(function(err) {
        should.not.exist(err);
        done();
      });
    });
  });
});
