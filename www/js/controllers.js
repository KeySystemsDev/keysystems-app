angular.module('starter.controllers', [])

.controller('InicioCtrl', function($scope) {
	
})

.controller('PlanesCtrl', function($scope) {
  
})

.controller('ChatDetailCtrl', function($scope) {
  
})

.controller('NoticiasCtrl', function($scope, Noticias, $cordovaSocialSharing) {

  	$scope.noticias = Noticias.get();

  	$scope.shareAnywhere = function(message , subject, images, url) {
        $cordovaSocialSharing.share( message, subject, images, url);
    }

})

.controller('ContactoCtrl', function($scope) {
  	 
  	$scope.map = {  
        center: {   
            latitude: 10.385488, 
            longitude:  -66.960524
        },
        marker: {   
            latitude: 10.385488, 
            longitude:  -66.960524
        }, 
        zoom: 7, 
        id: 0,
        options: {scrollwheel: false}
    };
});
