'use strict';

angular.module('fontxplor')
	.controller('MainCtrl', function ($scope, allfonts, $routeParams) {

		$scope.allfonts = {};
		// convert the font array to a font map
		allfonts.forEach(function( font ) {
			$scope.allfonts[font.fontName] = font;
		});

		// reference to the current font, according to the url
		$scope.currentFont = $routeParams.fontName !== '_' && $scope.allfonts[ $routeParams.fontName ];

		// build a style object to apply the font-family using ng-style
		$scope.getFontFamily = function( font ) {
			return { 'font-family': '"' + font.fontName + '"' };
		};

	});
