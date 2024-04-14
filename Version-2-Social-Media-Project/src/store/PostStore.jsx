import { createContext, useCallback, useEffect, useReducer, useState } from "react";
import PropTypes from 'prop-types';

const DEFAULT_VALUE = {
  postList : [],
  addPost : () => {},
  // fetching : false,
  deletePost : () => {},
}

//Context Creation
export const PostStoreContext = createContext(DEFAULT_VALUE);

//Reducer Function -> Takes two things Post or Paint Item and action
const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if(action.type === "DELETE_POST"){
      newPostList = currPostList.filter(post => post.id !== action.payload.postId);
      }else if (action.type === "ADD_POST"){
        newPostList = [action.payload, ...currPostList];
      }else if (action.type === "ADD_INITIAL_POSTS"){
        newPostList = action.payload.posts;
      }
    return newPostList;
};

//PostListProvider Container
const PostListProvider = ({children}) => {

  const [postList, dispatchPostList] = useReducer(postListReducer,[]);
  
  // const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type : "ADD_POST",
      payload : post,
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type : "ADD_INITIAL_POSTS",
      payload : {
        posts,
      },
    });
  };

  const deletePost = useCallback((postId) => {
    dispatchPostList({
      type : "DELETE_POST",
      payload : {
        postId,
      },
    });
  },[dispatchPostList]);

  //No use as we have made postLoader loader function in postList.jsx
  // useEffect(() => {
  //   setFetching(true);
  
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  
  //   fetch('https://dummyjson.com/posts', { signal })
  //     .then(res => res.json())
  //     .then(data => {
  //       addInitialPosts(data.posts);
  //       setFetching(false);
  //     });
  
  //   return () => {
  //     controller.abort();
  //   };
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return <PostStoreContext.Provider value ={{
        postList,
        addPost,
        // fetching,
        deletePost,
      }}>
        {children}
      </PostStoreContext.Provider>
}

PostListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostListProvider;