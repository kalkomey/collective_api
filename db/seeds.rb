groups = [
  { name: "Standards", category: "guild", description: "Lorem ipsum" },
  { name: "Angular", category: "guild", description: "Lorem ipsum"   }
]

groups.map do |g|
  Group.find_or_create_by(g)
end

employees = [
  { name: "Ryan Rushing" },
  { name: "RA Ray" },
  { name: "Jay Sparks" },
  { name: "Aziz Punjani" },
  { name: "Joshua Kappers" },
  { name: "Bradley Griffith" }
]

employees.map do |e|
  employee = Employee.find_or_create_by(e);

  Membership.find_or_create_by({
    group_id: 1,
    employee_id: employee.id,
    coordinator: (employee.name == "RA Ray")
  })

  
  Membership.find_or_create_by({
    group_id: 2,
    employee_id: employee.id,
    coordinator: ["Joshua Kappers", "Bradley Griffith"].include?(employee.name)
  })

end
