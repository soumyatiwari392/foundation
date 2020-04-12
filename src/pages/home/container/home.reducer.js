import HOME from './home.constants';

const initialState = {
  tableData: []
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME.SET_POST_DATA:
      return {
        ...state,
        tableData: action.payload,
    };

    default:
      return state;
  }
};

export default homeReducer;
