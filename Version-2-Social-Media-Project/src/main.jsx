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
      //Loader is special type function which first returns then redirect or loads the mentioned path.
      //Applicable to Parent(i.e start) to its child.
      //Either loader can work for return something or can work with promise also.
      {path:"/", element: <PostList/> , loader:postLoader},

      //action can be perform on any a form submission, it is also a method
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


/* Local State = (in which state is manage only in the component neither pass to child nor to parent =>onChangeController on form) 
                  -> mostly -> useState 
                  and useReducer

  Cross-component state = (State is shared(used) among two or more components)
                  -> useState with method(prop drilling) and function in parents and shared among children //Props drilling

  App-wise state =  state shared or used within whole app
                  -> useContext
                  -> useState(props drilling)
                  -> Redux

        Redux -> is a state management for cross component and app-wise state. and is predictable state management library for Javascript apps.
        //Generally used in App-Wide state.

*/