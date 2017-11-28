User.destroy_all
Board.destroy_all
BoardShare.destroy_all

user1 = User.create(username: "sansa", email: "sansastartk@me.com", password: "password")
user2 = User.create(username: "arya", email: "aryastark@me.com", password: "password2")

board1 = Board.create(name: "revenge list", author_id: user2.id)
board2 = Board.create(name: "white walkers 101", author_id: user1.id)

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
