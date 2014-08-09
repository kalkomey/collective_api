class Employee < ActiveRecord::Base
  has_many :memberships
  has_many :groups, through: :memberships

  def coordinator?(group)
    id == group.employee_id
  end
end
