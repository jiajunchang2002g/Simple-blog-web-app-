# seeds.rb

# Clear existing records
Tag.destroy_all
Post.destroy_all
Comment.destroy_all

# Seed Tags
tags = Tag.create([
  { title: 'Vegetable Gardening' },
  { title: 'Flower Gardens' },
  { title: 'Landscaping' },
  { title: 'Herb Gardens' },
  { title: 'Container Gardening' }
  # Add more tags as needed
])

# Seed Posts for each Tag
tags.each do |tag|
  posts = tag.posts.create([
    { title: 'Tips for Healthy Tomatoes', body: 'Learn the best practices for growing vibrant and healthy tomatoes.' },
    { title: 'Creating a Colorful Flower Bed', body: 'Explore ideas for designing a stunning and colorful flower bed.' }
    # Add more posts as needed
  ])

  # Seed Comments for each Post
  posts.each do |post|
    post.comments.create([
      { commenter: 'Alice Johnson', body: 'Great post! I will try these tips in my garden.' },
      { commenter: 'Bob Smith', body: 'Thanks for sharing your expertise.' }
      # Add more comments as needed
    ])
  end
end

puts 'Seed data has been created successfully.'

