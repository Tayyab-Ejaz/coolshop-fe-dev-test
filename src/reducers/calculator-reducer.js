const initialState = [{ operation: "+", value: 0, enabled: true }];
const ACTIONS = {
  ADD_ROW: "ADD_ROW",
  REMOVE_ROW: "REMOVE_ROW",
  TOGGLE_ROW_STATUS: "TOGGLE_ROW_STATUS",
  SET_ROW_OPERATION: "SET_ROW_OPERATION",
  INPUT_CHANGE: "INPUT_CHANGE",
  CLEAR_ALL: "CLEAR_ALL",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ROW:
      return [...state, { operation: "+", value: 0, enabled: true }];
    case ACTIONS.REMOVE_ROW:
      return state.filter((_, index) => index !== action.payload);
    case ACTIONS.TOGGLE_ROW_STATUS:
      return state.map((row, index) =>
        index === action.payload ? { ...row, enabled: !row.enabled } : row
      );
    case ACTIONS.SET_ROW_OPERATION:
      return state.map((row, index) =>
        index === action.payload.index
          ? { ...row, operation: action.payload.value }
          : row
      );
    case ACTIONS.INPUT_CHANGE:
      return state.map((row, index) =>
        index === action.payload.index
          ? { ...row, value: parseInt(action.payload.value) }
          : row
      );
    case ACTIONS.CLEAR_ALL:
      return initialState;
    default:
      return state;
  }
};

const calculatorReducer = {
  reducer,
  initialState,
  ACTIONS,
};

export default calculatorReducer;
