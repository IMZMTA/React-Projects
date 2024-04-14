import React, { useState } from 'react'

const DisplayCount = () => {

  let [count, setCount] = useState(0);

  const handleIncrement = () => {
    // console.log("Incre clicked");
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    // console.log("Decre clicked");
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <center >
      <button style={{width:"50px",height:"30px",backgroundColor:"blue"}}  onClick={handleDecrement}>-</button>
      <div>{count}</div>
      <button onClick={handleIncrement} style={{width:"50px",height:"30px",backgroundColor:"green"}}>+</button>
    </center>
  )
}

export default DisplayCount;