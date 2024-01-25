class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body

  has_many :comments
  belongs_to :tag
end
