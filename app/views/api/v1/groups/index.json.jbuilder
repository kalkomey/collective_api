json.array!(@resources) do |resource|

  json.id        resource.id
  json.name      resource.name
  json.category  resource.category.name

  json.people resource.memberships do |membership|
    json.id          membership.employee.id
    json.name        membership.employee.name
    json.coordinator membership.coordinator?
  end
end
