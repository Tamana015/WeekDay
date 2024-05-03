import { SET_DROPDOWN_VALUE } from "./action";

const initialState = {
  dropdownValues: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DROPDOWN_VALUE:
      return {
        ...state,
        dropdownValues: {
          ...state.dropdownValues,
          [action.payload.item]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;