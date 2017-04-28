(function() {
  function ModalCtrl($rootScope, $uibModal, $scope, Room) {
    this.create = function(input) {
      Room.addRoom(input);
      $uibModalInstance.close();
    };

    this.cancel = function() {
      $uibModalInstance.dismiss();
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$rootScope', '$scope', '$uibModal', 'Room', ModalCtrl]);
})();
