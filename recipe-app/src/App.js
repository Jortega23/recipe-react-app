import React, { Component } from 'react';
import Form from './components/Form'
import Recipes from './components/Recipes'
import './App.css';


const APP_ID ='682fd689'
const APP_KEY = 'f2326aa68841e35fe1bc1a01df5f45ed'

class App extends Component {
  state = {
    recipes: []
  }

  getRecipe = async (e) =>{
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value
    const apiCall = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await apiCall.json()
    this.setState({recipes:data.hits})
    console.log(this.state.recipes)
  }

  render(){
  return (
    <div className='App'>
        <header className='App-header'>
          <h1 className='App-Title'> Recipe Finder</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
