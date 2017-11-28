# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  board_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ApplicationRecord
  belongs_to :board,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: :Board

  has_many :cards,
    primary_key: :id,
    foreign_key: :list_id,
    class_name: :Card
end
