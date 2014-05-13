window.JA = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},

  initialize: function () {
    new JA.Routers.AppRouter();

    Backbone.history.start();

    // var posts = JA.Collection.posts = JA.Collection.Posts()
    // posts.fetch(
    //   success: function() {
    //     view = new JA.Views.PostsIndex();
    //     var $el = $('#content'));
    //     $el.append(view);
    //   });


  }

}

$(function() {
  JA.initialize();
});
