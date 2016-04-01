# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Board.delete_all
List.delete_all
Card.delete_all

User.create( username: "foobar", email: "foo@bar.com", password: "foo1bar2" )

3.times do
  username = Faker::Internet.user_name
  user = User.create( username: username, email: "#{username}@example.com", password: Faker::Internet.password )
end

User.all.each do |user|
  3.times do
    user.boards.create( title: Faker::Hipster.word )
  end
end

Board.all.each do |board|
  3.times do
    board.lists.create( title: Faker::Hipster.word, description: Faker::Hipster.sentence )
  end
end

List.all.each do |list|
  3.times do
    list.cards.create( title: Faker::Hipster.word, description: Faker::Hipster.sentence )
  end
end
