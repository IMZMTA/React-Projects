// import React, { useEffect, useState } from "react";
// import Spinner from "./Spinner";
// import useGif from "./useGif";

// const API_KEY = import.meta.env.VITE_REACT_APP_GIFFY_API;


import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "./useGif";

const SearchRandom = () => {

  // const [gif, setGif] = useState();
  // const [loading, setLoading] = useState(false);

  const [tag, setTag] = useState("");

  // const getGif = async () => {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const data = await fetch(url);
  //   const output = await data.json();
  //   const imageSource = output.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   getGif();
  // }, []);

  // const handleChange = (event) => {
  //   setTag(event.target.value);
  // };

  // const handleGif = () => {
  //   getGif();
  // };

  const {gif,getGif,loading}= useGif(tag);

  return (
    <div className="bg-blue-500 flex flex-col items-center w-1/2 h-auto mb-5 gap-y-5">
      <h3 className="text-2xl underline uppercase font-bold mb-2">
        {" "}
        Random {tag} Gif
      </h3>

      <div className="border border-black h-96 w-11/12 flex flex-col items-center justify-center rounded mb-2">
        {loading ? (
          <Spinner />
        ) : (
          <img src={gif} alt="Random.gifs" loading="lazy" className='h-full w-full' />
        )}
      </div>

      <input
        type="text"
        className=" h-9 rounded w-9/12 text-center font-semibold"
        // onChange={handleChange}
        onChange={(event)=>{setTag(event.target.value)}}
        placeholder="Enter the type of GIF you want to Search"
        value={tag}
      />

      <button
        className="border border-black bg-yellow-500 w-9/12 p-2 mb-2 font-medium"
        // onClick={handleGif}
        onClick={()=>{getGif(tag)}}
      >
        Search Choice Gifs
      </button>
    </div>
  );
};

export default SearchRandom;
