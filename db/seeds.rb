User.destroy_all
Board.destroy_all
BoardShare.destroy_all
List.destroy_all
Card.destroy_all

user1 = User.create(username: "sansa", email: "sansastartk@me.com", password: "password")
user2 = User.create(username: "arya", email: "aryastark@me.com", password: "password2")

board1 = Board.create(name: "revenge list", author_id: user2.id)
board2 = Board.create(name: "white walkers 101", author_id: user1.id)

list1 = List.create(title: "dragonglass caches", board_id: board2.id)
list3 = List.create(title: "undead dragon recipes", board_id: board2.id)
list4 = List.create(title: "where the lady whitewalkers at?", board_id: board2.id)
list5 = List.create(title: "the Night King", board_id: board2.id)
list6 = List.create(title: "wights and how to make them work FOR YOU", board_id: board2.id)


list2 = List.create(title: "those who have been dealt with", board_id: board1.id)

card1= Card.create(title: "dragon stone", list_id: list1.id)
card2 = Card.create(title: "valeryian steel", list_id: list1.id)

card3 = Card.create(title: "dead dragon bone soup", list_id: list3.id)
card4 = Card.create(title: "dragon liver paté", list_id: list3.id)


BoardShare.create(board_id: board1.id, contributor_id: user1.id)
# users = [[username: "sansa", email: "sansastartk@me.com"], [username: "arya", email: "aryastark@me.com"]]
#
# boards = [{name: "revenge list", author_id: 1}, {name: "white walker takeover", author_id: 1},
#           {name: "how to trick littlefinger", author_id: 2}]
#
# users.each do |user|
#   User.create(user[0])
# end
#
# boards.each do |board|
#   Board.create(board)
# end
#
# User.all.each do |user|
#   Board.all.each do |board|
#     BoardShare.create(board_id: board.id, contributor_id: user.id)
#   end
# end
