import React, {
  useReducer
  // ,useEffect
} from "react";
import logo from '../brainy-news.png';

import { initialState, reducerDB } from "../reducers";
import {
  // getSmurfData,
  ADD_SMURF, REMOVE_SMURF
} from "../actions";

import SmurfData from './Smurf';
import SmurfForm from './SmurfForm';
// import SmurfyGifData from './SmurfyGifSearch';

import "./App.scss";

const App = () => {
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(reducerDB, initialState);

  // useEffect(() => {
  //   getSmurfData();
  //   // eslint-disable-next-line
  // }, []);

  const showSearch = () => {
    // let s = document.querySelector('section.SuperSecretSmurfyGifSearch');
    // s.classList.toggle('hide');
  }

  const addSmurf = (smurf) => {
    console.log('addSmurf: ', smurf);
    dispatch({type: ADD_SMURF, payload: smurf});
  }
  const removeSmurf = (smurf) => {
    console.log('removeSmurf: ', smurf);
    dispatch({type: REMOVE_SMURF, payload: smurf});
  }

  return (
    <div className="App">
      <header>
        <img src={logo} className="logo" alt="logo" onClick={() => showSearch()}/>
        {/* <div className="separator1" /> */}
        <h1 className="title">SMURFS!<br/>2.0 w/Redux</h1>
        {/* <div className="separator2" /> */}
        <SmurfForm addSmurf={addSmurf} removeSmurf={removeSmurf} />
      </header>
      <section className="Smurf">
        {/* <SmurfData getSmurfData={getSmurfData} /> */}
        <SmurfData />
      </section>
      {/* <section className="SuperSecretSmurfyGifSearch hide">
        <SmurfyGifData />
      </section> */}
    </div>
  );
};

export default App;
