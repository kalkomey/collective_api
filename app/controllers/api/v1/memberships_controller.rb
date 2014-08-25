class Api::V1::MembershipsController < ApplicationController

  def create

    unless @membership = Membership.create(membership_params)
      render json: @resource.errors, status: :unprocessable_entity
      return
    end

    head :ok
  end

  private

    def membership_params
      params.require(:membership).permit(:employee_id, :group_id, :coordinator)
    end
end
