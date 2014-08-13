class Api::V1::GroupsController < ApplicationController
  before_action :set_group, only: [:edit, :update, :destroy]

  def index
    @resources = Group.all
  end

  def show
    @resource = Group.includes(:category, memberships: :employee).find(params[:id])
  end

  def create
    @resource = Group.new(group_params)

    if @resource.save
      render action: 'show', status: :created
      return
    end

    render json: @resource.errors, status: :unprocessable_entity
    return
  end

  def update
    if @resource.update(employee_params)
      head :no_content
    else
      render json: @resource.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @resource.destroy
    head :no_content
  end

  def search
    @resources =
      Group.includes(:category)
           .where(categories: { name: params[:category] })
           .all

    render action: "index"
    return
  end

  def categories
    @categories = Group.uniq.pluck(:category)
  end

  private

    def set_group
      @resource = Group.find(params[:id])
    end

    def group_params
      params.require(:group).permit(:name, :description, :category_id)
    end
end
