# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u1 = User.create!(email: "bananas@hoohah.com", name: "Diddy", password: "password")
u2 = User.create!(email: "doge@doge.com", name: "DHDoge", password: "password")
u3 = User.create!(email: "expand@dong.com", name: "Dogey Kong", password: "password")
u4 = User.create!(email: "spamdoge@doge.com", name: "SpamDoge", password: "password")
u5 = User.create!(email: "lonelydoge@doge.com", name: "Shiba", password: "password")

u1.posted_jobs.create!(title: "Duck Hunter",
  description: "Seeking a doge who can hunt ducks. " +
  "At least 5 years of experience required." +
  "Must be comfortable with firearms and rowdy gentlemen. Treats negotiable.",
  salary: 22)
u1.create_resume!(text: "my private resume", private: true)
u2.create_resume!(text: "25 years of experience hunting ducks. Proficient at all kinds of firearms." +
  "Looking to improve my hunting skills in the wilderness.")
u3.posted_jobs.create!(title: "Clean my drums", description: "Please clean my drums. Part-time.", salary: 6)
u3.create_resume!(text:
  "He's the leader of the bunch, you know him well \n" +
  "He's finally back, to kick some tail \n" +
  "His coconut gun, can fire in spurts \n" +
  "If he shoots ya, its gonna hurt \n" +
  "He's bigger, faster, and stronger too \n" +
  "He's the first member, of the DK Crew!")
u5.posted_jobs.create!(title: "Doge walker",
  description: "Position open for doge walker or doge companion." +
    "Required skills: barkchelor's degree in walking and hiking" +
    "Much fun, very streets, wow",
  salary: 13)

25.times do |i|
  u4.posted_jobs.create!(title: "Totally legit job ##{i}",
    description: "Make easy treats without any effort. This is not a scam. Over 200 treats per week and unlimited belly rubs and walks." +
      "Make easy treats without any effort. This is not a scam. Over 200 treats per week and unlimited belly rubs and walks.",
    salary: 200
  )
end

25.times do |i|
  u = User.create!(email: "catbot#{i}", name: "catbot#{i}", password: "password")
  u.create_resume!(text: "i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat. i am a cat.")
end
