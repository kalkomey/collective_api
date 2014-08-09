class Api::V1::GroupsController < ApplicationController
  before_action :set_api_v1_group, only: [:show, :edit, :update, :destroy]

  # GET /api/v1/groups
  # GET /api/v1/groups.json
  def index
    @api_v1_groups = Api::V1::Group.all
  end

  # GET /api/v1/groups/1
  # GET /api/v1/groups/1.json
  def show
  end

  # GET /api/v1/groups/new
  def new
    @api_v1_group = Api::V1::Group.new
  end

  # GET /api/v1/groups/1/edit
  def edit
  end

  # POST /api/v1/groups
  # POST /api/v1/groups.json
  def create
    @api_v1_group = Api::V1::Group.new(api_v1_group_params)

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

  # PATCH/PUT /api/v1/groups/1
  # PATCH/PUT /api/v1/groups/1.json
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

  # DELETE /api/v1/groups/1
  # DELETE /api/v1/groups/1.json
  def destroy
    @api_v1_group.destroy
    respond_to do |format|
      format.html { redirect_to api_v1_groups_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_v1_group
      @api_v1_group = Api::V1::Group.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_v1_group_params
      params[:api_v1_group]
    end
end
