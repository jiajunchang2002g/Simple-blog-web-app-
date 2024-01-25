import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import CommentList from './CommentList';
import AddCommentForm from './AddCommentForm';
import EditPostForm from './EditPostForm';
import DeletePostButton from './DeletePostButton';

const PostList = ({ categoryId }) => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`/categories/${categoryId}/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    if (categoryId) {
      fetchPosts();
    }
  }, [categoryId]);

  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };

  const handleAddComment = (comment) => {
    const updatedPosts = posts.map((post) =>
      post.id === selectedPost.id ? { ...post, comments: [...post.comments, comment] } : post
    );
    setPosts(updatedPosts);
  };

  const handleEditPost = (editedPost) => {
    const updatedPosts = posts.map((post) => (post.id === editedPost.id ? editedPost : post));
    setPosts(updatedPosts);
    setSelectedPost(null);
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
    setSelectedPost(null);
  };

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            <button onClick={() => handleSelectPost(post)}>Edit</button>
            <DeletePostButton postId={post.id} onDeletePost={handleDeletePost} />
            {selectedPost?.id === post.id && (
              <>
                <EditPostForm post={selectedPost} onEditPost={handleEditPost} />
                <CommentList comments={post.comments} />
                <AddCommentForm postId={post.id} onAddComment={handleAddComment} />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;




