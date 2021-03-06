'use strict';

/**
 * @ngdoc directive
 * @name stockDog2App.directive:stkSignColor
 * @description
 * # stkSignColor
 */
angular.module('stockDog2App')
  .directive('stkSignColor', function () {
    return {
      restrict: 'A',
      link: function($scope, $element, $attrs) {
        $attrs.$observe('stkSignColor', function(newVal) {
        	var newSign = parseFloat(newVal);
        	if (newSign > 0) {
        		$element[0].style.color = 'Green';
        	} else {
        		$element[0].style.color = 'Red';
        	}
        });
      }
    };
  });
