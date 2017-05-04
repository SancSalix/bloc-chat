(function() {
  function Message($firebaseArray, $cookies, Room) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    var currentTime = new Date().toString();

    return {
      getByRoomId: function (activeRoomId) {
        return allMessages.orderByChild("roomId").equalTo(activeRoomId);
      },
      send: function (newMessage, activeRoomId) {
        messages.$add({
          content: newMessage,
          roomId: activeRoomId,
          sentAt: currentTime,
          username: $cookies.get('blocChatCurrentUser')
        });
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', 'Room', Message]);
})();
