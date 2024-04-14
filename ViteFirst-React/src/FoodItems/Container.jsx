import React from 'react'
import sty from './Container.module.css';

const Container = (props) => {

  // console.log(props);
  return (
    <div className={sty.container}>
      {props.children}
    </div>
  )
}

export default Container;
