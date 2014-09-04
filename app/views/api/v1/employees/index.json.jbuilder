json.array!(@resources) do |resource|
  json.id     resource.id
  json.name   resource.name
  json.title  resource.title
end
