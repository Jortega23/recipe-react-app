import React from 'react'

const Form = props => (
   <form onSubmit={props.getRecipe} style={{marginBottom: '2rem'}}>
       <input className='form__input' type='text' name='recipeName' placeholder='Find your next recipe'></input>
       <button className='form__button'>Find It</button>
   </form>
);

export default Form;