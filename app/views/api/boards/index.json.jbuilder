# json.boards do
  # json.array!
   @boards.each do |board|
    json.set! board.id do
      json.extract! board, :id, :name, :starred
    end
  end
# end

# json.shared_boards do
#   json.array! @shared_boards do |shared_board|
#     json.set! shared_board.id do
#       json.extract! shared_board, :id, :name, :starred
#     end
#   end
# end
