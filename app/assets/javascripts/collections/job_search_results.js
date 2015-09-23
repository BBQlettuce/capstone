Indoge.Collections.JobSearchResults = Backbone.Collection.extend({
  url: "/api/jobs/search",
  model: Indoge.Models.Job

  // currentQuery: function () {
  //   this._currentQuery = this._currentQuery || "";
  //   return this._currentQuery;
  // },
  //
  // resetQuery: function() {
  //   this._currentQuery = "";
  // },
  //
  // currentPage: function() {
  //   this._currentPage = this._currentPage || 1;
  //   return this._currentPage;
  // },
  //
  // resetPage: function() {
  //   this._currentPage = 1;
  // }

  // parse: function (response) {
  // 	if (response.total_count) {
  // 		this.total_count = response.total_count;
  // 	}
  // 	return response.results;
  // }

})
