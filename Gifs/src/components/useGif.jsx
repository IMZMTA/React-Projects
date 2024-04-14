import React, { useEffect, useState } from 'react'

const API_KEY = import.meta.env.VITE_REACT_APP_GIFFY_API;

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = () => {

  const [gif, setGif] = useState();
  const [loading, setLoading] = useState(false);

  const getGif = async (tag) => {
    setLoading(true);

    const data = await fetch(tag ? `${url}&tag=${tag}` : url);
    const output = await data.json();
    const imageSource = output.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  };

  useEffect(() => {
    getGif('');
  }, []);

  return {gif,loading,getGif};

}

export default useGif;
