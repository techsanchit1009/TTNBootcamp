import React from 'react';
import './FruitsTable.css';

const fruitsTable = (props) => {
  const list = props.list;

  const fruitsList = list.map((fruit,index) => {
    return  <tr>
            <td>{fruit.fruit_name}</td>
            <td>{fruit.quantity}</td>
            <td><button id="delete" onClick={() => props.deleteFruit(fruit.id)}>Delete</button></td>
          </tr>
  })
  return (
    <div className="fruitTable">
      <table>
        <thead>
          <tr>
            <th>Fruit-Name</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {fruitsList}
        </tbody>
      </table>
    </div>
  )
}

export default fruitsTable;