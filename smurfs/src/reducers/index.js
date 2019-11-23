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
  // ,smurfyGifData: []
};

// export const reducerGIF = (state = initialState, action) => {
//   console.log("reducerGIF state:", state);
//   console.log("reducerGIF action:", action);

//   switch (action.type) {
//     case SDATA_LOAD_START:
//       return {
//         ...state,
//         isLoading: true
//       };
//     case SDATA_LOAD_SUCCESS:
//       return {
//         ...state,
//         smurfyGifData: action.payload,
//         isLoading: false
//       };
//     case SDATA_LOAD_FAILURE:
//       return {
//         ...state,
//         error: action.payload,
//         isLoading: false
//       };
//     default:
//       return state;
//   }
// };

export const reducerDB = (state = initialState, action) => {
  console.log("reducerDB state:", state);
  console.log("reducerDB action:", action);

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
      console.log(`ADD_SMURF is a new implementation; bugs likely.`);

      const newSmurf = { ...action.payload,
        id: state.smurfData.length
      };
      console.log('newSmurf: ', newSmurf);

      return {
        ...state,
        smurfData: [
          ...state.smurfData, newSmurf
        ]
      };
    case REMOVE_SMURF:
      console.log(`REMOVE_SMURF not implemented.`);
      
      // return {
      //   ...state,
      //   error: action.payload,
      //   isLoading: false
      // };
      break;
    default:
      return state;
  }
};

export default { reducerDB /*, reducerGIF*/ };