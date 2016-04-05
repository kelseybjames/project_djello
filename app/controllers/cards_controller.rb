class CardsController < ApplicationController

  def create
    @card = Card.new(whitelisted_params)
    respond_to do |format|
      if @card.save
        format.json { render json: @card.to_json }
      end
    end
  end

  def show
    @card = Card.find(params(:id))
    respond_to do |format|
      format.json { render json: @card.to_json }
    end
  end

  def update
    @card = Card.find(params[:id])
    respond_to do |format|
      @card.update(whitelisted_params)
      format.json { render json: @card.to_json }
    end
  end

  def destroy
    @card = Card.find(params[:id])
    respond_to do |format|
      if @card.destroy
        format.json { head :no_content }
      else
        format.json { head :no_content }
      end
    end
  end

  private

  def whitelisted_params
    params.require(:card).permit(:title, :description, :list_id)
  end

end
