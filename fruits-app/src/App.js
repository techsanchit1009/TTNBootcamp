import React, { Component } from 'react';
import classes from './App.css';
import Fruit from './Fruit/Fruit';
// import fruitsTable from './FruitsTable/FruitsTable';
import FruitsTable from './FruitsTable/FruitsTable';


class App extends Component {
  state = {
    userInput: "",
    fruits: [],
    editState: { index: null, mode: false },
  };

  inputFruit = (event) => {
    const fruit_details = event.target.value;
    this.setState({ userInput: fruit_details });
  }



  submitFruit = (input) => {
    event.preventDefault();
    if (this.state.userInput.length === 0) {
      alert('Enter some data!');
      return;
    }

    // ------INSERT MODE -------------
    if (!this.state.editState.mode) {
      const userInput = (this.state.userInput).split('-');

      const fruit_detail = {
        id: Date.now(),
        fruit_name: userInput[0],
        quantity: userInput[1]
      }

      let fruitsList = this.state.fruits;
      fruitsList.push(fruit_detail);

      this.setState({
        fruits: fruitsList,
      })
    }

    // ----------EDIT MODE-------------
    else {
      const fruitToEdit = {
        ...this.state.fruits[this.state.editState.index]
      };
      const fruit = (this.state.userInput).split('-');
      // console.log(fruitToEdit);

      let editedFruit = {
        id: fruitToEdit.id,
        fruit_name: fruit[0],
        quantity: fruit[1]
      }

      const fruitsList = [...this.state.fruits];
      fruitsList[this.state.editState.index] = editedFruit;
      this.setState({
        fruits: fruitsList
      })

    }

    this.setState({
      userInput: "",
      editState: { mode: false }
    });

    // console.log(this.state);
  }



  deleteFruit = (id) => {
    const fruitIndex = this.state.fruits.findIndex(fruit => {
      return fruit.id === id;
    });
    const fruits = [...this.state.fruits];
    fruits.splice(fruitIndex, 1);
    this.setState({ fruits: fruits });
  }


  editHandler = (id) => {
    const selectedFruitIndex = this.state.fruits.findIndex(fruit => {
      return fruit.id === id;
    });

    const fruit = `${this.state.fruits[selectedFruitIndex].fruit_name}-${this.state.fruits[selectedFruitIndex].quantity}`;
    this.setState(
      {
        editState: { index: selectedFruitIndex, mode: true },
        userInput: fruit,
      });
  }

  render() {

    let table = null;
    if (this.state.fruits.length > 0) {
      table = (
        <FruitsTable
          list={this.state.fruits}
          deleteFruit={this.deleteFruit}
          editFruit={this.editHandler}
          editMode={this.state.editState.mode}
        />
      )
    }


    return (
      <div className={classes.App}>
        <h1>Fruits App </h1>
        <Fruit
          value={this.state.userInput}
          changed={() => this.inputFruit(event)}
          submit={() => this.submitFruit(this.state.userInput)}
          editMode={this.state.editState.mode}
        />
        {table}
      </div>
    );
  }
}

export default App;
