json.array!(@api_v1_employees) do |api_v1_employee|
  json.extract! api_v1_employee, :id, :name
  json.url api_v1_employee_url(api_v1_employee, format: :json)
end
