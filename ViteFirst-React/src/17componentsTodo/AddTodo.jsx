// import { useState } from "react";
// import {BiMessageAdd} from "react-icons/bi";

// function AddTodo({onNewItem}) {

//   let [todoName,setTodoName] = useState("");
//   let [todoDueDate,setTodoDueDate] = useState("");

//   const handleTodoName = (event) => {
//     setTodoName(event.target.value);
//   }

//   const handleTodoDate = (event) => {
//     setTodoDueDate(event.target.value);
//   }

//   const handleAddButtonClicked = () => {
//       onNewItem(todoName,todoDueDate);
//       setTodoName("");
//       setTodoDueDate("");
//   }

//   return (
//     <div className="todo-container">
//       <div className="row">
//         <div className="col-6">
//           <input type="text" placeholder="Enter your Todo" onChange={handleTodoName} value={todoName}/>
//         </div>
//         <div className="col-4">
//           <input type="date" onChange={handleTodoDate} value={todoDueDate}/>
//         </div>
//         <div className="col-2">
//           <button className="btn btn-success" onClick={handleAddButtonClicked}><BiMessageAdd/></button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddTodo;

//@nd Way -> Form All dependant and useRef->Load but not Repaint auto.
import { useContext, useRef } from "react";
import {BiMessageAdd} from "react-icons/bi";
import { ItemStore } from "../store/ItemStore";

function AddTodo() {


  // let noOfClicks = useRef(0);
  
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const { addNewItem:onNewItem } = useContext(ItemStore);

  //No any need after useRef and ref
  // const handleTodoName = (event) => {
  //   setTodoName(event.target.value);
  //   noOfClicks.current +=1;
  // }

  //No any need
  // const handleTodoDate = (event) => {
  //   setTodoDueDate(event.target.value);
  //   console.log(noOfClicks.current);
  // }

  const handleAddButtonClicked = (event) => {
      event.preventDefault();
      const todoName = todoNameElement.current.value;   //use of ref name
      const todoDueDate = dueDateElement.current.value; //use of ref date
      
      todoNameElement.current.value = "";
      dueDateElement.current.value = "";
      if(!(todoName=="")&&!(todoDueDate=="")){
        // console.log(event);
        onNewItem(todoName,todoDueDate);
      }
  }

  return (
    <div className="todo-container">
      <form className="row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input type="text" placeholder="Enter your Todo" ref={todoNameElement} 
          /*value={todoName}*/ //No need for value after ref
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} 
          /* value={todoDueDate} */ // No need for value after ref
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success"><BiMessageAdd/></button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
