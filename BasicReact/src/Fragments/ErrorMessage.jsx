// import React from 'react'

function ErrorMessage({foods}) {
  return (
    <>
        {foods.length == 0 && <h3>No any Food Item Listed,Please List your favourite food item </h3>}
    </>
  )
}

export default ErrorMessage;