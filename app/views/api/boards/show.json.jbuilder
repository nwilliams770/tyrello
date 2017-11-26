# probably need to add lists and cards here later
json.set! @board.id do
  json.extract! @board, :id, :name, :starred
end
