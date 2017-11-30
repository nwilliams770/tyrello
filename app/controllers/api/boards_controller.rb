class Api::BoardsController < ApplicationController
  def create
    @board = Board.new(board_params)
    @board.author_id = current_user.id

    if @board.save
      @boards = current_user.boards
      @shared_boards = current_user.shared_boards

      @board_ids = []
      @boards.each do |board|
        @board_ids << board.id
      end

      @shared_board_ids = []
      @shared_boards.each do |board|
        @shared_board_ids << board.id
      end

      @list_ids = []
      @boards.each do |board|
        board.lists.each do |list|
          @list_ids << list.id
        end
      end

      @cards = []
      @board.lists.each do |list|
        list.cards.each do |card|
          @cards << card
        end
      end
      render :index
    else
      render :json, @board.errors.full_messages, status: 422
    end
  end

  def index
    # p params
    # debugger -=> params
    # if params.include?(:user_id)
      #first find the user from the params
      #pull their boards
      #return them
    # prep_views
    @boards = current_user.boards
    @shared_boards = current_user.shared_boards

    @board_ids = []
    @boards.each do |board|
      @board_ids << board.id
    end

    @shared_board_ids = []
    @shared_boards.each do |board|
      @shared_board_ids << board.id
    end

    @list_ids = []
    @boards.each do |board|
      board.lists.each do |list|
        @list_ids << list.id
      end
    end

    # @cards = []
    # @board.lists.each do |list|
    #   list.cards.each do |card|
    #     @cards << card
    #   end
    # end
    render :index
  end

  def show
    @board = Board.find(params[:id])
    @boards = current_user.boards
    @shared_boards = current_user.shared_boards

    @board_ids = []
    @boards.each do |board|
      @board_ids << board.id
    end

    @shared_board_ids = []
    @shared_boards.each do |board|
      @shared_board_ids << board.id
    end

    @lists = @board.lists
    @list_ids = []
    @board.lists.each do |list|
      @list_ids << list.id
    end

    @cards = []
      @board.lists.each do |list|
        list.cards.each do |card|
          @cards << card
        end
      end
    render :show
  end

  def edit
    @board = Board.find(params[:id])
    if @board.save!
      render :json
    else
      render :json, @board.errors.full_messages, status: 422
    end
  end

  def destroy
    @board = Board.find(params[:id])
    @board.destroy!
  end

  private

  def board_params
    params.require(:board).permit(:name)
  end

  # def prep_views
  #   @boards = current_user.boards
  #   @shared_boards = current_user.shared_boards
  #
  #   @board_ids = []
  #   @boards.each do |board|
  #     @board_ids << board.id
  #   end
  #
  #   @shared_board_ids = []
  #   @shared_boards.each do |board|
  #     @shared_board_ids << board.id
  #   end
  #
  #   @list_ids = []
  #   @boards.each do |board|
  #     board.lists.each do |list|
  #       @list_ids << list.id
  #     end
  #   end
  #
  #   @cards = []
  #   @board.lists.each do |list|
  #     list.cards.each do |card|
  #       @cards << card
  #     end
  #   end
  # end
end
