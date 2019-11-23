import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import { getSmurfData, ADD_SMURF /*, REMOVE_SMURF*/ } from "../actions";

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
// import { faUserEdit, faUserTimes } from '@fortawesome/free-solid-svg-icons';

// library.add(faEdit, faTrashAlt, faUserEdit, faUserTimes);

const SmurfForm = props => {
//#region smurfHeight formatting function
  // const smurfHeight = (heightValue) => {
  //   console.log(`smurfHeight input parameter type: "${typeof(heightValue)}", value: "${heightValue}".`);

  //   let h = '';

  //   switch (typeof(heightValue)) {
  //     case "number":
  //       if (heightValue === 0) {
  //         h = '';
  //       } else if (heightValue > 0) {
  //         h = heightValue.toString()+'cm';
  //       // } else {
  //       //   console.log(`smurfHeight parameter "${heightValue}" must be greater than 0.`);
  //       }
  //       break;
  //     case "string":
  //       if (heightValue.length > 0) {
  //         if(!heightValue.endsWith('cm')) {
  //           heightValue = heightValue+'cm';
  //         }
  //         h = heightValue;
  //       // } else {
  //       //   console.log(`smurfHeight parameter is an empty string which is not permitted. It must be a numeric value (stored as string is OK) greater than 0 and ending in 'cm'. Example: '7.5cm'`);
  //       }
  //       break;
  //     default:
  //       console.log(`smurfHeight parameter "${heightValue}" type "${typeof(heightValue)}" is not supported. Must be a decimal value greater than 0 or equivalent as string.`);
  //   }

  //   console.log(`smurfHeight output parameter type: "${typeof(h)}", value: "${h}".`);

  //   return h;
  // }
//#endregion smurfHeight formatting function

  const newSmurfObject = (nameValue='', ageValue='', heightValue='') => {
    return {
      name: nameValue,
      age: ageValue,
      // height: smurfHeight(heightValue)
      height: heightValue
    };
  }
  const defaultSmurf = newSmurfObject();
  
  const [newSmurf, setNewSmurf] = useState(defaultSmurf);

  const handleChanges = e => {
    // console.log('SmurfForm handleChanges newSmurf: ', newSmurf);
    if ((e.target.name === 'age' || e.target.name === 'height') && (e.target.value === 0)) {
      e.target.value = '';
    }
    // if (e.target.name === 'height') {
    //   setNewSmurf({ ...newSmurf, [e.target.name]: smurfHeight(e.target.value) });
    // } else {
      setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
    // }
  };
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log('SmurfForm handleSubmit e: ', e);
  //   console.log('add newSmurf: ', newSmurf);
  //   addSmurf(newSmurf);
  //   setNewSmurf(defaultSmurf);
  // };

  useEffect(() => {
    console.log('SmurfForm props:', props);
  }, [props]);
  useEffect(() => {
    console.log('SmurfForm newSmurf: ', newSmurf);
  }, [newSmurf]);

  return (
    <div className="Input">
      <input
        className="inputName"
        type="text"
        name="name"
        placeholder="Smurfy Name"
        value={newSmurf.name}
        // value={newSmurfName}
        onChange={handleChanges}
      />
      <br/>
      <input
        className="inputAge"
        type="number"
        min="0"
        max="1000"
        name="age"
        placeholder="Age"
        value={newSmurf.age}
        // value={newSmurfAge}
        onChange={handleChanges}
      />yrs&nbsp;
      <input
        className="inputHeight"
        type="number"
        name="height"
        min="0"
        max="22"
        placeholder="Height"
        value={newSmurf.height}
        // value={newSmurfHeight}
        onChange={handleChanges}
      />cm
      <br/>
      <button onClick={()=>{
        if (newSmurf.name !== '' && newSmurf.age !== '' && newSmurf.height !== '') {
          props.addSmurf(newSmurf);
          setNewSmurf(defaultSmurf);
        }
        // if (newSmurfName !== '' && newSmurfAge !== '' && newSmurfHeight !== '') {
        //   let s = newSmurfObject(newSmurfName, newSmurfAge, newSmurfHeight);
        //   props.addSmurf(s);
        //   setNewSmurf(defaultSmurf);
        // }
      }}>Add&nbsp;Smurf</button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('SmurfForm mapStateToProps state: ', state);
  return {
    isLoading: state.isLoading,
    error: state.error,
    smurfData: state.smurfData
  };
};

export default connect(
  mapStateToProps,
  { /*getSmurfData*/ }
)(SmurfForm);
