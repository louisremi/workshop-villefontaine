'use strict';

angular.module('fontxplor', ['ngAnimate', 'ngResource', 'ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
		var _localfonts,
			_googlefonts;

		function localfonts( $q ) {
			return _localfonts || $q(function(resolve) {
				new FontDetect('font-detect-swf', '/bower_components/font-detect-js/flash/FontList.swf', function(fd) {
					resolve( _localfonts = fd.fonts() );
				});
			});
		}

		function googlefonts( $http ) {
			return _googlefonts || $http.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCAq_o5fIg0YFoKSN89OZ7FlMQMQH83Qjg')
				.then(function( data ) {
					return ( _googlefonts = data.data.items );
				});
		}

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/main/main.html',
				controller: 'MainCtrl',
				resolve: {
					localfonts: localfonts,
					googlefonts: googlefonts
				}
			})
			.state('home.preview', {
				url: '{mode}/{fontName}',
				templateUrl: function( $stateParams ) {
					return 'partials/' + $stateParams.mode + '.html';
				},
				controller: 'MainCtrl'
			});

	})
	.run(function ($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	});
