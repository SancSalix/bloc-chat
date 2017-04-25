(function () {
 function LandingCtrl (Room)) {
   this.rooms = Room;
   //console.log(this.rooms);
 }

 angular
   .module('blocChat')
   .controller('LandingCtrl', ['Room', LandingCtrl]);
})();
