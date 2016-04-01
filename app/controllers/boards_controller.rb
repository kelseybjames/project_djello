class BoardsController < ApplicationController

  def index
    @boards = Board.all
    respond_to do |format|
      format.json { render json: @boards, includes: 'lists' }
    end
  end

  def show
    @board = Board.find(params[:id])
    respond_to do |format|
      format.json { render json: @board.to_json, includes: :lists }
    end
  end
end
