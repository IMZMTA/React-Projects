
// import TodoItem from './TodoItem'

// function TodoItems({todoItems, onDeleteClicked}) {

//   return (
//     <>
//       <ul>
//         {todoItems.map((i)=>(<TodoItem key={i.name} todoItems={i} onDeleteClicked={onDeleteClicked} ></TodoItem>))}
//       </ul>
//     </>
//   )
// }

// export default TodoItems;

import { useContext } from 'react';
import TodoItem from './TodoItem'
import { ItemStore } from '../store/ItemStore';

function TodoItems() {

  const contextObj = useContext(ItemStore); //useContext for Api
  const todoItems = contextObj.todoItems;
  const onDeleteClicked = contextObj.delez

  return (
    <>
      <ul>
        {todoItems.map((i)=>(<TodoItem key={i.name} todoItems={i} onDeleteClicked={onDeleteClicked} ></TodoItem>))}
      </ul>
    </>
  )
}

export default TodoItems;
