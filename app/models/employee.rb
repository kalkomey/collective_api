class Employee < ActiveRecord::Base
  has_many :memberships
  has_many :groups, through: :memberships
  validates :name, presence: true, uniqueness: true
end
