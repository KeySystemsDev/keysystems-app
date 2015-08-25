angular.module('starter.controllers', [])

.controller('InicioCtrl', function($scope) {
	
})

.controller('PlanesCtrl', function($scope, $ionicPopup, $http, Planes) {
    console.log("PlanesCtrl");

    Planes.get()
        .$promise.then(function(data) {
            $scope.planes = data;

        }, function(error) {
            if ( error.status === 0 || error.status === 404 ) {
                $ionicPopup.alert({ title:    'Error de Conexión',
                                    template: 'No es posible establecer conexión a Internet.'});
            }
        });

    $scope.RecargarPlanes = function(){
        $http.get("http://keypanelservices.com/app/key-systems/consulta_planes.php")
            .success(function(data) {
                $scope.planes = data;
            })
            .error(function (data, status) {
                if ( status === 0 || status === 404 ) {
                    $ionicPopup.alert({ title:    'Mensaje de Error',
                                        template: 'Error de Conección'});
                }
            }).finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            });
    };
})

.controller('AplicacionesCtrl', function($scope, $ionicPopup, $http, Aplicaciones) {
    console.log("AplicacionesCtrl");

    Aplicaciones.get()
        .$promise.then(function(data) {
            $scope.aplicaciones = data;

        }, function(error) {
            if ( error.status === 0 || error.status === 404 ) {
                $ionicPopup.alert({ title:    'Error de Conexión',
                                    template: 'No es posible establecer conexión a Internet.'});
            }
        });

    $scope.RecargarApp = function(){
        $http.get("http://keypanelservices.com/app/key-systems/consulta_app.php")
            .success(function(data) {
                $scope.aplicaciones = data;
            })
            .error(function (data, status) {
                if ( status === 0 || status === 404 ) {
                    $ionicPopup.alert({ title:    'Mensaje de Error',
                                        template: 'Error de Conección'});
                }
            }).finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            });
    };
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
