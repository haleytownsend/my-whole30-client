export const ADD_USER = 'ADD_USER';
export const addUser ={
    type: ADD_USER,
    email:,
    password:
};

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const addCard = (userId, recipeId) => ({
    type: ADD_FAVORITE,
    userId,
    recipeId
});
