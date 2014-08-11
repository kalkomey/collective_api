class Group < ActiveRecord::Base
  has_many :memberships
  has_many :employees, through: :memberships
  belongs_to :category

  validates :category, presence: true
end
