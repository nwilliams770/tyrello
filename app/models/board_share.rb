# == Schema Information
#
# Table name: board_shares
#
#  id             :integer          not null, primary key
#  board_id       :integer          not null
#  contributor_id :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class BoardShare < ApplicationRecord
  belongs_to :user,
    primary_key: :id,
    foreign_key: :contributor_id,
    class_name: :User

  belongs_to :board,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: :Board

end
