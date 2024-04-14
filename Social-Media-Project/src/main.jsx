
//With React-Router-Dom
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreatePost from './components/CreatePost.jsx';

const router = createBrowserRouter([
  {path:"/", element: <App/> },
  {path:"/create-post", element: <CreatePost/> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);


// // Without React-router-Dom
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>
// );
