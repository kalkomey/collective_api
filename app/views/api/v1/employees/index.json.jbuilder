json.array!(@resources) do |resource|
  json.extract! resource, :id, :name
end
