// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [ 'ionic', 
                            'starter.controllers', 
                            'starter.services', 
                            'ngResource', 
                            'uiGmapgoogle-maps', 
                            'ngCordova',
                            'chieffancypants.loadingBar'])

.run(function($ionicPlatform) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, cfpLoadingBarProvider) {
  
  cfpLoadingBarProvider.includeSpinner = true;

  $ionicConfigProvider.tabs.position('bottom')
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.inicio', {
    url: '/inicio',
    views: {
      'tab-inicio': {
        templateUrl: 'templates/tab-inicio.html',
        controller: 'InicioCtrl'
      }
    }
  })

  .state('tab.web', {
      url: '/web',
      views: {
        'tab-inicio': {
          templateUrl: 'templates/inicio-web.html'
        }
      }
    })

  .state('tab.multiplataforma', {
      url: '/multiplataforma',
      views: {
        'tab-inicio': {
          templateUrl: 'templates/inicio-multiplataforma.html'
        }
      }
    })

  .state('tab.diseno', {
      url: '/diseno',
      views: {
        'tab-inicio': {
          templateUrl: 'templates/inicio-diseno.html'
        }
      }
    })

  .state('tab.logo', {
      url: '/logo',
      views: {
        'tab-inicio': {
          templateUrl: 'templates/inicio-logo.html'
        }
      }
    })

  .state('tab.3d', {
      url: '/3d',
      views: {
        'tab-inicio': {
          templateUrl: 'templates/inicio-3d.html'
        }
      }
    })

  .state('tab.social', {
      url: '/social',
      views: {
        'tab-inicio': {
          templateUrl: 'templates/inicio-social.html'
        }
      }
    })


  .state('tab.planes', {
      url: '/planes',
      views: {
        'tab-planes': {
          templateUrl: 'templates/tab-planes.html',
          controller: 'PlanesCtrl'
        }
      }
    })

  .state('tab.contacto', {
    url: '/contacto',
    views: {
      'tab-contacto': {
        templateUrl: 'templates/tab-contacto.html',
        controller: 'ContactoCtrl'
      }
    }
  })

  .state('tab.noticias', {
    url: '/noticias',
    views: {
      'tab-noticias': {
        templateUrl: 'templates/tab-noticias.html',
        controller: 'NoticiasCtrl'
      }
    }
  })

  .state('tab.aplicaciones', {
    url: '/aplicaciones',
    views: {
      'tab-aplicaciones': {
        templateUrl: 'templates/tab-aplicaciones.html',
        controller: 'AplicacionesCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/inicio');

})

.directive('browseTo', function ($ionicGesture) {
 return {
  restrict: 'A',
  link: function ($scope, $element, $attrs) {
   var handleTap = function (e) {
    // todo: capture Google Analytics here
    var inAppBrowser = window.open(encodeURI($attrs.browseTo), '_system');
   };
   var tapGesture = $ionicGesture.on('tap', handleTap, $element);
   $scope.$on('$destroy', function () {
    // Clean up - unbind drag gesture handler
    $ionicGesture.off(tapGesture, 'tap', handleTap);
   });
  }
 }
});
