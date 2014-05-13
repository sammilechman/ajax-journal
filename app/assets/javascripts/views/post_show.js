window.JA.Views.PostShow = Backbone.View.extend({
  template: JST["post_show"],

  // initialize: function() {
  //   this.listenTo(this.collection,
  //     "destroy add change:title reset",
  //     this.render);
  // },

  render: function () {
    console.log('rendering show view')
    var renderedContent = this.template({
      post: this.model
    });
    this.$el.html(renderedContent);
    return this;
  },

  events: {
    "click button.back": "back"
  },

  // refresh: function() {
  //   this.collection.fetch();
  // },

  back: function(event) {
    event.preventDefault();
    Backbone.history.navigate("", { trigger: true });
  }

});

