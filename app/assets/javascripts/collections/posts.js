window.JA.Collections.Posts = Backbone.Collection.extend({

  url: '/api/posts',
  model: JA.Models.Post,

});

window.JA.Collections.posts = new JA.Collections.Posts();