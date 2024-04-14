
import ErrorMessage from "./ErrorMessage";
import Items from "./Items";

function Fragment({items}) {

  return (
    <>
    <ErrorMessage foods={items}></ErrorMessage>
      <Items foods={items}></Items>
    </>
  )
}

export default Fragment
