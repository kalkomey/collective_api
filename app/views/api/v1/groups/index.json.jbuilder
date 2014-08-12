json.array!(@api_v1_groups) do |api_v1_group|
  json.extract! api_v1_group, :id, :name, :description
  json.category api_v1_group.category.name
end
