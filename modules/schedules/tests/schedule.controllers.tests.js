(function() {
  'use strict';
  describe('Schedule Controller Tests', function() {
    // Initialize global variables
    var ScheduleController,
      $scope,
      $httpBackend,
      $state,
      Authentication,
      ScheduleService,
      mockSchedule;
    // The $resource service augments the response object with methods for updating and deleting the resource.
    // If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
    // the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
    // When the toEqualData matcher compares two objects, it takes only object properties into
    // account and ignores methods.
    beforeEach(function() {
      jasmine.addMatchers({
        toEqualData: function(util, customEqualityTesters) {
          return {
            compare: function(actual, expected) {
              return {
                pass: angular.equals(actual, expected)
              };
            }
          };
        }
      });
    });

    describe('List Route', function() {
      var liststate;
      beforeEach(inject(function($state) {
        liststate = $state.get('schedules.list');
      }));
      it('Should have the correct URL', function() {
        expect(liststate.url).toEqual('');
      });
      it('Should not be abstract', function() {
        expect(liststate.abstract).toBe(undefined);
      });
      it('Should have template', function() {
        expect(liststate.templateUrl).toBe('modules/schedule/client/views/schedules.client.module.js');
      });
    });
    
