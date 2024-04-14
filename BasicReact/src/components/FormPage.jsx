import React, { useReducer, useState } from 'react';


function reducerFunction(state,action){
  const { type, payload } = action;

  switch(type){

    case "NAME" : {
      return {...state, name : payload}
    }

    case "AGE" : {
      return {...state, age : payload}
    }

    case "PHONE" : {
      return {...state, phone : payload}
    }

    case "RESET": {
      return payload; // Resetting the state to the initial state
    }

    default : return state;
  }
}

const FormPage = () => {

  const initialState = {
    name: "",
    age: "",
    phone: ""
  };

  const [form, dispatch] = useReducer(reducerFunction,initialState);

  function handleNameClick (e) {
    dispatch({type : "NAME", payload : e.target.value});
  }

  function handleAgeClick (e) {
    dispatch({type : "AGE", payload : e.target.value});
  }

  function handlePhoneClick (e) {
    dispatch({type : "PHONE", payload : e.target.value});
  }

  function handleSubmit (e) {
    e.preventDefault();
    console.log({form});
    dispatch({type : "RESET", payload :initialState });
  }

// ----------------
// function reducerFunction(prevState,nextState){
//   console.log("nextState = ", nextState);
//   return {...prevState, ...nextState};
// }

// const FormPage = () => {

//   const [form, setForm] = useReducer(reducerFunction,{
//     name : "",
//     age : "",
//     phone : "",
//   });

//   function handleNameClick (e) {
//     setForm({...form, name : e.target.value});
//   }

//   function handleAgeClick (e) {
//     setForm({ age : e.target.value});
//   }

//   function handlePhoneClick (e) {
//     setForm({ phone : e.target.value});
//   }

//   function handleSubmit (e) {
//     e.preventDefault();
//     console.log({form});
//     setForm({
//         name : "",
//         age : "",
//         phone : "",
//   });
//   }


// ---------
  // const [form, setForm] = useState({
  //   name : "",
  //   age : "",
  //   phone : "",
  // });

  // function handleNameClick (e) {
  //   setForm({...form, name : e.target.value});
  // }

  // function handleAgeClick (e) {
  //   setForm({...form, age : e.target.value});
  // }

  // function handlePhoneClick (e) {
  //   setForm({...form, phone : e.target.value});
  // }

  // function handleSubmit (e) {
  //   e.preventDefault();
  //   console.log({form});
  //   setForm({
  //       name : "",
  //       age : "",
  //       phone : "",
  // });
  // }


  // -----------
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [phone, setPhone] = useState("");

  // function handleNameClick (e) {
  //   console.log(e.target.value)
  //   setName(e.target.value);
  // }

  // function handleAgeClick (e) {
  //   console.log(e.target.value)
  //   setAge(e.target.value);
  // }

  // function handlePhoneClick (e) {
  //   console.log(e.target.value)
  //   setPhone(e.target.value);
  // }

  // function handleSubmit (e) {
  //   e.preventDefault();
  //   console.log({name,age,phone});
  //   setName("");
  //   setAge("");
  //   setPhone("");
  // }

  return (
    <div>
      <br/>
      <center>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input type='text' placeholder='Enter your Name' id='name' value={form.name} onChange={handleNameClick}/>
          <br/>
          <label htmlFor='age'>Age:</label>
          <input type='text' placeholder='Enter your Age' id='age' value={form.age} onChange={handleAgeClick}/>
          <br />
          <label htmlFor='phone'>Phone:</label>
          <input type='number' placeholder='Enter your Number' id='phone' value={form.phone} onChange={handlePhoneClick}/>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </center>
    </div>
  );
};

export default FormPage;
