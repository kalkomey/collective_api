require 'test_helper'

class Api::V1::EmployeesControllerTest < ActionController::TestCase
  setup do
    @api_v1_employee = api_v1_employees(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:api_v1_employees)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create api_v1_employee" do
    assert_difference('Api::V1::Employee.count') do
      post :create, api_v1_employee: {  }
    end

    assert_redirected_to api_v1_employee_path(assigns(:api_v1_employee))
  end

  test "should show api_v1_employee" do
    get :show, id: @api_v1_employee
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @api_v1_employee
    assert_response :success
  end

  test "should update api_v1_employee" do
    patch :update, id: @api_v1_employee, api_v1_employee: {  }
    assert_redirected_to api_v1_employee_path(assigns(:api_v1_employee))
  end

  test "should destroy api_v1_employee" do
    assert_difference('Api::V1::Employee.count', -1) do
      delete :destroy, id: @api_v1_employee
    end

    assert_redirected_to api_v1_employees_path
  end
end
