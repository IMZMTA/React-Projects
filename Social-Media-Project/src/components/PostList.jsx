
import { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostStoreContext } from '../store/PostStore.jsx';
import Welcome from './Welcome.jsx';
import Loader from './Loader.jsx';

const PostList = () => {

  const {postList,fetching /*, addInitialPosts*/} = useContext(PostStoreContext);

  // Move to ContextProvider
  // const [fetching, setFetching] = useState(false);

  // //Advanced more simplified
  // useEffect(() => {
  //   setFetching(true);
  
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  
  //   fetch('https://dummyjson.com/posts', { signal })
  //     .then(res => res.json())
  //     .then(data => {
  //       addInitialPosts(data.posts);
  //       setFetching(false);
  //     })
  //     .catch(error => {
  //       if (error.name === 'AbortError') {
  //         console.log('Fetch aborted due to component unmounting.');
  //       } else {
  //         console.error('Error during fetch:', error);
  //       }
  //     });
  
  //   return () => {
  //     console.log("Cleaning up useEffect after this Component is not in use or removed from DOM temporarily");
  //     controller.abort();
  //   };
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  

  // //another ** ->useEffect => return ->(Default->Not availabe) -> Have to write for example aborting here the fetch method

  // useEffect( () => {
  //   setFetching(true);

  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //     fetch('https://dummyjson.com/posts', {signal})
  //     .then(res => res.json())
  //     .then(data => {
  //       addInitialPosts(data.posts);
  //       setFetching(false);
  //   });

  //   return () => {
  //     console.log("Cleaning up UseEffect after this Component is not in use or removed from DOM temporarily");
  //     controller.abort();
  //   };
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[]);

  // //fetching with Loader
  // useEffect( () => {
  //   setFetching(true)
  //     fetch('https://dummyjson.com/posts')
  //     .then(res => res.json())
  //     .then(data => {
  //       addInitialPosts(data.posts);
  //       setFetching(false);
  //   });
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[]);

  // //useEffect ->No state management.
  // // takes two parameter -> 1st function & 2nd Dependency
  // // can be used multiple times in a single component as like others Hooks
  // //can be used inside a component cannot be used inside normal Javascript function
  // useEffect( () => {
  //     fetch('https://dummyjson.com/posts')
  //     .then(res => res.json())
  //     .then(data => {
  //       addInitialPosts(data.posts);
  //   });
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[]);

  // Instead on useState -> useEffect can be beneficial as data can be fetched based on condition or whenever required
  // const [dataFetch, setDataFetch] = useState(false);
  // if(!dataFetch){
  //   fetch('https://dummyjson.com/posts')
  //   .then(res => res.json())
  //   .then(data => {
  //     addInitialPosts(data.posts);
  //   });
  //   setDataFetch(true);
  // }

  // //EveryTime Data will be fetched on repaint
  // fetch('https://dummyjson.com/posts')
  // .then(res => res.json())
  // .then(data => {
  //   addInitialPosts(data.posts);
  // });

  // No Button required
  // const handleGetPostClick = () => {
  //   fetch('https://dummyjson.com/posts')
  //   .then(res => res.json())
  //   .then(data => {
  //     addInitialPosts(data.posts);
  //   });
  // }

  return (
    <>
      {fetching && <Loader></Loader>}
      {!fetching && postList.length == 0 && <Welcome /*onGetPostClick={handleGetPostClick} */></Welcome>} 
      {!fetching && postList.map((post) => <Post key={post.id} post={post} ></Post>)}
    </>
  )
}

export default PostList;
