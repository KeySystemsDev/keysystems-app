angular.module('starter.controllers', [])

.controller('InicioCtrl', function($scope, $rootScope, $cordovaGeolocation, $http, $ionicSlideBoxDelegate, Slider) {
	//Encuentra pocion de la persona al entrar
    var posOptions = {timeout: 10000, enableHighAccuracy: true};
    
    $cordovaGeolocation.getCurrentPosition(posOptions)
        .then(function (position) {
              $rootScope.lat  = position.coords.latitude;
              $rootScope.long = position.coords.longitude;
        }, function(err) {
            // error
    });
    //*-------------------------------------------------

    Slider.get()
        .$promise.then(function(data) {
            $scope.sliders = data;
            $ionicSlideBoxDelegate.update();

        }, function(error) {
            if ( error.status === 0 || error.status === 404 ) {
                $ionicPopup.alert({ title:    'Error de Conexión',
                                    template: 'No es posible establecer conexión a Internet.'});
            }
        });

    $scope.RecargarSlider = function(){
        $http.get("http://keypanelservices.com/app/key-systems/consultar_slider.php")
            .success(function(data) {
                $scope.sliders = data;
                $ionicSlideBoxDelegate.update();
            })
            .error(function (data, status) {
                if ( status === 0 || status === 404 ) {
                    $ionicPopup.alert({ title:    'Mensaje de Error',
                                        template: 'Error de conexión'});
                }
            }).finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            });
    };
})

.controller('PlanesCtrl', function($scope, $ionicPopup, $http, Planes) {
    console.log("PlanesCtrl");

    Planes.get()
        .$promise.then(function(data) {
            $scope.planes = data;
            console.log(data);

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
                                        template: 'Error de conexión'});
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
                                        template: 'Error de conexión'});
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

.controller('ContactoCtrl', function($scope, $window) {

    $scope.openGeo = function(latitude, longitude, latitude_go, longitude_go) {
        $window.open('geo:' + latitude + ',' + longitude + '?z=11&q=' + latitude_go + ',' + longitude_go + '(Treasure)', '_system', 'location=yes');
    };

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
})

.controller('FormularioCtrl', function($scope, $state, $ionicPopup, Mensaje) {

    $scope.formData = {i_correo_fijo : 'contacto@keysystems.com.ve'};

    $scope.enviar = function(formData){

        Mensaje.get(formData).$promise.then(function(data) {
            
                    $ionicPopup.alert({ title:    'Mensaje de Enviado',
                                        template: 'El mensaje fue enviado.'});

                    $scope.formData = {i_correo_fijo : 'contacto@keysystems.com.ve'};

                    $state.go('tab.contacto');

                }, function(error) {
                    // error hand
                    console.log(error);
                    $ionicPopup.alert({ title:    'Mensaje de Error',
                                        template: 'No se pudo enviar el mensaje.'});
                });
    }
});
