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

require 'test_helper'

class BoardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
