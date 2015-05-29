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
            latitude: 28.469389, 
            longitude:  -81.277089
        },
        marker: {   
            latitude: 28.469389, 
            longitude:  -81.277089
        }, 
        zoom: 7, 
        id: 0,
        options: {scrollwheel: false}
    };
});
