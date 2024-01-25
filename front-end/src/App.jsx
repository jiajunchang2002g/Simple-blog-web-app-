import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ postId: '', text: '' });

  // Fetch posts on component mount
  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Fetch comments when a post is selected
  useEffect(() => {
    if (newComment.postId) {
      axios.get(`http://localhost:3000/posts/${newComment.postId}/comments`)
        .then(response => {
          setComments(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [newComment.postId]);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/posts', newPost)
      .then(response => {
        setPosts([...posts, response.data]);
        setNewPost({ title: '', body: '' });
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3000/posts/${newComment.postId}/comments`, { text: newComment.text })
      .then(response => {
        setComments([...comments, response.data]);
        setNewComment({ postId: '', text: '' });
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>: {post.body}
            <button onClick={() => setNewComment({ postId: post.id, text: '' })}>View Comments</button>
          </li>
        ))}
      </ul>

      <form onSubmit={handlePostSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Body"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        />
        <button type="submit">Add Post</button>
      </form>

      {newComment.postId && (
        <>
          <h2>Comments</h2>
          <ul>
            {comments.map(comment => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ul>

          <form onSubmit={handleCommentSubmit}>
            <textarea
              placeholder="Comment"
              value={newComment.text}
              onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
            />
            <button type="submit">Add Comment</button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;

