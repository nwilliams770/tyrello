class Api::CardsController < ApplicationController
  def create
    @card = Card.new(card_params)
    if @card.save!
      @board = @card.list.board
      @list = @card.list
      @lists = @board.lists
      @list_ids = []
      @board.lists.each do |list|
        @list_ids << list.id
      @cards = @card.list.cards

      end
    render 'api/boards/show'
    end
  end

  private
  def card_params
    params.require(:card).permit(:title, :list_id)
  end
end
