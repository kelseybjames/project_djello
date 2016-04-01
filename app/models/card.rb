class Card < ActiveRecord::Base
  belongs_to :list
  has_one :board, through: :list
  has_one :user, through: :board
end
