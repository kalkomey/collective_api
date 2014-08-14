class Group < ActiveRecord::Base
  has_many :memberships, dependent: :destroy
  has_many :employees, through: :memberships
  belongs_to :category

  validates :category, presence: true
end
