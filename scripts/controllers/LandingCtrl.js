(function() {
    function LandingCtrl($scope, Room) {
        this.rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['$scope', 'Room', LandingCtrl] );
})();
