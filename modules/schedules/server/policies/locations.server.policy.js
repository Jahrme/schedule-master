'use strict';
/**
 * Module dependencies
 */
var acl = require('acl');
// Using the memory backend
acl = new acl(new acl.memoryBackend());
/**
 * Invoke Schedules Permissions
 */
exports.invokeRolesPolicies = function() {
  acl.allow([{
    roles: ['admin'],
    allows: [{
      resources: '/api/terms/:termId/departments/:departmentId/courses/:courseId/locations',
      permissions: '*'
    }, {
      resources: '/api/terms/:termId/departments/:departmentId/courses/:courseId/locations/:locationId',
      permissions: '*'
    }]
  }, {
    roles: ['user'],
    allows: [{
      resources: '/api/terms/:termId/departments/:departmentId/courses/:courseId/locations',
      permissions: ['get']
    }, {
      resources: '/api/terms/:termId/departments/:departmentId/courses/:courseId/locations/:locationId',
      permissions: ['get']
    }]
  }, {
    roles: ['guest'],
    allows: [{
      resources: '/api/terms/:termId/departments/:departmentId/courses/:courseId/locations',
      permissions: ['get']
    }, {
      resources: '/api/terms/:termId/departments/:departmentId/courses/:courseId/locations/:locationId',
      permissions: ['get']
    }]
  }]);
};
/**
 * Check If schedules Policy Allows
 */
exports.isAllowed = function(req, res, next) {
  var roles = (req.user) ? req.user.roles : ['guest'];
  // // If a schedule is being processed and the current user created it then allow any manipulation
  // if (req.department && req.user && req.department.user && req.dep.user.id === req.user.id) {
  //   return next();
  //  }
  return next(); // bad
  // Check for user roles
  // acl.areAnyRolesAllowed(roles, req.route.path, req.method.toLowerCase(), function (err, isAllowed) {
  //   return next();
  //   if (err) {
  //     // An authorization error occurred
  //     return res.status(500).send('Unexpected authorization error');
  //   } else {
  //     if (isAllowed) {
  //       // Access granted! Invoke next middleware
  //       return next();
  //     } else {
  //       return res.status(403).json({
  //         message: 'User is not authorized !'
  //       });
  //     }
  //   }
  // });
};
