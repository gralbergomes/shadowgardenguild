import { createStore } from 'redux';

const initialState = {
  darkMode: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
}

export const store = createStore(reducer);
