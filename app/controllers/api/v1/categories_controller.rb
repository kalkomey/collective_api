class Api::V1::CategoriesController < ApplicationController
  before_action :set_category, only: [:update, :destroy]

  def index
    @resources = Category.all
  end

  def create
    @resource = Category.new(category_params)

    if @resource.save
      render status: :created, nothing: true
      return
    end

    render json: @resource.errors, status: :unprocessable_entity
    return
  end

  def update
    if @resource.update(category_params)
      head :no_content
    else
      render json: @resource.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @resource.destroy
    head :no_content
  end

  private

    def set_category
      @resource = Category.find(params[:id])
    end

    def category_params
      params.require(:category).permit(:name)
    end
end
