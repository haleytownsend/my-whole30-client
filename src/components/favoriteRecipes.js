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


//
// export default class List extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             cards: [{
//                 text: 'Example card 1'
//             }, {
//                 text: 'Example card 2'
//             }, {
//                 text: 'Example card 3'
//             }]
//         }
//     // }


// render() {
//      const cards = this.state.cards.map((card, index) =>
//          <li key={index}>
//              <Card {...card} />
//          </li>
//      );
//      return (
//          <div>
//              <h3>{this.props.title}</h3>
//              <ul className="list">
//                  {cards}
//              </ul>
//          </div>
//      );
//  }
// }
