import React from 'react'

const Form = props => (
   <form onSubmit={props.getRecipe}>
       <input type='text' name='recipeName' placeholder='Find your next recipe'></input>
       <button>Find It</button>
   </form>
);

export default Form;