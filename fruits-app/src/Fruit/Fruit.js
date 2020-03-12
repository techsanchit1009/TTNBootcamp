import React from 'react'
import './Fruit.css'


const fruit = (props) => {
  return (
    <div className="input-area">
      <p>Welcome to Fruit App</p>
      <form onSubmit={props.submit}>
        <input
          type="text"
          placeholder="Fruit-Quantity"
          onChange={props.changed}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default fruit;