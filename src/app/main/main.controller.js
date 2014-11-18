'use strict';

angular.module('fontxplor')
	.controller('MainCtrl', function ($scope, localfonts, googlefonts, $routeParams) {

		console.log(localfonts);
		console.log(googlefonts);
		console.log($routeParams);

		$scope.variantsString = 'Portez ce vieux whisky au juge blond qui fume';


		$scope.localfonts = {};
		// convert the font array to a font map
		localfonts.forEach(function( font ) {
			$scope.localfonts[font.fontName] = font;
		});

		// reference to the current font, according to the url
		$scope.currentFont = $routeParams.fontName !== '_' && $scope.localfonts[ $routeParams.fontName ];
		$scope.mode = $routeParams.mode;

		// build a style object to apply the font-family using ng-style
		$scope.getFontFamily = function( font ) {
			return { 'font-family': '"' + font.fontName + '"' };
		};

		$scope.getTemplateURL = function( mode ) {
			return mode !== '_' && 'partials/' + mode + '.html';
		};

	});
