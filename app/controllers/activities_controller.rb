class ActivitiesController < ApplicationController

  def create
    @activity = Activity.new(whitelisted_params)
    respond_to do |format|
      @activity.save
      format.json { render json: @activity.to_json }
    end
  end

  private

  def whitelisted_params
    params.require(:activity).permit(:user_id, :card_id)
  end
end
