class Api::CardsController < ApplicationController
  def create
    @card = Card.new(card_params)
    @card.list_id = @card.list.id

    if @card.save!
      @board = card.list.board
      @list = card.list

      @list_ids = []
      @board.lists.each do |list|
        @list_ids << list.id
      end

      @cards = @card.list.cards
    end
  end

  private
  def card_params
    params.require(:card).permit(:title, :due_date)
  end
end
