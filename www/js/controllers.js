angular.module('starter.controllers', [])

.controller('InicioCtrl', function($scope) {})

.controller('PlanesCtrl', function($scope) {
  
})

.controller('ChatDetailCtrl', function($scope) {
  
})

.controller('NoticiasCtrl', function($scope, Noticias) {
  	$scope.settings = {
    	enableFriends: true
  	};

  	$scope.noticias = Noticias.get();
  	console.log($scope);
});
