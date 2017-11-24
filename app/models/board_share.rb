# == Schema Information
#
# Table name: board_shares
#
#  id             :integer          not null, primary key
#  board_id       :integer          not null
#  contributer_id :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class BoardShare < ApplicationRecord
  
end
