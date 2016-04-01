class Board < ActiveRecord::Base
  belongs_to :user
  has_many :lists
  has_many :cards, through: :lists
end
