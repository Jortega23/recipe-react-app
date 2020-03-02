import React, { Component } from 'react';
import Form from './components/Form'
import './App.css';


const APP_ID ='682fd689'
const APP_KEY = 'f2326aa68841e35fe1bc1a01df5f45ed'

class App extends Component {

  getRecipe = async (e) =>{
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value
    const apiCall = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await apiCall.json()
    console.log(data);
  }

  render(){
  return (
    <div className='App'>
        <header className='AppHeader'>
          <h1 className='HeaderName'> Recipe </h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
      </div>
    );
  }
}

export default App;
