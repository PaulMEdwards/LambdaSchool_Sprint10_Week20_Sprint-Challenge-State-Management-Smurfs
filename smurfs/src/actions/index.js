import axios from "axios";

export const GSSDATA_LOAD_START = "GSSDATA_LOAD_START";
export const GSSDATA_LOAD_SUCCESS = "GSSDATA_LOAD_SUCCESS";
export const GSSDATA_LOAD_FAILURE = "GSSDATA_LOAD_FAILURE";

export const getSmurfyData = () => dispatch => {
  dispatch({ type: GSSDATA_LOAD_START });

  axios
    .get("https://api.giphy.com/v1/gifs/search?q=smurfy%7Csmurf%7Csmurfs&api_key=zclAIix5gQmJ7N4h6GiSzarlEo28gDGx&tag=&rating=G&limit=12")
    .then(res => {
      console.log(res);
      dispatch({
        type: GSSDATA_LOAD_SUCCESS,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GSSDATA_LOAD_FAILURE,
        payload: "error loading data"
      });
    });
};
