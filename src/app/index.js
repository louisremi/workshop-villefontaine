'use strict';

angular.module('fontxplor', ['ngAnimate', 'ngResource', 'ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/main/main.html',
				controller: 'MainCtrl',
				resolve: {
					allfonts: function( $q ) {
						return $q(function(resolve) {
							new FontDetect('font-detect-swf', '/bower_components/font-detect-js/flash/FontList.swf', function(fd) {
								resolve(fd.fonts());
							});
						});
					}
				}
			})
			.otherwise({
				redirectTo: '/'
			});
	})
;
