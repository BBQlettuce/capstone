# Indoge

- heroku link TBD

## Minimum Viable Product
Clone of job-searching site Indeed; App for doges to search for hoomins
and vice versa.

User functionality on two fronts, dogs and humans:
Dogs can:
- [ ] Create accounts
- [ ] Create sessions
- [ ] Upload resume
- [ ] Create resume/profile using form
- [ ] Set privacy settings on resumes
- [ ] Save openings

Owners can:
- [ ] Create accounts
- [ ] Create sessions
- [ ] Post openings for dogs / using URLs
- [ ] Tag openings to facilitate searches
- [ ] Receive applications

All users can:
- [ ] Search for openings based on keywords and locations
- [ ] Filter searches based on requirements/compensation/other attributes
- [ ] Search for resumes using keywords and locations

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Simple Job Creation [Human] (~1 day)
Implement account creation, allowing user to specify if they are a dog or
human. Implement user authentication in Rails. Build Human side functionality.
Humans should have a personal show page containing their own posted jobs and
a link to post more jobs. Should be able to post jobs using a form, with title,
description, and optional expire_date, salary, and url. Should be able to
delete jobs. Jobs should be visible from the jobs index (which will later be
discarded once search isimplemented).

[Details][phase-one]

### Phase 2: Simple Resume Creation [Dog] (~1 day)
Build Dog side functionality. Dogs should have a personal show page
containing their uploaded resumes. Page should have a link to create new
resumes. Should be able to create resumes using a form, with name, email, and
body. Alternatively allow for upload of resume as txt. Resumes can be set to
private. Dogs should be able to delete resumes. Resumes should be visible from
the resume index unless private (which will later be discarded when search is
implemented). Both jobs and resume indices should be accessible from front page;
no login is required to view them.

[Details][phase-two]

### Phase 3: Editing and Displaying Posts (~2 days)
I plan to use third-party libraries to add functionality to the `PostForm` and
`PostShow` views in this phase. First I'll need to add a Markdown editor to the
`PostForm`, and make sure that the Markdown is properly escaped and formatted in
the `PostShow` view. I also plan to integrate Filepicker for file upload so
users can add images to blog posts.

[Details][phase-three]

### Phase 4: User Feeds (~1-2 days)
I'll start by adding a `feed` route that uses the `current_user`'s
`subscribed_blogs` association to serve a list of blog posts ordered
chronologically. On the Backbone side, I'll make a `FeedShow` view whose `posts`
collection fetches from the new route.  Ultimately, this will be the page users
see after logging in.

[Details][phase-four]

### Phase 5: Searching for Blogs and Posts (~2 days)
I'll need to add `search` routes to both the Blogs and Posts controllers. On the
Backbone side, there will be a `SearchResults` composite view has `BlogsIndex`
and `PostsIndex` subviews. These views will use plain old `blogs` and `posts`
collections, but they will fetch from the new `search` routes.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Let dogs save search query settings
- [ ] Let dogs opt to receive automatic updates on owners
- [ ] Advanced searches
- [ ] Owner ratings/reviews
- [ ] Directly email from page
- [ ] Share links

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
