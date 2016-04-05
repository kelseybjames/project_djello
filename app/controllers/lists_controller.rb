class ListsController < ApplicationController

  def index
    @lists = List.all
  end

  def create
    @board = Board.find(params[:id])
    @list = @board.lists.build(whitelisted_params)
    respond_to do |format|
      if @list.save
        format.json { render json: @list.to_json }
      else
        format.json { render json: @list.errors, status: :unprocessable_entity }
      end
    end
  end

  def show
    @list = List.find(params[:list_id])
    @board = @list.board
    respond_to do |format| 
      format.json { render json: @list.to_json }
    end
  end

  def destroy
    @list = List.find(params[:list_id])
  end

  private

  def whitelisted_params
    params.require(:list).permit(:title, :description)
  end
end
