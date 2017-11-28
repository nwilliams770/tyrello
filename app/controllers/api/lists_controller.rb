class Api::ListsController < ApplicationController

  def create
    @list = List.new(list_params)
    @list.board_id = @list.board.id


    if @list.save
      @board = list.board
      @list_ids = @board.lists.map {|list| list.id}
      # you need an @board variable for the show page to render
      render 'api/boards/show'
    else
      render :json, @board.errors.full_messages, status: 422
    end
  end

  def edit
    @list = List.find(params[:id])
    if @list.save
      @board = @list.board
      @list_ids = @board.lists.map {|list| list.id}
      render 'api/boards/show'
    else
      render :json, @list.errors.full_messages, status: 422
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy!
  end

  private
  def list_params
    params.require(:list).permit(:title)
  end
end
