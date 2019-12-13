import React, {
  useReducer,
  useEffect
} from "react";
import { connect } from "react-redux";
import logo from '../brainy-news.png';

import { initialState, reducerDB } from "../reducers";
import { getSmurfData, ADD_SMURF, REMOVE_SMURF } from "../actions";

import SmurfData from './SmurfData';
import SmurfForm from './SmurfForm';

import "./App.scss";

const App = (props) => {
  //#region data
  const [state, dispatch] = useReducer(reducerDB, initialState);
  //#endregion data


  //#region dispatch functions
  const addSmurf = (smurf) => {
    console.log('addSmurf: ', smurf);
    dispatch({type: ADD_SMURF, payload: smurf});
  }

  const removeSmurf = (smurf) => {
    console.log('removeSmurf: ', smurf);
    dispatch({type: REMOVE_SMURF, payload: smurf});
  }
  //#endregion dispatch functions


  //#region useEffect monitor(s)
  useEffect(() => {
    console.log('App state:', state);
  }, [state]);

  useEffect(() => {
    console.log('App props:', props);
    props.smurfData.forEach(s => {
      console.log('Add smurf to global state: ', s);
      addSmurf(s);
    });
  }, [props]);

  useEffect(() => {
    console.log('within App default useEffect');
    props.getSmurfData();
    // eslint-disable-next-line
  }, []);
  //#endregion useEffect monitor(s)


  //#region JSX
  return (
    <div className="App">
      <header>
        <img src={logo} className="logo" alt="logo" />
        <h1 className="title">SMURFS!<br/>2.0 w/Redux</h1>
        <SmurfForm addSmurf={addSmurf} />
      </header>
      <section className="Smurf">
        <SmurfData {...state} removeSmurf={removeSmurf} />
      </section>
    </div>
  );
  //#endregion JSX
};

const mapStateToProps = (state) => {
  console.log('App mapStateToProps state: ', state);
  return {
    isLoading: state.isLoading,
    error: state.error,
    smurfData: state.smurfData
  };
};

export default connect(
  mapStateToProps,
  { getSmurfData }
)(App);
