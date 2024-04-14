import IndiItems from "./IndiItems";
import PropTypes from 'prop-types';
import styles from './Items.module.css';
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Items = ({item,bought,handleBuyButton}) => {

  
let [activeItems , setactiveItems ] = useState([]);


const onBuyButton = (i,event) =>{
  let newItems = [...activeItems, i];
  setactiveItems(newItems);
}


  return (
    <>
      <div className={styles.rain}>
            {item.map((i)=>(
            <IndiItems key={i} foodItem={i} bought={activeItems.includes(i)} handleBuyButton = {(event) => onBuyButton(i,event)}/>//Parent is deciding.
            ))}
      </div>
    </>
  );
}

Items.propTypes = {
  item: PropTypes.array.isRequired,
};

export default Items;
