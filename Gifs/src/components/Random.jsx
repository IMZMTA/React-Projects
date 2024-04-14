import { useEffect, useState } from 'react';
import Spinner from './Spinner';
import useGif from './useGif';

// const API_KEY = import.meta.env.VITE_REACT_APP_GIFFY_API;

const Random = () => {

  // const [gif, setGif] = useState('');
  // const [loading, setLoading] = useState(false);
  
  // async function getGif(){
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //     const response = await fetch(url);
  //     const output = await response.json();
  //     const imageSource = output.data.images.downsized_large.url;
  //     setGif(imageSource);
  //     setLoading(false);
  // }
  
  // useEffect(()=>{
  //   getGif();
  // },[])

  const {gif,loading,getGif} = useGif();
  
  // const handleGif = () =>{
  //   getGif();
  // }

  return (
    <div className="bg-green-500 flex flex-col items-center w-1/2 h-auto mb-5 gap-y-5">
      <h3 className='text-2xl underline uppercase font-bold mt-2'>A Random Gif</h3>
      <div className="border border-black h-96 w-11/12 flex flex-col items-center justify-center rounded">
        {
          loading ? (<Spinner/>) : ( <img key={gif} src={gif} alt="Random.gifs" className='h-full w-full' loading='lazy'/> )
        }
      </div>
      <button className='border border-black bg-yellow-500 w-9/12 p-2 mb-2 font-medium' /*onClick={handleGif}*/ onClick={()=>getGif()} >Generate Gifs</button>      
    </div>
  )
}

export default Random;