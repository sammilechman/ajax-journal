window.JA.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
  },

  postsIndex: function () {


    var posts = JA.Collections.posts
    posts.fetch({
      success: function(response) {
        var view = new JA.Views.PostsIndex({
          collection: posts
        });
        $("#content").html(view.render().$el);
      }
    })


  },
});
