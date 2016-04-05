class Board < ActiveRecord::Base
  belongs_to :user
  has_many :lists, dependent: :destroy
  has_many :cards, through: :lists
  has_many :board_memberships
  has_many :members, through: :board_memberships, class_name: "User"
end
