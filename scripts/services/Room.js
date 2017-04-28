(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    return {
      all: rooms,
      addRoom: function(input) {
        var newRoom = {};
        var number = rooms.length + 1;
        newRoom[number] = input;
        rooms.$add(newRoom[number]);
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
