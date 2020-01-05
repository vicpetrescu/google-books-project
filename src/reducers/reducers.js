import { combineReducers } from 'redux';

const initialState = {
  books: [],
  favorites: [],
  loggedIn: false,
  username: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, loggedIn: true, username: action.username };
    case 'LOGOUT':
      return {
        ...state,
        loggedIn: false,
        username: '',
      };
    case 'SEARCHED_BOOKS':
      return { ...state, books: action.books };
    case 'FAVORITE_BOOK':
      console.log('adding book to favorites!');
      return { ...state, favorites: [...state.favorites, action.book] };
    case 'REMOVE_BOOK':
      console.log('removing book to favorites!');
      let newFavorites = state.favorites.filter(
        book => action.book.id !== book.id
      );
      return {
        ...state,
        favorites: newFavorites,
      };
    default:
      return state;
  }
}

export default reducer;
