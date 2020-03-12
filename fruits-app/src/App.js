import React, { Component } from 'react';
import './App.css';
import Fruit from './Fruit/Fruit';
// import fruitsTable from './FruitsTable/FruitsTable';
import FruitsTable from './FruitsTable/FruitsTable';


class App extends Component {
  state = {
    userInput: [],
    fruits: []
  };

  inputFruit = (event) => {
    const fruit_details = (event.target.value).split('-');
    this.setState({ userInput: fruit_details });
  }



  submitFruit = (input) => {
    event.preventDefault();
    if(this.state.userInput.length===0){
      alert('Enter some data!');
      return;
    }
    const fruit_detail = {
      id: Date.now(),
      fruit_name: this.state.userInput[0],
      quantity: this.state.userInput[1]
    }
    
    let fruitsList = this.state.fruits;
    fruitsList.push(fruit_detail);
    
    this.setState({
      userInput: [],
      fruits: fruitsList
      
    })
    
    document.getElementsByTagName('input')[0].value = "";
    console.log(this.state);
  }



  deleteFruit = (id) => {
    const fruitIndex = this.state.fruits.findIndex(fruit => {
      return fruit.id === id;
    });
    const fruits = [...this.state.fruits];
    fruits.splice(fruitIndex, 1);
    this.setState({fruits: fruits});
  }



  render() {

    let table = null;
    if (this.state.fruits.length > 0) {
      table = (
        <FruitsTable
          list={this.state.fruits}
          deleteFruit={this.deleteFruit}
        />
      )
    }
  
    return (
      <div className="App">
        <h1>Fruits App </h1>
        <Fruit
          submit={() => this.submitFruit(this.state.userInput)}
          changed={() => this.inputFruit(event)} />
        {table}
      </div>
    );
  }
}

export default App;
