class CardMembership < ActiveRecord::Base
  belongs_to :member, class_name: "User"
  belongs_to :card
end
