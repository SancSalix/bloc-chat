 (function() {
     function AlbumCtrl() {
       this.albumData  = [];
       console.log("I created albumData!");
       this.albumData.push(albumPicasso);
       console.log(this.albumData[0].songs[2]);
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();