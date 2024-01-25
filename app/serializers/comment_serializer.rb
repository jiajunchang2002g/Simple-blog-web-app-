class CommentSerializer < ActiveModel::Serializer
  attributes :id, :commenter, :body, :post_id
end
