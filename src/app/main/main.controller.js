'use strict';

angular.module('fontxplor')
	.controller('MainCtrl', function ( $rootScope, $scope, localfonts, googlefonts ) {

		$scope.variantsString = 'Portez ce vieux whisky au juge blond qui fume';

		$scope.localfonts = localfonts;
		var localfontsMap = {};
		// convert the font array to a font map
		localfonts.forEach(function( font ) {
			font.family = font.family;
			localfontsMap[font.family] = font;
		});

		$scope.googlefonts = googlefonts;
		var googlefontsMap = {};
		// convert the font array to a font map
		googlefonts.forEach(function( font ) {
			googlefontsMap[font.family] = font;
		});

		// build a style object to apply the font-family using ng-style
		$scope.getFontFamily = function( family ) {
			return family && { 'font-family': '"' + family + '"' };
		};

		// build a stylesheet url for a particular font
		$scope.getFontFace = function( family ) {
			var font = googlefontsMap[ family ];

			return 'http://fonts.googleapis.com/css?family=' +
				family.replace(' ', '+') + ':' +
				font.variants.join();
		};

	});
