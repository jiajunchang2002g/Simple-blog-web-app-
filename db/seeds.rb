posts = Post.create([
  { title: 'Introduction to Ruby on Rails', body: 'Ruby on Rails is a web development framework that makes it easy to build powerful web applications quickly.' },
  { title: 'Getting Started with ReactJS', body: 'ReactJS is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of developers.' },
  { title: 'Exploring Machine Learning Algorithms', body: 'Machine learning involves the use of algorithms that can learn patterns and make predictions from data.' },
])

posts.each do |post|
  post.comments.create([
    { commenter: 'Coder123', body: 'Great overview of Ruby on Rails!' },
    { commenter: 'WebDevMaster', body: 'I love the simplicity and power of ReactJS.' },
    { commenter: 'DataScienceFan', body: 'Machine learning is such an exciting field. Thanks for the article!' },
  ])
end
