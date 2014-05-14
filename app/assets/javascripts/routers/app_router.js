window.JA.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/new": "postForm",
    "posts/:id": "postShow",
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

  postShow: function (id) {
    // var post = JA.Collections.posts.fetch(id);

    var post = JA.Collections.posts.getOrFetch(id);
    var showView = new JA.Views.PostShow({
      model: post
    });
    $("#content").html(showView.render().$el);

  },

  postForm: function() {
    var post = new JA.Models.Post();
    var formView = new JA.Views.PostForm({
      model: post
    });
    $("#content").html(formView.render().$el);
  }
});
