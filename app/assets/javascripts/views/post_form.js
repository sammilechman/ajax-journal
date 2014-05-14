window.JA.Views.PostForm = Backbone.View.extend({
  template: JST["post_form"],

  // initialize: function() {
  //   this.listenTo(this.model,
  //     "all",
  //     this.render);
  // },

  render: function () {
    console.log('rendering Form view')
    var renderedContent = this.template({
      post: this.model
    });
    this.$el.html(renderedContent);
    return this;
  },

  events: {
    "submit": "submitForm"
  },

  // refresh: function() {
  //   this.collection.fetch();
  // },
  //
  submitForm: function(event) {
    event.preventDefault();
    var formData = $('form').serializeJSON();
    var model = new JA.Models.Post(formData.post)
    model.save({}, {
      success: function() {
        JA.Collections.posts.add(model);
        Backbone.history.navigate("", { trigger: true });
      }
    })
    console.log("SUBBBBBMITTTTTTT");
  }

});

