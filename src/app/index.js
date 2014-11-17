'use strict';

angular.module('fontxplor', ['ngAnimate', 'ngResource', 'ngRoute'])
	.config(function ($routeProvider) {
		var fonts;

		$routeProvider
			.when('/:fontName', {
				templateUrl: 'app/main/main.html',
				controller: 'MainCtrl',
				resolve: {
					allfonts: function( $q ) {
						return fonts || $q(function(resolve) {
							new FontDetect('font-detect-swf', '/bower_components/font-detect-js/flash/FontList.swf', function(fd) {
								resolve( fonts = fd.fonts() );
							});
						});
					}
				}
			})
			.otherwise({
				redirectTo: '/_'
			});
	})
;
