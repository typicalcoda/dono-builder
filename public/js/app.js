(function () {

	var app = angular.module('dono', []);



	app.controller('MainController', ['$scope', '$http', function($scope, $http) {
		$scope.greeting = 'Hola!';

		$http.get("/no")
		.then(function(response) {
			$scope.myWelcome = response.data;
		});


	}]);


})();