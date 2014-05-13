window.JA.Collections.Posts = Backbone.Collection.extend({

  url: '/api/posts',
  model: JA.Models.Post,

  getOrFetch: function (id) {
    var model;
    var posts = this;
    if (model = this.get(id)) {
      model.fetch();
      return model;
    } else {
      model = new JA.Models.Post({ id: id });
      model.fetch({
        success: function () {
          posts.add(model);
        }
      });
      return model;
    }
  }

});

window.JA.Collections.posts = new JA.Collections.Posts();