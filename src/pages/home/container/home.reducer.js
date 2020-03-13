import HOME from './home.constants';

const initialState = {
    gridData: []
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME.SET_GRID_DATA:
      return {
        ...state,
        gridData: action.payload,
    };

    default:
      return state;
  }
};

export default homeReducer;
