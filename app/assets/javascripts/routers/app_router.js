window.JA.Routers.AppRouter = Backbone.Router.extend({

  initialize: function() {
    this.$rootEl = $('#content')
  },

  routes: {
    "": "postsIndex",
    "posts/new": "postForm",
    "posts/:id": "postShow",
  },

  postsIndex: function () {
    var posts = JA.Collections.posts
    var that = this;
    posts.fetch({
      success: function(response) {
        var view = new JA.Views.PostsIndex({
          collection: posts
        });

        that._swapView(view)
      }
    })
  },

  postShow: function (id) {
    var post = JA.Collections.posts.getOrFetch(id);
    var showView = new JA.Views.PostShow({
      model: post
    });
    this._swapView(showView)
  },

  postForm: function() {
    var post = new JA.Models.Post();
    var formView = new JA.Views.PostForm({
      model: post
    });
    this._swapView(formView)
  },

  _swapView: function(newView) {
    if(this.currentView) {
      this.currentView.remove();
    }
    this.currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }


});
