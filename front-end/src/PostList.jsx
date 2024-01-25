const PostList = ({ posts }) => {
    return(
        <div className="post-list">
            {posts.map(post => (
                <div className="post-preview" key={post.id} >
                    <h2>{ post.title }</h2>
                    <p> Posted by 'empty' </p>
                </div>
            ))}
        </div>
    );
}

export default PostList;
