import {
  SDATA_LOAD_START,
  SDATA_LOAD_SUCCESS,
  SDATA_LOAD_FAILURE,
  ADD_SMURF,
  REMOVE_SMURF
} from "../actions";

export const initialState = {
  isLoading: false,
  error: "",
  smurfData: []
};

export const reducerDB = (state = initialState, action) => {
  console.log("reducerDB action:", action);
  console.log("reducerDB state:", state);

  switch (action.type) {
    case SDATA_LOAD_START:
      return {
        ...state,
        isLoading: true
      };
    case SDATA_LOAD_SUCCESS:
      return {
        ...state,
        smurfData: action.payload,
        isLoading: false
      };
    case SDATA_LOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ADD_SMURF:
      const newSmurf = { ...action.payload,
        id: state.smurfData.length
      };
      console.log('reducerDB ADD_SMURF newSmurf: ', newSmurf, state);

      return {
        ...state,
        smurfData: [...state.smurfData, newSmurf]
      };
    case REMOVE_SMURF:
      return {
        ...state,
        smurfData: state.smurfData.filter(s => s.id !== action.payload.id)
      };
    default:
      return state;
  }
};
