export const handleAdd = (value) => {
  return {
    type: 'ADD',
    payload: value
  };
};

export const handleReduce = (value) => {
  return {
    type: 'REDUCE',
    payload: value
  };
};

export const handleTheme = (theme) => {
  return {
    type: 'SET_THEME',
    payload: theme
  };
};
