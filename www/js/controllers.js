angular.module('starter.controllers', [])

.controller('InitKey', function($scope) {
    console.log('InitKey');
})

.controller('SectionsCtrl', function($scope, Sections) {
    $scope.sections = Sections.all();
});
