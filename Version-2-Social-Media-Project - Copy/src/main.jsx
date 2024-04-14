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
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
