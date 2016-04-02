class BoardsController < ApplicationController

  def index
    @boards = current_user.member_boards
    respond_to do |format|
      format.json { render json: @boards.to_json(include: { lists: { include: :cards } } ) }
    end
  end

  def show
    @board = Board.find(params[:id])
    respond_to do |format|
      format.json { render json: @board.to_json(include: { lists: { include: :cards } } ) }
    end
  end

  def create
    @board = Board.new( board_params )
    @board.user_id = current_user.id
    respond_to do |format|
      if @board.save
        format.json { render json: @board.to_json() }
      else
        format.json { render json: @board.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def board_params
    params.require(:board).permit(:title)
  end
end
