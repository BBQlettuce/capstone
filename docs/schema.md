# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
human?          | boolean   | not null, true if human account

## resumes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
dog_id      | integer   | not null, foreign key (references users)
name        | string    | not null
email       | string    | not null, may be different from user's email
body        | text      | not null; either from direct upload or built from form

## jobs
column name | data type    | details
------------|--------------|-----------------------
id          | integer      | not null, primary key
human_id    | integer      | not null, foreign key (references users)
title       | string       | not null
description | text         | not null
location    | text/integer | not null, some form of location declaration
post_date   | datetime     | not null
expire_date | datetime     | optional
salary      | float        | optional
url         | string       | optional

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
