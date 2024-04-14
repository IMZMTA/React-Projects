import { createContext } from "react";
import { useReducer } from "react";
import PropTypes from 'prop-types';

export const ItemStore = createContext({
  todoItems : [],
  addNewItem : () => {},
  deleteItem : () => {},
});

//useReducer takes -> Pure Function
const todoItemReducer = (currtodoItems,action) => {
  let newTodoItem = currtodoItems;
  if(action.type === "NEW_ITEM"){ 
    if(!(action.payload.itemName == "") && !(action.payload.itemDueDate == "")){
      newTodoItem = [...currtodoItems,{name:action.payload.itemName, dueDate:action.payload.itemDueDate}];
    }
  }else if (action.type === "DELETE_ITEM"){
    newTodoItem = currtodoItems.filter(item => item.name != action.payload.itemName);
  };
  return newTodoItem;
};

const TodoContextProvider = ({children}) => {
  //Use Reducer
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  // Update by Functional -> Helps to work perfectly on previous update items 
  const addNewItem = (itemName, itemDueDate) => {
      
      const newItemAction = {
        type : "NEW_ITEM",
        payload :{
          itemName,
          itemDueDate,
        }
      };
      dispatchTodoItems(newItemAction);
  };

  const deleteItem = (itemName) => {
          
    const deleteItemAction = {
      type : "DELETE_ITEM",
      payload :{
        itemName,
      }
    };
    dispatchTodoItems(deleteItemAction);

  }
  return (
    
    <ItemStore.Provider 
    value={{
      todoItems : todoItems,
      addNewItem : addNewItem,
      deleteItem : deleteItem,
    }}>
      {children}
      </ItemStore.Provider>
  )
}

TodoContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoContextProvider;