class ListsController < ApplicationController

  def index
    @lists = List.all
  end

  def new
    @board = Board.find(params[:id])
    @list = List.new
    respond_to do |format|
      format.json { render json: @board.to_json }
    end
  end

  def create

  end

  def show
    @list = List.find(params[:list_id])
    @board = @list.board
    respond_to do |format| 
      format.json { render json: @list.to_json }
    end
  end
end
