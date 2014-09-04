json.array!(@resources) do |resource|

  json.id           resource.id
  json.employee_id  resource.employee_id
  json.group_id     resource.group_id
  json.coordinator  resource.coordinator
  
end
