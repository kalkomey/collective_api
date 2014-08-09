json.array!(@api_v1_groups) do |api_v1_group|
  json.extract! api_v1_group, :id, :name, :category, :description
  json.url api_v1_group_url(api_v1_group, format: :json)
end
