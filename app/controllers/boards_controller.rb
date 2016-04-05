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
      format.json { render json: @board.to_json(include: [{ lists: { include: :cards } }, :members]) }
    end
  end

  def create
    @board = current_user.boards.build( board_params )
    respond_to do |format|
      if @board.save
        BoardMembership.create( member_id: current_user.id, board_id: @board.id )
        format.json { render json: @board.to_json() }
      else
        format.json { render json: @board.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @board = Board.find(params[:id])
    respond_to do |format|
      @board.update(board_params)
      format.json { render json: @board.to_json() }
    end
  end

  def destroy
    @board = Board.find(params[:id])
    respond_to do |format|
      @board.destroy
      format.json { head :no_content }
    end
  end

  private

  def board_params
    params.require(:board).permit(:title)
  end
end
