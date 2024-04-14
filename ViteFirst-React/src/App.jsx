// import Fragment from "./18componentBharatClock/Fragments";
// import AddTodo from "./17componentsTodo/AddTodo";
// import AppName from "./17componentsTodo/AppName";
// import ClockHeading from "./18componentBharatClock/ClockHeading";
// import ClockSlogan from "./18componentBharatClock/ClockSlogan";
// import CurrentTime from "./18componentBharatClock/CurrentTime";
// import "./App.css";
// import TodoItems from "./17componentsTodo/TodoItems";
// import { useState } from "react";
// import Welcome from "./17componentsTodo/Welcome";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {

//   const [todoItems,settodoItmes] = useState([]);

// Use of spread operator But should be avoided
//   const handleNewItem = (itemName, itemDueDate) => {
//     if(!(itemName == "") && !(itemDueDate == "")){
//       const newTodoItem = [...todoItems,{name:itemName, dueDate:itemDueDate}];
//       settodoItmes(newTodoItem);
//     }
//   };

//   const handleDeleteItem = (itemName) => {
//     const newTodoItem = todoItems.filter(item => item.name != itemName);
//     settodoItmes(newTodoItem);
//   }

//   let [foodItems , setfootItems ] = useState(["Dal","Green Vegetables","Roti","Salad","Milk","Ghee"]);

//   const handleOnKeyDown = (event) => {
//     if(event.key === "Enter"){
//       let newFoodItem = event.target.value;
//       let newItems = [...foodItems,newFoodItem];
//       event.target.value = "";
//       setfootItems(newItems);
//     }
//   }

//   return (
//     <>
//       <center className="center-todo">
//         <AppName></AppName>
//         <AddTodo onNewItem = {handleNewItem}></AddTodo>
//         {todoItems.length === 0 && <Welcome></Welcome>}
//         <div className="items-container">
//           <TodoItems todoItems={todoItems} onDeleteClicked={handleDeleteItem}></TodoItems>
//         </div>

//         <pre>--------------</pre>
//         <hr />

//         <ClockHeading></ClockHeading>
//         <ClockSlogan></ClockSlogan>
//         <CurrentTime></CurrentTime>

//         <pre>--------------</pre>
//         <hr />

//         <Fragment itemfood={foodItems} handleOnKeyDown = {handleOnKeyDown}></Fragment>
        
//         </center>
//     </>
//   );
// }

// export default App;

// //2nd way

// import Fragment from "./18componentBharatClock/Fragments";
// import AddTodo from "./17componentsTodo/AddTodo";
// import AppName from "./17componentsTodo/AppName";
// import ClockHeading from "./18componentBharatClock/ClockHeading";
// import ClockSlogan from "./18componentBharatClock/ClockSlogan";
// import CurrentTime from "./18componentBharatClock/CurrentTime";
// import "./App.css";
// import TodoItems from "./17componentsTodo/TodoItems";
// import { useState } from "react";
// import Welcome from "./17componentsTodo/Welcome";
// import { ItemStore } from "./store/ItemStore";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {

//   const [todoItems,settodoItmes] = useState([]);

//   // Update by Functional -> Helps to work perfectly on previous update items 
//   const addNewItem = (itemName, itemDueDate) => {
//     if(!(itemName == "") && !(itemDueDate == "")){

//       // settodoItmes((currValue)=>{
//       //   const newTodoItem = [...currValue,{name:itemName, dueDate:itemDueDate}];
//       //   return newTodoItem;
//       // });

//       settodoItmes((currValue)=>[...currValue,
//         {name:itemName, dueDate:itemDueDate},
//       ]);
//     }
//   };

//   const deleteItem = (itemName) => {
//     const newTodoItem = todoItems.filter(item => item.name != itemName);
//     settodoItmes(newTodoItem);
//   }

//   let [foodItems , setfootItems ] = useState(["Dal","Green Vegetables","Roti","Salad","Milk","Ghee"]);

//   const handleOnKeyDown = (event) => {
//     if(event.key === "Enter"){
//       let newFoodItem = event.target.value;
//       let newItems = [...foodItems,newFoodItem];
//       event.target.value = "";
//       setfootItems(newItems);
//     }
//   }

//   return (
//     <>
//       <ItemStore.Provider 
//       value={{
//         todoItems : todoItems,
//         addNewItem : addNewItem,
//         deleteItem : deleteItem,
//       }}>
//         <center className="center-todo">
//           <AppName></AppName>
//           <AddTodo></AddTodo>
//           <Welcome></Welcome>
//           <div className="items-container">
//             <TodoItems></TodoItems>
//           </div>

//           <pre>--------------</pre>
//           <hr />
//       </center>
//       </ItemStore.Provider>
//         <center>
//           <ClockHeading></ClockHeading>
//           <ClockSlogan></ClockSlogan>
//           <CurrentTime></CurrentTime>

//           <pre>--------------</pre>
//           <hr />

//           <Fragment itemfood={foodItems} handleOnKeyDown = {handleOnKeyDown}></Fragment>
          
