groups = [
  { name: "Standards", category: "guild", description: "Lorem ipsum" }
]

groups.map do |g|
  Group.find_or_create_by(g)
end

employees = [
  { name: "Joshua Kappers" },
  { name: "Ryan Rushing" },
  { name: "RA Ray" }
]

employees.map do |e|
  employee = Employee.find_or_create_by(e);

  if employee.name == "RA Ray"
    Membership.find_or_create_by({
      group_id: 1,
      employee_id: employee.id,
      coordinator: true
    })
  end
end
