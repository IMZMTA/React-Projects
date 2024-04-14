// import React from 'react'

import ErrorMessage from "../FoodItems/ErrorMessage"
import Items from "../FoodItems/Items";
import '../App.css';

// function Fragments() {
//   return (
//     <React.Fragment>
//         <h1>Healthy Foods</h1>
//         <ul className='list-group'>
//             <li className='list-group-item'>Dal</li>
//             <li className='list-group-item'>Green Vegetables</li>
//             <li className='list-group-item'>Roti</li>
//             <li className='list-group-item'>Salad</li>
//             <li className='list-group-item'>Milk</li>
//         </ul>
//     </React.Fragment>
//   )
// }

// export default Fragments;


// import React from 'react'

// function Fragments() {
//   return (
//     <>
//         <h1>Healthy Foods</h1>
//         <ul className='list-group'>
//             <li className='list-group-item'>Dal</li>
//             <li className='list-group-item'>Green Vegetables</li>
//             <li className='list-group-item'>Roti</li>
//             <li className='list-group-item'>Salad</li>
//             <li className='list-group-item'>Milk</li>
//             <li className='list-group-item'>Lentils</li>
//         </ul>
//     </>
//   )
// }

// export default Fragments;

// //3rd way

// function Fragments() {

//     let foodItems = ["Dal","Green Vegetables","Roti","Salad","Milk","Ghee"]

//   return (
//     <>
//         <h1>Healthy Foods</h1>
//         <ul className='list-group'>
//             {foodItems.map((item)=>(
//             <li key={item} className='list-group-item'>{item}</li>
//             ))}
//         </ul>
//     </>
//   )
// }

// export default Fragments;

// //4th way -> Conditional Rendering

// function Fragments() {

//     // let foodItems = [];

//     let foodItems = ["Dal","Green Vegetables","Roti","Salad","Milk","Ghee"]

//     //1st way
//     // if(foodItems.length===0){
//     //     return <h1>I am still hungry.</h1>
//     // }

//     // let message = foodItems.length===0 ? <h3>I am still Hungry</h3>:null;

//   return (
//     <>
//         <h1>Healthy Foods</h1>
//         {/* {message} */}
//         {/* {foodItems.length===0 ? <h3>I am still Hungry</h3>:null} */}
//         {/* {foodItems.length===0 && <h3>I am still hungry</h3>} */}
//         <ul className='list-group'>
//             {foodItems.map((item)=>(
//             <li key={item} className='list-group-item'>{item}</li>
//             ))}
//         </ul>
//     </>
//   )
// }

// export default Fragments;

//5th Way

import Container from "../FoodItems/Container";
import FoodInput from "../FoodItems/FoodInput";

const Fragments = (props) => {
    
    // eslint-disable-next-line react/prop-types
    let {textState, itemfood, handleOnKeyDown} = props;

  return (
  <>
    <Container>
      <h1>Healthy Food </h1>
      <FoodInput handleOnKeyDown={handleOnKeyDown}></FoodInput>
      <ErrorMessage item = {itemfood}></ErrorMessage>
      <p>{textState}</p>
      <Items item = {itemfood} ></Items>
    </Container>
    <Container>
      <div className='con'>Above is the list of healthy food that are good for your health and well being</div>
    </Container>
  </>
  )
}

export default Fragments;
