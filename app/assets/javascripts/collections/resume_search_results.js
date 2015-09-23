Indoge.Collections.ResumeSearchResults = Backbone.Collection.extend({
  url: "/api/resumes/search",
  model: Indoge.Models.Resume,

  parse: function(response) {
    if (response.total_count) {
      this.totalCount = response.total_count;
    }
    if (response.num_pages) {
      this.numPages = response.num_pages;
    }

    return response.search_results;
  }
})
