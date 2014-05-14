window.JA.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts_index"],

  initialize: function() {
    this.listenTo(this.collection,
      "destroy add change:title reset",
      this.render);
  },

  render: function () {
    alert('rendering index')
    var renderedContent = this.template({
      posts: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  },

  events: {
    "click button.delete": "deleteThing",
    // "click .link-show:": "jumpToShow"
  },

  deleteThing: function(event) {
    event.preventDefault();
    var id = $(event.target).data('id')
    var model = this.collection.get(id)
    model.destroy();
  },

});

