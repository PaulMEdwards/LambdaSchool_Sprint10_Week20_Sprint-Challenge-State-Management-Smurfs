import React, { useState, useEffect } from "react";

const SmurfForm = (props) => {
  //#region data
  const newSmurfObject = (nameValue='', ageValue=0, heightValue=0) => {
    return {
      name: nameValue,
      age: ageValue,
      height: heightValue
    };
  }

  const defaultSmurf = newSmurfObject();

  const [newSmurf, setNewSmurf] = useState(defaultSmurf);
  //#endregion data


  //#region useEffect monitor(s)
  useEffect(() => {
    console.log('SmurfForm props:', props);
  }, [props]);

  useEffect(() => {
    // console.log('SmurfForm newSmurf: ', newSmurf);
  }, [newSmurf]);

  useEffect(() => {
    console.log("Loading Smurfy sample data...");
    props.addSmurf(newSmurfObject("Grandpa", 1000, 4.8));
    props.addSmurf(newSmurfObject("Papa", 500, 5.0));
    props.addSmurf(newSmurfObject("Lazy", 201, 4.9));
    props.addSmurf(newSmurfObject("Jokey", 202, 5.1));
    props.addSmurf(newSmurfObject("Clumsy", 203, 5.2));
    props.addSmurf(newSmurfObject("Hefty", 204, 4.9));
    props.addSmurf(newSmurfObject("Smurfette", 205, 5.2));
    props.addSmurf(newSmurfObject("Harmony", 206, 4.7));
    props.addSmurf(newSmurfObject("Sassette", 25, 4.0));
  }, []);
  //#endregion useEffect monitor(s)


  //#region event handler(s)
  const handleChanges = (e) => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (newSmurf.name !== '' && 
        newSmurf.age !== '' && newSmurf.age !== 0 && 
        newSmurf.height !== '' && newSmurf.height !== 0) {
      console.log('SmurfForm newSmurf: ', newSmurf);
      props.addSmurf(newSmurf);
      setNewSmurf(defaultSmurf);
    }
  };
  //#endregion event handler(s)


  //#region JSX
  return (
    <div className="Input">
      <input
        className="inputName"
        type="text"
        name="name"
        placeholder="Smurfy Name"
        value={newSmurf.name}
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
        value={newSmurf.age === 0 ? '' : newSmurf.age}
        onChange={handleChanges}
      />yrs&nbsp;
      <input
        className="inputHeight"
        type="number"
        name="height"
        min="0"
        max="22"
        placeholder="Height"
        value={newSmurf.height === 0 ? '' : newSmurf.height}
        onChange={handleChanges}
      />cm
      <br/>
      <button onClick={()=>{handleSubmit()}}>Add&nbsp;Smurf</button>
    </div>
  );
  //#endregion JSX
};

export default SmurfForm;
