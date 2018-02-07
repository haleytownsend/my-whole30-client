import React from 'react';

import './recipes.css'

export default function Recipes(props) {
  return (
    <section className="recipes">
      <h3>Whole30 Recipes</h3>
      <div className="recipe"> {props.text} </div>
      <div className="recipe"> {props.text} </div>
      <div className="recipe"> {props.text} </div>
      <div className="recipe"> {props.text} </div>
      <div className="recipe"> {props.text} </div>
      <div className="recipe"> {props.text} </div>
    </section>
  )
}

Recipes.defaultProps = { text: 'Recipe'}
