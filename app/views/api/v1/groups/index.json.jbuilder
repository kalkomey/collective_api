json.array!(@resources) do |resource|
  json.extract! resource, :id, :name, :category, :description
end
