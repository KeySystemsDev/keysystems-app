angular.module('starter.controllers', [])

.controller('InicioCtrl', function($scope) {})

.controller('PlanesCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('NoticiasCtrl', function($scope, Noticias) {
  $scope.settings = {
    enableFriends: true
  };

  $scope.noticias = Noticias.get();
});
