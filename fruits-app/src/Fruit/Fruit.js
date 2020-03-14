import React from 'react'
import classes from './Fruit.css'


const fruit = (props) => {
  return (
    <div className={classes['input-area']}>
      <p>Welcome to Fruit App</p>
      <form onSubmit={props.submit}>
        <input
          type="text"
          placeholder="Fruit-Quantity"
          onChange={props.changed}
          value={props.value}
        />
        { props.editMode ? 
        <button className={classes.edit}>Save Edits</button> :
        <button className={classes.submit}>Submit</button> 
        }
        
      </form>
    </div>
  );
}

export default fruit;