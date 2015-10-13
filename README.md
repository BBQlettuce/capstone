# Indoge

- http://indoge.herokuapp.com

## Description
Indoge is a jobs searching/posting app for [doges][doge]
based on popular job board Indeed.com.
All users can search for jobs and resumes without an account. Signing up gives
users the ability to save jobs, post jobs, and post a resume for potential
employer doges to find.

Search for jobs via keyword in the 'what' bar (try searching 'job', 'doge', or
even blank query). Location search is a work in progress.

[doge]: ./app/assets/images/doge.jpg
## Technologies used
Indoge is built on a Ruby on Rails server backend and a Backbone.js front end.
Backbone allows for a 100% single page app experience with fast navigation and
rendering.

Signup and login via Twitter is supported by Omniauth integration.

Resume uploads are handled by Paperclip, with storage capabilities supported by
Amazon Web Services.

## TODOS
* Extend search to use locations
* Implement JobTags for search bar snazziness
