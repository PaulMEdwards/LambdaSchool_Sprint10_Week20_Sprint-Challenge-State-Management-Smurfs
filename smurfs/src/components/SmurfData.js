import React, { useEffect } from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
library.add(faEdit, faTrashAlt);

const SmurfData = (props) => {
  //#region useEffect monitor(s)
  useEffect(() => {
    console.log('SmurfData props:', props);
  }, [props]);
  //#endregion useEffect monitor(s)


  //#region JSX
  return (
    <>
      {props.error && <div>Error: {props.error}</div>}
      {props.isLoading ? (
        <div>loading data...</div>
      ) : (
        props.smurfData && props.smurfData.length > 0 && 
        <div className="smurfDBResults">
          {props.smurfData.map(s => (
            <div className="smurf" key={s.id}>
              <div className="name">{s.name}</div>
              <div className="height">Height: {s.height} cm</div>
              <div className="age">Age: {s.age} yrs</div>
              <div className="trash" onClick={() => props.removeSmurf(s)}>
                <FontAwesomeIcon icon={faTrashAlt} />&nbsp;Delete
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
  //#endregion JSX
};

export default SmurfData;
