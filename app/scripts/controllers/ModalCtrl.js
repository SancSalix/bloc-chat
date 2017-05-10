(function() {
  function ModalCtrl($rootScope, $uibModal, $scope, $uibModalInstance, Room) {

    this.create = function(input) {
      input = input.trim();
      if(input.length > 3) {
        Room.addRoom(input);
        $uibModalInstance.close();
      } else {
        alert("Please enter a valid room name of 4 or more characters");
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
