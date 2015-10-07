'use strict';

/**
 * @ngdoc service
 * @name stockDog2App.CompanyService
 * @description
 * # CompanyService
 * Service in the stockDog2App.
 */
angular.module('stockDog2App')
  .service('CompanyService', function CompanyService($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource('companies.json');
  });