//         </center>
//     </>
//   );
// }

// export default App;

// //3rd way -> useReducer -> Advanced of useState

// import Fragment from "./18componentBharatClock/Fragments";
// import AddTodo from "./17componentsTodo/AddTodo";
// import AppName from "./17componentsTodo/AppName";
// import ClockHeading from "./18componentBharatClock/ClockHeading";
// import ClockSlogan from "./18componentBharatClock/ClockSlogan";
// import CurrentTime from "./18componentBharatClock/CurrentTime";
// import "./App.css";
// import TodoItems from "./17componentsTodo/TodoItems";
// import { useState, useReducer } from "react";
// import Welcome from "./17componentsTodo/Welcome";
// import { ItemStore } from "./store/ItemStore";
// import 'bootstrap/dist/css/bootstrap.min.css';

// //useReducer takes -> Pure Function
// const todoItemReducer = (currtodoItems,action) => {
//   let newTodoItem = currtodoItems;
//   if(action.type === "NEW_ITEM"){ 
//     if(!(action.payload.itemName == "") && !(action.payload.itemDueDate == "")){
//       newTodoItem = [...currtodoItems,{name:action.payload.itemName, dueDate:action.payload.itemDueDate}];
//     }
//   }else if (action.type === "DELETE_ITEM"){
//     newTodoItem = currtodoItems.filter(item => item.name != action.payload.itemName);
//   }
//   return newTodoItem;
// }

// function App() {
//   //Use Reducer
//   const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

//   // Update by Functional -> Helps to work perfectly on previous update items 
//   const addNewItem = (itemName, itemDueDate) => {
      
//       const newItemAction = {
//         type : "NEW_ITEM",
//         payload :{
//           itemName,
//           itemDueDate,
//         }
//       };
//       dispatchTodoItems(newItemAction);
//   };

//   const deleteItem = (itemName) => {
          
//     const deleteItemAction = {
//       type : "DELETE_ITEM",
//       payload :{
//         itemName,
//       }
//     };
//     dispatchTodoItems(deleteItemAction);

//   }

//   let [foodItems , setfootItems ] = useState(["Dal","Green Vegetables","Roti","Salad","Milk","Ghee"]);

//   const handleOnKeyDown = (event) => {
//     if(event.key === "Enter"){
//       let newFoodItem = event.target.value;
//       let newItems = [...foodItems,newFoodItem];
//       event.target.value = "";
//       setfootItems(newItems);
//     }
//   }

//   return (
//     <>
//       <ItemStore.Provider 
//       value={{
//         todoItems : todoItems,
//         addNewItem : addNewItem,
//         deleteItem : deleteItem,
//       }}>
//         <center className="center-todo">
//           <AppName></AppName>
//           <AddTodo></AddTodo>
//           <Welcome></Welcome>
//           <div className="items-container">
//             <TodoItems></TodoItems>
//           </div>

//           <pre>--------------</pre>
//           <hr />
//       </center>
//       </ItemStore.Provider>
//         <center>
//           <ClockHeading></ClockHeading>
//           <ClockSlogan></ClockSlogan>
//           <CurrentTime></CurrentTime>

//           <pre>--------------</pre>
//           <hr />

//           <Fragment itemfood={foodItems} handleOnKeyDown = {handleOnKeyDown}></Fragment>
          
//         </center>
//     </>
//   );
// }

// export default App;


//4th way Wrapping up -> Simplyfing App.jsx

import Fragment from "./18componentBharatClock/Fragments";
import AddTodo from "./17componentsTodo/AddTodo";
import AppName from "./17componentsTodo/AppName";
import ClockHeading from "./18componentBharatClock/ClockHeading";
import ClockSlogan from "./18componentBharatClock/ClockSlogan";
import CurrentTime from "./18componentBharatClock/CurrentTime";
import TodoItems from "./17componentsTodo/TodoItems";
import { useState } from "react";
import Welcome from "./17componentsTodo/Welcome";
import TodoContextProvider from "./store/ItemStore";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {


  let [foodItems , setfootItems ] = useState(["Dal","Green Vegetables","Roti","Salad","Milk","Ghee"]);

  const handleOnKeyDown = (event) => {
    if(event.key === "Enter"){
      let newFoodItem = event.target.value;
      let newItems = [...foodItems,newFoodItem];
      event.target.value = "";
      setfootItems(newItems);
    }
  }

  return (
    <>
      <TodoContextProvider>
        <center className="center-todo">
          <AppName></AppName>
          <AddTodo></AddTodo>
          <Welcome></Welcome>
          <div className="items-container">
            <TodoItems></TodoItems>
          </div>

          <pre>--------------</pre>
          <hr />
      </center>
      </TodoContextProvider>
      
        <center>
          <ClockHeading></ClockHeading>
          <ClockSlogan></ClockSlogan>
          <CurrentTime></CurrentTime>

          <pre>--------------</pre>
          <hr />

          <Fragment itemfood={foodItems} handleOnKeyDown = {handleOnKeyDown}></Fragment>
          
        </center>
    </>
  );
}

export default App;
