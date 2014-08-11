class Api::V1::EmployeesController < ApplicationController
  before_action :set_api_v1_employee, only: [:edit, :update, :destroy]

  # GET /api/v1/employees
  # GET /api/v1/employees.json
  def index
    @api_v1_employees = Employee.order(:name).all
  end

  # GET /api/v1/employees/1
  # GET /api/v1/employees/1.json
  def show
    @resource = Employee.includes(memberships: :group).find(params[:id])
  end

  # GET /api/v1/employees/new
  def new
    @api_v1_employee = Employee.new
  end

  # GET /api/v1/employees/1/edit
  def edit
  end

  # POST /api/v1/employees
  # POST /api/v1/employees.json
  def create
    @api_v1_employee = Employee.new(api_v1_employee_params)

    respond_to do |format|
      if @api_v1_employee.save
        format.html { redirect_to @api_v1_employee, notice: 'Employee was successfully created.' }
        format.json { render action: 'show', status: :created }
      else
        format.html { render action: 'new' }
        format.json { render json: @api_v1_employee.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/v1/employees/1
  # PATCH/PUT /api/v1/employees/1.json
  def update
    respond_to do |format|
      if @api_v1_employee.update(api_v1_employee_params)
        format.html { redirect_to @api_v1_employee, notice: 'Employee was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @api_v1_employee.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/v1/employees/1
  # DELETE /api/v1/employees/1.json
  def destroy
    @api_v1_employee.destroy
    respond_to do |format|
      format.html { redirect_to api_v1_employees_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_v1_employee
      @api_v1_employee = Employee.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_v1_employee_params
      params.require(:employee).permit(:name)
    end
end
