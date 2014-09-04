class Api::V1::EmployeesController < ApplicationController
  before_action :set_employee, only: [:update, :destroy]

  def index
    @resources = Employee.all
  end

  def show
    @resource = Employee
      .includes(memberships: { group: :category })
      .find(params[:id])
  end

  def create
    @resource = Employee.new(employee_params)

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

  private

    def set_employee
      @resource = Employee.find(params[:id])
    end

    def employee_params
      params.require(:employee).permit(:name)
    end
end
