class Membership < ActiveRecord::Base
  belongs_to :employee
  belongs_to :group
  validates :employee, presence: true
  validates :group, presence: true
end
