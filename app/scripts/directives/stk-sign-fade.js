'use strict';

/**
 * @ngdoc directive
 * @name stockDog2App.directive:stkSignFade
 * @description
 * # stkSignFade
 */
angular.module('stockDog2App')
  .directive('stkSignFade', function ($animate) {
    return {
    	restrict: 'A',
      link: function postLink($scope, $element, $attrs) {
        var oldVal = null;
        $attrs.$observe('stkSignFade', function(newVal) {
        	if (oldVal && oldVal === newVal) { return; }

        	var oldPrice = parseFloat(oldVal);
        	var newPrice = parseFloat(newVal);
        	oldVal = newVal;

        	if (oldPrice && newPrice) {
        		var direction = newPrice - oldPrice >= 0 ? 'up-add' : 'down-add';
        		$animate.addClass($element, 'change-' + direction, function() {
        			$animate.removeClass($element, 'change-' + direction);
        			console.log($element);
              console.log('animating -- ' + 'change-' + direction);
        		});
        	}
        });
      }
    };
  });
