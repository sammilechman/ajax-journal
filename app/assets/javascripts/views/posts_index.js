window.JA.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts_index"],

  render: function () {
    var renderedContent = this.template({ posts: this.collection });

    this.$el.html(renderedContent);

    return this;
  }
});

