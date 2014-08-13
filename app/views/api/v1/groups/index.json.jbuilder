json.array!(@resources) do |resource|
  json.extract! resource, :id, :name, :description
  json.category resource.category.name
end
