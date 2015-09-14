# Indoge

- heroku link TBD

## Minimum Viable Product
Clone of job-searching site Indeed; App for doges to search for jobs from
hoomins and vice versa.

User functionality on two fronts, dogs and humans:
Dogs can:
- [ ] Create accounts
- [ ] Create sessions
- [ ] Upload resume
- [ ] Create resume/profile using form
- [ ] Set privacy settings on resumes
- [ ] Save jobs

Humans can:
- [ ] Create accounts
- [ ] Create sessions
- [ ] Post jobs for dogs
- [ ] Tag jobs to facilitate searches

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

### Phase 1: Human User Authentication, Simple Job Creation (~1 day)
Implement human-side account creation. Build Human side functionality. Humans
should have a personal show page containing their own posted jobs and a link
to post more jobs. Should be able to post jobs using a form, with title,
description, and optional expire_date, salary, and url. Should be able to
delete jobs. Jobs should be visible from the jobs index (which will later be
discarded once search is implemented).

[Details][phase-one]

### Phase 2: Dog User Auth and Simple Resume Creation (~1 day)
Build Dog side functionality. Dogs should have a personal show page
containing their uploaded resume and saved jobs. Page should have a link to
create a new resume or edit an existing one. Should be able to create resumes
using a form, with name, email, and body. Resumes can be set to private. Dogs
should be able to delete resumes. Resumes should be visible from the resume  
index unless private (which will later be discarded when search is
implemented). Both jobs and resume indices should be accessible from front
page; no login is required to view them.

[Details][phase-two]

### Phase 3: Search page and query (~1-2 days)
Default root page to be the jobs search bar. Search takes text (will implement
location later). The original site had results continue through links but I
think this will be a good place to use Backbone to swap out the page's search
results with the next 10 when clicking a 'Next page' button or link. Backbone
search view will replace the old index. Each job item should be a subview
containing title, human name, post date (created_at), description, and button
to save. Saved jobs will appear in the dog's account show page, where they can
be deleted.

[Details][phase-three]

### Phase 4: Searching by tags (~1 day)
Create tags and taggings tables and associations; taggings is a join table for
jobs and tags. Build search result from jobs that have tags that include the
text of the query.

[Details][phase-four-five-six]

### Phase 5: Searching by text (~1-2 days)
Extend search functionality to search for the body of the job description.
Build search result from sql querying of the database. Once this is done for
jobs it should be trivial to replicate the functionality for resumes.

[Details][phase-four-five-six]

### Phase 6: Searching by location (~1-2 days)
Extend search functionality to use location. I plan to either use some sort of
zip code or state mapping to add to the jobs table. Location searching should
be usable without text searching.

[Details][phase-four-five-six]

### Phase 7: Filter sidebar (~2 days)
Create the filter sidebar on the search results page. Allow users to filter job
search results by salary, title, human name, tags, and other criteria that I
may end up adding to the jobs table. Allow sorting by post date and expiration
date.

[Details][phase-seven]

### Bonus Features (TBD)
- [ ] Let dogs save search query settings
- [ ] Owner ratings/reviews
- [ ] Directly apply to jobs from page


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four-five-six]: ./docs/phases/phase456.md
[phase-seven]: ./docs/phases/phase7.md
