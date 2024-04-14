// import { useContext } from 'react'
// import { PostStoreContext } from '../store/PostStore.jsx';

import Post from "./Post";
import Welcome from "./Welcome.jsx";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const {postList,fetching } = useContext(PostStoreContext);

  //now data will get from another hooks instead of use context
  //hooks name is useLoaderData() hook

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
  //as it will return something or describe choice we want
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
