import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfData } from "../actions";

const SmurfData = props => {
  useEffect(() => {
    props.getSmurfData();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    console.log('SmurfData props:', props);
  }, [props]);

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
              <h3 className="name">{s.name}</h3>
              <p className="height">Height: {s.height}</p>
              <p className="age">Age: {s.age}</p>

              {/* <a href={s.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={s.images.fixed_height.url}
                  className="DB"
                  alt="DB"
                />
              </a> */}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => {
  console.log('Smurf mapStateToProps state: ', state);
  return {
    isLoading: state.isLoading,
    error: state.error,
    smurfData: state.smurfData
    // ,getSmurfData: state.getSmurfData
  };
};

export default connect(
  mapStateToProps,
  { getSmurfData/**/ }
)(SmurfData);
