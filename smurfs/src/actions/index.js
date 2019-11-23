import axios from "axios";

export const SDATA_LOAD_START = "SDATA_LOAD_START";
export const SDATA_LOAD_SUCCESS = "SDATA_LOAD_SUCCESS";
export const SDATA_LOAD_FAILURE = "SDATA_LOAD_FAILURE";

export const ADD_SMURF = "ADD_SMURF";
export const REMOVE_SMURF = "REMOVE_SMURF";

export const getSmurfData = () => dispatch => {
  console.log('getSmurfData:', getSmurfData);
  dispatch({ type: SDATA_LOAD_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log('getSmurfData results:', res);
      dispatch({
        type: SDATA_LOAD_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log('getSmurfData error:', err);
      dispatch({
        type: SDATA_LOAD_FAILURE,
        payload: "error loading data"
      });
    });
};

// export const getSmurfyGifData = () => dispatch => {
//   dispatch({ type: SDATA_LOAD_START });
//   axios
//     .get("https://api.giphy.com/v1/gifs/search?q=smurfy%7Csmurf%7Csmurfs&api_key=zclAIix5gQmJ7N4h6GiSzarlEo28gDGx&tag=&rating=G&limit=12")
//     .then(res => {
//       console.log('getSmurfyGifData results:', res);
//       dispatch({
//         type: SDATA_LOAD_SUCCESS,
//         payload: res.data.data
//       });
//     })
//     .catch(err => {
//       console.log('getSmurfyGifData error:', err);
//       dispatch({
//         type: SDATA_LOAD_FAILURE,
//         payload: "error loading data"
//       });
//     });
// };
