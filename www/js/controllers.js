angular.module('starter.controllers', [])

.controller('InitKey', function($scope) {
    console.log('InitKey');
})

.controller('SectionsCtrl', function($scope, Sections, $ionicModal, $window, $timeout) {
    $scope.sections = Sections.all();

	$ionicModal.fromTemplateUrl('templates/modal-inicio.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
		$scope.modalDragStart = { active: true, value: 0 }
	})

	$scope.openModal = function(modal) {
		$scope.modal.show();
	}

	$scope.closeModal = function() {
		return $scope.modal.hide();
	};

});


