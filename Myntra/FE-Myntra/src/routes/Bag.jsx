import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useDispatch, useSelector } from "react-redux"

const Bag = () => {

  const bagItems = useSelector(store=>store.bags);
  const items = useSelector(store=>store.items);

  const finalItems = items.filter(item => {
    const itemIndex = bagItems.indexOf(item.id)
    return itemIndex >=0;
  });


  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => ( <BagItem key={item} item={item}></BagItem> ))}
          </div>
            <BagSummary></BagSummary>
        </div>
      </main>
    </>
  );
};

export default Bag;
