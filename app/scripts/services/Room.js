(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    var messageRef = firebase.database().ref().child("messages");
    var userDatabase = firebase.database().ref().child("userID");
    var userRef = $firebaseArray(userDatabase);

    return {
      all: rooms,
      addRoom: function(input, names) {
        rooms.$add({
          name: input,
          userList: names
        });
      },
      userAll: userRef,
      getMessagesById: function(activeRoomId) {
        return $firebaseArray(messageRef.orderByChild("roomId").equalTo(activeRoomId));
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
