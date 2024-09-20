const initialThemeState = {
  theme: 'light'
};

const themeReducer = (state = initialThemeState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
};

export default themeReducer;
