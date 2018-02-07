import React from 'react';

import './favoriteRecipes.css';


export default function FavoriteRecipes(props) {
  return (
    <section className="favorites">
      <h3>My Favorite Recipes</h3>
      <div className="favorite"> {props.text} </div>
      <div className="favorite"> {props.text} </div>
      <div className="favorite"> {props.text} </div>
      <div className="favorite"> {props.text} </div>
      <div className="favorite"> {props.text} </div>
      <div className="favorite"> {props.text} </div>

    </section>
  )
}

FavoriteRecipes.defaultProps = { text: 'Favorite'}
