import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreatePost, { createPostAction } from './components/CreatePost.jsx';
import App from './routes/App.jsx';
import PostList, { postLoader } from './components/PostList.jsx';
import './index.css'

const router = createBrowserRouter([
  { path:"/",
    element:<App/>,
    children:[

      {path:"/", element: <PostList/> , loader:postLoader},

      {path:"/create-post", element: <CreatePost/>, action : createPostAction },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
);


import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import PostListProvider from '../store/PostStore';
import { Outlet } from "react-router-dom";

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className='app-container'>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
        <div className="content">
          <Header></Header>

          <Outlet></Outlet>

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  )
}

export default App;


import Post from "./Post";
import Welcome from "./Welcome.jsx";
import { useLoaderData } from "react-router-dom";

const PostList = () => {

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

  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;

import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostStoreContext } from "../store/PostStore";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostStoreContext);
  
  return (
    <>
      <div className=" card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => {
                deletePost(post.id)}
              }
            >
              <AiFillDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hashtag">
              {tag}
            </span>
          ))}
          <div className="alert alert-success reaction " role="alert">
            This post has been reacted by {post.reactions} people.
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;


import { Form, redirect } from "react-router-dom";

const CreatePost = () => {


  return (
    <>

      <Form className="create-post" method="POST">
        
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User Id Here :
          </label>
          <input
            type="text"
            name="userId"
            className="form-control"
            id="userId"
            placeholder="Your User Id"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title : 
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            placeholder="How are you feeling today...."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text" rows="4"
            name="body"
            className="form-control"
            id="body"
            placeholder="Tell us more about it"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of Reactions :  
          </label>
          <input
            type="text"
            name="reactions"
            className="form-control"
            id="reactions"
            placeholder="How many people reacted to this post"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags :  
          </label>
          <input
            type="text"
            name="tags"
            className="form-control"
            id="tags"
            placeholder="Please enter tags using space between each"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
};

export const createPostAction = async (data) => {

  const formData = await data.request.formData();

  
  const postData = Object.fromEntries(formData);

  postData.tags = postData.tags.split(" ");

  fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then((post)=>{
      console.log("Got response from server", post);
  });

  return redirect("/");
}

export default CreatePost;

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
        newPostList = [action.payload,...currPostList];
      }else if (action.type === "ADD_INITIAL_POSTS"){
        newPostList = action.payload.posts;
      }
    return newPostList;
};


const PostListProvider = ({children}) => {

  const [postList, dispatchPostList] = useReducer(postListReducer,[]);
  

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
        deletePost,
      }}>
        {children}
      </PostStoreContext.Provider>
}

PostListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostListProvider;