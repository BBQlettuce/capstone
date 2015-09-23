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
u4 = User.create!(email: "spamdoge@doge.com", name: "SpamDoge", password: "password")

u1.posted_jobs.create!(title: "Duck Hunter",
  description: "Seeking a doge who can hunt ducks. " +
  "At least 5 years of experience required. Treats negotiable.")
u1.create_resume!(text: "my private resume of downthrow upair", private: true)
u2.create_resume!(text: "25 years of experience hunting ducks.")
u3.posted_jobs.create!(title: "expand", description: "ding dong")
u3.create_resume!(text:
  "He's the leader of the bunch, you know him well \n" +
  "He's finally back, to kick some tail \n" +
  "His coconut gun, can fire in spurts \n" +
  "If he shoots ya, its gonna hurt \n" +
  "He's bigger, faster, and stronger too \n" +
  "He's the first member, of the DK Crew!")

25.times do |i|
  u4.posted_jobs.create!(title: "Totally legit job ##{i}",
    description: "Make easy treats without any effort. This is not a scam. Add some more lines to make it look longer. Hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue hue. "
  )
end
