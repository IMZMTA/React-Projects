// // import React from 'react'
// import {AiFillDelete} from "react-icons/ai";

// function TodoItem({todoItems,onDeleteClicked}) {

//   const {name,dueDate} = todoItems;
//   return (
//     <>
//       <div className="row row-ch">
//             <div className="col-6">{name}</div>
//             <div className="col-4">{dueDate}</div>
//             <div className="col-2">
//               <button className="btn btn-danger" onClick={()=> onDeleteClicked(name)}><AiFillDelete/></button>
//             </div>
//       </div>
//     </>
//   )
// }

// export default TodoItem;


// import React from 'react'
import { useContext } from "react";
import {AiFillDelete} from "react-icons/ai";
import { ItemStore } from "../store/ItemStore";

function TodoItem({todoItems}) {

  const {name,dueDate} = todoItems;
  const {deleteItem:onDeleteClicked } = useContext(ItemStore);

  return (
    <>
      <div className="row row-ch">
            <div className="col-6">{name}</div>
            <div className="col-4">{dueDate}</div>
            <div className="col-2">
              <button className="btn btn-danger" onClick={()=> onDeleteClicked(name)}><AiFillDelete/></button>
            </div>
      </div>
    </>
  )
}

export default TodoItem;
