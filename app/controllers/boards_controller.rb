class BoardsController < ApplicationController
  def create
    @board = Board.new(board_params)
    if @board.save!
      render :json
    else
      render :json, @board.errors.full_messages, status: 422
    end
  end

  def index
    @board = Board.find(params[:id])
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
