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