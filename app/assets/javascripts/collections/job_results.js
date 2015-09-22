Indoge.Collections.JobSearchResults = Backbone.Collection.extend({
  url: "/api/jobs/search",
  model: Indoge.Models.Job

  // parse: function (response) {
  // 	if (response.total_count) {
  // 		this.total_count = response.total_count;
  // 	}
  // 	return response.results;
  // }

})
