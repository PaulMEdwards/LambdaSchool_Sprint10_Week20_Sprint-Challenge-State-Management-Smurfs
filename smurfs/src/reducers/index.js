import {
  GSSDATA_LOAD_START,
  GSSDATA_LOAD_SUCCESS,
  GSSDATA_LOAD_FAILURE
} from "../actions";

const initialState = {
  isLoading: false,
  error: "",
  smurfData: []
};

const reducer = (state = initialState, action) => {
  console.log("reducer state:", state);
  console.log("reducer action:", action);

  switch (action.type) {
    case GSSDATA_LOAD_START:
      return {
        ...state,
        isLoading: true
      };
    case GSSDATA_LOAD_SUCCESS:
      return {
        ...state,
        smurfData: action.payload,
        isLoading: false
      };
    case GSSDATA_LOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
