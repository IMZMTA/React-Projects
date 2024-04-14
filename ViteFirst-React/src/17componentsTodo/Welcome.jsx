// import sty from './Welcome.module.css';

// const Welcome = () => {
//   return (
//     <div>
//       <p className={sty.wel}>Welcome to Todo Task, Enjoy your Day</p>
//     </div>
//   )
// }

// export default Welcome;


import { useContext } from 'react';
import sty from './Welcome.module.css';
import { ItemStore } from '../store/ItemStore';

const Welcome = () => {

  const {todoItems} = useContext(ItemStore);

  return (
      todoItems.length === 0 &&  <p className={sty.wel}>Welcome to Todo Task, Enjoy your Day</p>
  )
}

export default Welcome;
