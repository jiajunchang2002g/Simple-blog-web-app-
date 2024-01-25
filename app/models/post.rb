class Post < ApplicationRecord
    belongs_to :tag
    has_many :comments, dependent: :destroy
end
