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

.controller('ContactoCtrl', function($scope, $ionicPopup, Mensaje) {
  	
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

    $scope.formData = {i_correo_fijo : 'web@keysystems.com.ve'};

    $scope.enviar = function(formData){
      console.log(formData);

      Mensaje.get(formData).$promise.then(function(data) {
            
                    $ionicPopup.alert({ title:    'Mensaje de Enviado',
                                        template: 'El mensaje fue enviado.'});

                    $scope.formData = {i_correo_fijo : 'web@keysystems.com.ve'};

                }, function(error) {
                    // error hand
                    console.log(error);
                    $ionicPopup.alert({ title:    'Mensaje de Error',
                                        template: 'No se pudo enviar el mensaje.'});
                });
    }
});
