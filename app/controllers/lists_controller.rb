class ListsController < ApplicationController

  def index
    @lists = List.all
  end

  def create
    @list = List.new(whitelisted_params)
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

  def update
    @list = List.find(params[:id])
    respond_to do |format|
      @list.update(whitelisted_params)
      format.json { render json: @list.to_json }
    end
  end

  def destroy
    @list = List.find(params[:list_id])
  end

  private

  def whitelisted_params
    params.require(:list).permit(:id, :title, :description, :board_id)
  end
end
