# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u1 = User.create!(email: "bananas@hoohah.com", name: "Diddy", password: "password")
u2 = User.create!(email: "doge@doge.com", name: "DHDoge", password: "password")
u3 = User.create!(email: "expand@dong.com", name: "DK", password: "password")

u1.posted_jobs.create!(title: "hunt ducks", description: "seeking a doge who can hunt ducks")
u2.create_resume!(text: "25 years of experience hunting ducks")
u3.posted_jobs.create!(title: "expand", description: "ding dong")
u3.create_resume!(text: "he's bigger, faster, and stronger too")
