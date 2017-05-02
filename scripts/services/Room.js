(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    var messageRef = firebase.database().ref().child("messages");

    return {
      all: rooms,
      addRoom: function(input) {
        rooms.$add({ name: input });
      },
      getMessagesById: function(activeRoomId){
                return $firebaseArray(messageRef.orderByChild("roomId").equalTo(activeRoomId));
            }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
