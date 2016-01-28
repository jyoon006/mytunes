// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.play();
      this.model.enqueue(); //may need to invoke this outside separately
    }

  },
  // events: {
  //   //when song ends: 
      
  //     //music.addEventListener("ended",function(){
  //       this.model.dequeue();
  //   }
  // }

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
