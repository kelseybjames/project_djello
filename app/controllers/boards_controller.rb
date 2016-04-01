class BoardsController < ApplicationController

  def index
    @boards = Board.all
    respond_to do |format|
      format.js {}
    end
  end
end
