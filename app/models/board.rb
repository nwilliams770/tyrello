# == Schema Information
#
# Table name: boards
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  author_id  :integer          not null
#  starred    :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Board < ApplicationRecord

  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :lists,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: :List


end
