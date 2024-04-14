import React from 'react'
import sty from './FoodInput.module.css';

const FoodInput = ({handleOnKeyDown}) => {


  return (
    <div>
      <input type="text" placeholder='Enter name of food to add' className={sty.foodInput}
      onKeyDown={handleOnKeyDown}/>
      {/* <button>Add</button> */}
    </div>
  )
}

export default FoodInput;
