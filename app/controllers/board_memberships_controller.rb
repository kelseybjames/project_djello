class BoardMembershipsController < ApplicationController

  def create
    @membership = BoardMembership.new(whitelisted_params)
    respond_to do |format|
      @membership.save
      format.json { render json: @membership.to_json( include: :member ) }
    end
  end

  def destroy
    @membership = BoardMembership.find_by(board_id: params[:board_id], member_id: params[:member_id])
    respond_to do |format|
      @membership.destroy
      format.json { head :no_content }
    end
  end

  private

  def whitelisted_params
    params.require(:board_membership).permit(:board_id, :member_id)
  end
end
