(function() {
  function LandingCtrl($rootScope, $scope, Room, $uibModal) {
    this.rooms = Room.all;

    this.open = function() {
      $rootScope.modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'templates/modal.html',
        controller: 'ModalCtrl',
        controllerAs: 'modal',
        size: 'modal-sm',
        scope: $scope
      });
    };


  }

  angular
    .module('blocChat')
    .controller('LandingCtrl', ['$rootScope', '$scope', 'Room', '$uibModal', LandingCtrl]);
})();
