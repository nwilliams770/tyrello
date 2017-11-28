# == Schema Information
#
# Table name: cards
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  list_id     :integer          not null
#  due_date    :datetime
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Card < ApplicationRecord
  belongs_to :list,
    primary_key: :id,
    foreign_key: :list_id,
    class_name: :List

end
