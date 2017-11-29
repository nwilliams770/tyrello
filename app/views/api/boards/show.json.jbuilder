# probably need to add lists and cards here later
json.byId do
  json.set! @board.id do
    json.extract! @board, :id, :name, :starred
  end
end




json.lists do
  json.byId do
    @board.lists.each do |list|
      json.set! list.id do
        json.extract! list, :id, :title
      end
    end
  end

  json.allIds do
    json.array! @list_ids
  end
end


json.cards do
  json.byId do
    @cards.each do |card|
      json.set! card.id do
        json.extract! card, :id, :title
      end
    end
  end

  json.byListId do

    @lists.each do |list|
      json.set! list.id do
        json.array!(list.cards) do |card|
          json.id card.id
        end
      end
    end
  end
end
#
#   json.allIds do
#     @board.lists.each do |list|
#       json.set! list.id do
#         list.cards.each do |card|
#           json.array! card.id
#         end
#       end
#     end
#   end
# end
