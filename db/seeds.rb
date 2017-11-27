User.destroy_all
Board.destroy_all

users = [{username: "sansa", email: "sansastartk@me.com"}, {username: "arya", email: "aryastark@me.com"}]

boards = [{name: "revenge list", author_id: 1}, {name: "white walker takeover", author_id: 1},
          {name: "how to trick littlefinger", author_id: 2}]

users.each do |user|
  user.create
end

boards.each do |board|
  board.create
end
