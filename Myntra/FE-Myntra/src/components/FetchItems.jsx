import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/ItemsSlice";
import { fetchStatusActions } from "../store/FetchStatusSlice";

const FetchItems = () => {

  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  console.log(fetchStatus);

  useEffect(() => {

    if(fetchStatus.fetchDone) return;
  
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted()); 
    fetch('http://localhost:8080/items', { signal })
      .then(res => res.json())
      .then(({items}) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items[0]));
      });
  
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
    {/* Headless UI */}
    </> 
  )
}

export default FetchItems;
