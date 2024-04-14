
import Post from "./Post";
import Welcome from "./Welcome.jsx";
import { useLoaderData } from "react-router-dom";
import { PostStoreContext } from "../store/PostStore.jsx";
import { useContext } from "react";

const PostList = () => {
  // const {addInitialPosts } = useContext(PostStoreContext);

  const postList = useLoaderData();

  return (
    <>
      <div className="container">
      {postList.length == 0 && <Welcome></Welcome>}
        {postList.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </>

    // <>
    //   {fetching && <Loader></Loader>}
    //   {!fetching && postList.length == 0 && <Welcome /*onGetPostClick={handleGetPostClick} */></Welcome>}
    //   {!fetching && postList.map((post) => <Post key={post.id} post={post} ></Post>)}
    // </>
  );
};

//Function of loader to be loaded before reaching to path
export const postLoader = () => {

  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
