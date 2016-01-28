// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    //when the song ends, removes the first song out of songQueue
    this.on('ended', function() {
      this.shift();
      if(this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('add', function(){
      if(this.length===1){
        this.playFirst();
      }

    }, this),

    this.on('dequeue', function(song){
      console.log('this is invoked');
      this.remove(song);
      if(this.length > 0) {
        this.playFirst();
      }
    }, this)
  },

  playFirst: function() {
    this.at(0).play();
  }

  



  
  

});