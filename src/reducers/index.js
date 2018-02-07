import * as actions from '../actions';

const initialState = {
  favoriteRecipes: [{
    userId: 'dummyemail',
    recipeId: 'tdytf6464'
  }, {
    userId: 'dummyemail',
    recipeId: 'hjghf4365'
  }]
};

export const recipeReducer = (state=initialState, action) => {
  if (action.type === actions.ADD_FAVORITE) {
    return Object.assign({}, state, {
      favoriteRecipes: [...state.favoriteRecipes, {
        userId: action.userId,
        recipeId: action.recipeId
        }]
      });
    }
    else if (action.type === actions.ADD_USER) {
      return Object.assign({}, user, {
        cards: [...list.cards, {
          text: action.text
        });

        return Object.assign({}, state, {
            favoriteRecipes
        });
    }
    return state;
};
