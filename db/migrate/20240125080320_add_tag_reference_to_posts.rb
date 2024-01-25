class AddTagReferenceToPosts < ActiveRecord::Migration[7.1]
  def change
    add_reference :posts, :tag, null: true, foreign_key: true
  end
end
