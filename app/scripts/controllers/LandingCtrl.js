(function() {
  function LandingCtrl($rootScope, $scope, Room, Message, $uibModal, $timeout, $cookies) {
    this.rooms = Room.all;

    this.open = function() {
      $rootScope.modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-header',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'templates/modal.html',
        controller: 'ModalCtrl',
        controllerAs: 'modal',
        scope: $scope
      });
    };

    this.currentRoom = null;
    this.currentRoomMessages = null;
    $scope.newMessage = "";

    this.selectedRoom = function(room) {
      this.currentRoom = room;
      this.currentRoomMessages = Room.getMessagesById(this.currentRoom.$id);
      this.showRoomList = this.currentRoom.userList;
    }

    this.sendMessage = function(message) {
      Message.send(message, this.currentRoom.$id);
    }

    this.currentUser = $cookies.get('blocChatCurrentUser');
  }

  angular
    .module('blocChat')
    .controller('LandingCtrl', ['$rootScope', '$scope', 'Room', 'Message', '$uibModal', '$timeout', '$cookies', LandingCtrl]);
})();
