'use strict';

/**
 * @ngdoc directive
 * @name stockDog2App.directive:stkWatchlistPanel
 * @description
 * # stkWatchlistPanel
 */
angular.module('stockDog2App')
  .directive('stkWatchlistPanel', function ($location, $modal, $routeParams, WatchlistService) {
  	return {
  		templateUrl: 'views/templates/watchlist-panel.html',
  		restrict: 'E',
  		scope: {},
  		link: function($scope) {
  			$scope.watchlist = {};
  			var addListModal = $modal({
  				scope: $scope,
  				template: 'views/templates/addlist-modal.html',
  				show: false
  			});

  			$scope.watchlists = WatchlistService.query();

  			$scope.currentList = $routeParams.listId;
  			$scope.goToList = function(listId) {
  				$location.path('watchlist/' + listId);
  			};

  			$scope.showModal = function() {
  				addListModal.$promise.then(addListModal.show);
  			};

  			$scope.createList = function() {
  				WatchlistService.save($scope.watchlist);
  				addListModal.hide();
  				$scope.watchlist = {};
  			};

  			$scope.deleteList = function(list) {
  				WatchlistService.remove(list);
  				$location.path('/');
  			};
  		}
  	};
  });
