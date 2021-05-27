
import React, { useState,useEffect  } from 'react';


function Form2() {
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
          ...states,
          [evt.target.name]: value,
          [evt.target.name]: value
        }); console.log(states)
      }
  const [states, setState] = useState({
    firstName: "",
    lastName: ""
  })
  return (
      <>
    <form>
      <label>
        First name
        <input
          type="text"
          name="firstName"
          value={states.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name
        <input
          type="text"
          name="lastName"
          value={states.lastName}
          onChange={handleChange}
        />
      </label>
    
    </form>
    </>
  );
  }

  export default Form2