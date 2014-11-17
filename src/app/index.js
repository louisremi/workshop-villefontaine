'use strict';

angular.module('fontxplor', ['ngAnimate', 'ngResource', 'ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
		var fonts;
		function detectFonts( $q ) {
			return fonts || $q(function(resolve) {
				new FontDetect('font-detect-swf', '/bower_components/font-detect-js/flash/FontList.swf', function(fd) {
					resolve( fonts = fd.fonts() );
				});
			});
		}

		$urlRouterProvider.otherwise('/_');

		$stateProvider
			.state('preview', {
				url: '/:fontName',
				abstract: true,
				templateUrl: 'app/main/main.html',
				controller: 'MainCtrl',
				resolve: {
					allfonts: detectFonts
				}
			})
			.state('preview.lipsum', {
				url: '',
				templateUrl: 'partials/lipsum.html'
			});
	})
	.run(function ($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	})
;
