Indoge.Models.CurrentUser = Backbone.Model.extend({
  url: "/api/session",

  initialize: function() {
    this.listenTo(this, "change", this.fireSessionEvent);
  },

  parse: function(response) {
    if (response.posted_jobs) {
      this.postedJobs().set(response.posted_jobs);
      delete response.posted_jobs;
    }
    if (response.resume) {
      this.resume().set(response.resume);
      delete response.resume;
    }
    return response;
  },

  postedJobs: function() {
    if (!this._postedJobs) {
      this._postedJobs = new Indoge.Collections.Jobs([]);
    }
    return this._postedJobs;
  },

  resume: function() {
    if (!this._resume) {
      this._resume = new Indoge.Models.Resume();
    }
    return this._resume;
  },

  isSignedIn: function() {
    return !this.isNew();
  },

  signin: function(options) {
    var user = this;
    var credentials = {
      "user[email]": options.email,
      "user[password]": options.password
    };
    $.ajax({
      url: user.url,
      type: "POST",
      data: credentials,
      dataType: "json",
      success: function(data) {
        user.set(data);
        options.success && options.success();
      },
      error: function() {
        options.error && options.error();
      }
    });
  },

  signout: function(options) {
    var user = this;
    debugger
    $.ajax({
      url: user.url,
      type: "DELETE",
      dataType: "json",
      success: function() {
        user.clear();
        // options.success && options.success();
      }
    });
  },

  fireSessionEvent: function(){
    if(this.isSignedIn()){
      this.trigger("signin");
      console.log("currentUser is signed in!", this);
    } else {
      this.trigger("signout");
      console.log("currentUser is signed out!", this);
    }
  }

})
