json.array!(@resources) do |resource|
  json.id     resource.id
  json.name   resource.name
  json.title  resource.title

  json.groups resource.memberships.sort_by {|mem| mem.group.category.priority} do |membership|
    json.id          membership.group.id
    json.name        membership.group.name
    json.category    membership.group.category.name
    json.coordinator membership.coordinator?
  end
end
