class Group < ActiveRecord::Base
  has_many :memberships
  has_many :employees, through: :memberships

  CATEGORIES = %(guild chapter)
end
