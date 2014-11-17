'use strict';

angular.module('fontxplor')
	.controller('MainCtrl', function ($scope, allfonts, $stateParams) {
console.log('here');
		$scope.allfonts = {};
		// convert the font array to a font map
		allfonts.forEach(function( font ) {
			$scope.allfonts[font.fontName] = font;
		});

		// reference to the current font, according to the url
		$scope.currentFont = $stateParams.fontName !== '_' && $scope.allfonts[ $stateParams.fontName ];

		// build a style object to apply the font-family using ng-style
		$scope.getFontFamily = function( font ) {
			return { 'font-family': '"' + font.fontName + '"' };
		};

	});
