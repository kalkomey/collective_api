class Api::V1::GroupsController < ApplicationController
  before_action :set_api_v1_group, only: [:edit, :update, :destroy]

  def index
    @api_v1_groups = Group.all
  end

  def show
    @resource = Group.includes(memberships: :employee).find(params[:id])
  end

  def new
    @api_v1_group = Group.new
  end

  def edit
  end

  def create
    @api_v1_group = Group.new(api_v1_group_params)

    respond_to do |format|
      if @api_v1_group.save
        format.html { redirect_to @api_v1_group, notice: 'Group was successfully created.' }
        format.json { render action: 'show', status: :created, location: @api_v1_group }
      else
        format.html { render action: 'new' }
        format.json { render json: @api_v1_group.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @api_v1_group.update(api_v1_group_params)
        format.html { redirect_to @api_v1_group, notice: 'Group was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @api_v1_group.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @api_v1_group.destroy
    respond_to do |format|
      format.html { redirect_to api_v1_groups_url }
      format.json { head :no_content }
    end
  end

  def search
    @api_v1_groups = Group.where(category: params[:category]).all
    render action: "index"
    return
  end

  def categories
    @categories = Group.uniq.pluck(:category)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_v1_group
      @api_v1_group = Group.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_v1_group_params
      params[:api_v1_group]
    end
end
