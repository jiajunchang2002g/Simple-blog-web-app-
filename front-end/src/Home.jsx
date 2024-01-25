import PostList from "./PostList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: Posts } = useFetch('http://localhost:3000/posts')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { Posts && <PostList Posts={Posts} /> }
    </div>
  );
}
 
export default Home;