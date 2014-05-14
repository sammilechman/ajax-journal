window.JA.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts_index"],

  initialize: function() {
    this.listenTo(this.collection,
      "destroy add change:title reset",
      this.render);
  },

  render: function () {
    console.log('rendering')
    var renderedContent = this.template({
      posts: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  },

  events: {
    "click button.delete": "remove",
    // "click .link-show:": "jumpToShow"
  },

  // refresh: function() {
  //   this.collection.fetch();
  // },

  remove: function(event) {
    event.preventDefault();
    var id = $(event.target).data('id')
    var model = this.collection.get(id)
    model.destroy();
  },
  //
  // jumpToShow: function(event) {
  //   event.preventDefault();
  //   var id = $(event.target).data('id')
  //
  // }

});

