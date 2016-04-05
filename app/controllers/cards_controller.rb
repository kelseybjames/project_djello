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

  end

  def destroy
    @card = Card.find(params[:id])
    respond_to do |format|
      if @card.destroy

      else

      end
    end
  end

  private

  def whitelisted_params
    params.require(:card).permit(:title, :description)
  end

end
