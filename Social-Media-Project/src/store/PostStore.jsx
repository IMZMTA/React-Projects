import { createContext, useCallback, useEffect, useReducer, useState } from "react";
import PropTypes from 'prop-types';

const DEFAULT_VALUE = {
  postList : [],
  addPost : () => {},
  fetching : false, //pass this tp children
  // addInitialPosts:() => {},//As addintialPost responsibilty is taken poststore so no need to send this to child
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
        newPostList = [action.payload,...currPostList];
      }else if (action.type === "ADD_INITIAL_POSTS"){
        newPostList = action.payload.posts;
      }
    return newPostList;
};

//PostListProvider Container
const PostListProvider = ({children}) => {

  //Reducer Hooks give two -> (data, setData) thing and takes two things(ReducerFunction , Deafult Value)
  const [postList, dispatchPostList] = useReducer(postListReducer,[]);

  
  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type : "ADD_POST",
      payload : post,
    });
  };

  // Without Dummy Json
  // const addPost = (userId,postTittle,postBody,reactions,tags) => {
  //   dispatchPostList({
  //     type : "ADD_POST",
  //     payload : {
  //       id :Date.now(),
  //       title :postTittle,
  //       body :postBody,
  //       userId : userId,
  //       reactions :reactions,
  //       tags :tags
  //     },
  //   });
  // };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type : "ADD_INITIAL_POSTS",
      payload : {
        posts,
      },
    });
  };

  //Because function with same parameter and name  is still different in javascript as function are first call object in js.
  //It will repaint the child all the time even if there is no change
  //To avoid this we use UseCallback Hook;
  const deletePost = useCallback((postId) => {
    dispatchPostList({
      type : "DELETE_POST",
      payload : {
        postId,
      },
    });
  },[dispatchPostList]);

  
  //Advanced more simplified
  useEffect(() => {
    setFetching(true);
  
    const controller = new AbortController();
    const signal = controller.signal;
  
    fetch('https://dummyjson.com/posts', { signal })
      .then(res => res.json())
      .then(data => {
        addInitialPosts(data.posts);
        setFetching(false);
      // })
      // .catch(error => {
      //   if (error.name === 'AbortError') {
      //     console.log('Fetch aborted due to component unmounting.');
      //   } else {
      //     console.error('Error during fetch:', error);
      //   }
      });
  
    return () => {
      // console.log("Cleaning up useEffect after this Component is not in use or removed from DOM temporarily");
      controller.abort();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <PostStoreContext.Provider value ={{
    postList,
    addPost,
    fetching,
    // addInitialPosts, // no need to expose to public api.
    deletePost,
  }}>
    {children}
  </PostStoreContext.Provider>
}

// const DEFAULT_POST_LIST = [
//   {
//     id:"1",
//     title: "Going to Mumbai",
//     body : "Hi, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
//     reactions : 2,
//     userId : "user-9",
//     tags: ["vacation","Mumbai","Enjoying"],
//   },
//   {
//     id:"2",
//     title: "Passed",
//     body : "Badi Mehnat se Pass",
//     reactions : 15,
//     userId : "user-15",
//     tags: ["Graduated","Perisram","Enjoying"],
//   }
// ]

PostListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostListProvider;