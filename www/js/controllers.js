angular.module('starter.controllers', [])

.controller('InicioCtrl', function($scope) {
	
})

.controller('PlanesCtrl', function($scope) {
  
})

.controller('ChatDetailCtrl', function($scope) {
  
})

.controller('NoticiasCtrl', function($scope, Noticias, $cordovaSocialSharing) {

  	$scope.noticias = Noticias.get();

  	console.log($scope.noticias);

  	$scope.shareAnywhere = function(message , subject, images, url) {
        $cordovaSocialSharing.share( message, subject, images, url);
    }

});
