// import itemImage from "../images/1.jpg";

import { useDispatch, useSelector } from "react-redux"
import { bagActions } from "../store/BagSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const HomeItem = ({item}) => {

  const bagItems = useSelector(store=>store.bags);

  const elementFound = bagItems.indexOf(item.id) >= 0;

  const dispatch = useDispatch();

  const handleAddToBag = () => {

    dispatch(bagActions.addToBag(item.id));

  };

  const handleRemoveFromBag = () => {

    dispatch(bagActions.removeFromBag(item.id));

  };

  return (
    <>
      <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      { !elementFound ? 
      <button className="btn btn-success btn-add-bag" onClick={handleAddToBag}>Add to Bag <GrAddCircle/></button>
      :
      <button className="btn btn-danger btn-add-bag" onClick={handleRemoveFromBag}>Remove from Bag <AiFillDelete/></button>
      }
    </div>
    </>
  )
}


export default HomeItem
