// import React from 'react'
import Item from './Item'

function Items({foods}) {
  return (
    <>
        <ul>
            {foods.map((i) => (<Item key={i} it={i}></Item>))}
        </ul>
    </>
  )
}

export default Items