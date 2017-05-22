(function() {
  function ModalCtrl($rootScope, $uibModal, $scope, $uibModalInstance, Room) {

    var allowedNames = [];

    this.create = function(input, selected) {
      if(input == undefined) {
        alert("Please enter a name");
      }
      input = input.trim();
      if(input.length > 3) {
        Room.addRoom(input, selected);
        $uibModalInstance.close();
      } else {
        alert("Please enter a valid room name of 4 or more characters");
      }
    };

    this.cancel = function() {
      $uibModalInstance.dismiss();
    };

    this.userListing =  Room.userAll

    this.createPrivate = function(selected, input) {
      if (selected == undefined) {
        alert("Please select members or choose a public room");
      }
      for(var i = 0; i < selected.length; i++) {
        allowedNames.push(selected[i].name);
      }
      this.create(input, allowedNames);
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$rootScope', '$scope', '$uibModal', '$uibModalInstance', 'Room', ModalCtrl]);
})();
