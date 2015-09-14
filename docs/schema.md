# Schema Information

## dogs
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
name            | string    | not null
session_token   | string    | not null, unique

## humans
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
name            | string    | not null
session_token   | string    | not null, unique

## resumes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
dog_id      | integer   | not null, foreign key (references dogs)
location    | ???       | not null, some sort of location declaration
body        | text      | not null; either from direct upload or built from form

## jobs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
human_id    | integer   | not null, foreign key (references humans)
title       | string    | not null
description | text      | not null
location    | ???       | not null, some form of location declaration
expire_date | datetime  | optional
salary      | float     | optional
url         | string    | optional

## jobsaves
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
dog_id      | integer   | not null, foreign key (references users)
job_id      | integer   | not null, foreign key (references jobs)

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
label       | string    | not null, unique

## jobtaggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
job_id      | integer   | not null, foreign key (references jobs)
tag_id      | integer   | not null, foreign key (references tags)
