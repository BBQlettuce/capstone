Indoge.Collections.Resumes = Backbone.Collection.extend({
  url: "/api/resumes",
  model: Indoge.Models.Resume,

  getOrFetch: function(id) {
    var resumes = this;
    var resume = resumes.get(id);
    if (resume) {
      resume.fetch();
    }
    else {
      resume = new this.model({id: id});
      resumes.add(resume);
      resume.fetch({
        error: function() {
          resumes.remove(resume)
        }
      })
    }
    return resume;
  }
  
})
