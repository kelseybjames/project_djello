class BoardMembership < ActiveRecord::Base
  belongs_to :member, class_name: "User"
  belongs_to :board
end
