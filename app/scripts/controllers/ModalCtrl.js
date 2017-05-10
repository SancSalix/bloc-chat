(function() {
  function ModalCtrl($rootScope, $uibModal, $scope, $uibModalInstance, Room) {

    this.create = function(input) {
      input = input.trim();
      if(input !== undefined || input !== "" || input !== null) {
        Room.addRoom(input);
        $uibModalInstance.close();
      } else {
        alert("Please enter a valid room name");
      }
    };

    this.cancel = function() {
      $uibModalInstance.dismiss();
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$rootScope', '$scope', '$uibModal', '$uibModalInstance', 'Room', ModalCtrl]);
})();
