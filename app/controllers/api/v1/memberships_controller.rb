class Api::V1::MembershipsController < ApplicationController

  def create

    unless @membership = Membership.create(membership_params)
      render json: @resource.errors, status: :unprocessable_entity
      return
    end

    render action: 'show', status: :created
    return
  end

  private

    def membership_params
      params.require(:membership).permit(:user_id, :group_id, :coordinator)
    end
end
