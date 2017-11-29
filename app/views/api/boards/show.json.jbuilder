# probably need to add lists and cards here later
json.board do
  json.extract! @board, :id, :name, :starred
end

json.lists do
  json.byId do
    @board.lists.each do |list|
      json.extract! list, :id, :title
    end
  end

  json.allIds do
    json.array! @list_ids
  end
end
