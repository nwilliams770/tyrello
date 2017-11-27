class Api::BoardsController < ApplicationController
  def create
    @board = Board.new(board_params)
    if @board.save!
      render :json
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

    render :index
  end

  def show
    @board = Board.find(params[:id])
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
    params.require(:board).permit(:name, :starred)
  end
end
