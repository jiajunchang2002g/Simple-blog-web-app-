import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryList from './components/CategoryList';
import PostList from './components/PostList';
import AddPostForm from './components/AddPostForm';
import AddCommentForm from './components/AddCommentForm';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch categories
    axios.get('http://localhost:3000/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  useEffect(() => {
    // Fetch posts and comments for the selected category
    if (selectedCategory) {
      axios.get(`http://localhost:3000/categories/${selectedCategory.id}/posts`)
        .then(response => setPosts(response.data))
        .catch(error => console.error('Error fetching posts:', error));

      axios.get(`http://localhost:3000/categories/${selectedCategory.id}/comments`)
        .then(response => setComments(response.data))
        .catch(error => console.error('Error fetching comments:', error));
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAddPost = (newPost) => {
    // Add a new post to the selected category
    axios.post(`http://localhost:3000/categories/${selectedCategory.id}/posts`, newPost)
      .then(response => setPosts([...posts, response.data]))
      .catch(error => console.error('Error adding post:', error));
  };

  const handleAddComment = (newComment) => {
    // Add a new comment to the selected category
    axios.post(`http://localhost:3000/categories/${selectedCategory.id}/comments`, newComment)
      .then(response => setComments([...comments, response.data]))
      .catch(error => console.error('Error adding comment:', error));
  };

  return (
    <div>
      <CategoryList categories={categories} onCategoryClick={handleCategoryClick} />
      {selectedCategory && (
        <>
          <PostList posts={posts} />
          <AddPostForm onAddPost={handleAddPost} />
          <AddCommentForm onAddComment={handleAddComment} />
        </>
      )}
    </div>
  );
};

export default App;
