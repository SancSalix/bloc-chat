(function() {
  function LandingCtrl($rootScope, $scope, Room, Message, $uibModal) {
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

    this.currentRoom = null;
    this.currentRoomMessages = null;

    this.selectedRoom = function(room) {
      this.currentRoom = room;
      this.currentRoomMessages = Room.getMessagesById(this.currentRoom.$id);
    }

    this.sendMessage = function(message) {
      Message.send(message, this.currentRoom.$id);
    }

  }

  angular
    .module('blocChat')
    .controller('LandingCtrl', ['$rootScope', '$scope', 'Room', 'Message', '$uibModal', LandingCtrl]);
})();
