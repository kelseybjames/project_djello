class CardMembershipsController < ApplicationController
  def create
    @membership = CardMembership.new(whitelisted_params)
    respond_to do |format|
      @membership.save
      format.json { render json: @membership.to_json( include: :member ) }
    end
  end

  def destroy
    @membership = CardMembership.find_by(card_id: params[:card_id], member_id: params[:member_id])
    respond_to do |format|
      @membership.destroy
      format.json { head :no_content }
    end
  end

  private

  def whitelisted_params
    params.require(:card_membership).permit(:card_id, :member_id)
  end
end
