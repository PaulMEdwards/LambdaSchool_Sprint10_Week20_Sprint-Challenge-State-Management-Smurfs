import React from "react";
import { connect } from "react-redux";
import { getSmurfyData } from "../actions";

const SmurfyData = props => {
  return (
    <>
      {/* <input
        name="search"
        placeholder="Search"
        // value={search}
        className="search"
      /> */}
      <button
        onClick={() => {
          props.getSmurfyData();
        }}
      >
        Get Smurf GIFs
      </button>
      {props.error && <div>Error: {props.error}</div>}
      {props.isLoading ? (
        <div>loading data...</div>
      ) : (
        props.smurfData.length > 0 && 
        <div className="smurfGifResults">
          {props.smurfData.map(s => (
            <div className="smurfGif" key={s.id}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={s.images.fixed_height.url}
                  className="gif"
                  alt="gif"
                />
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    smurfData: state.smurfData
  };
};

export default connect(
  mapStateToProps,
  { getSmurfyData }
)(SmurfyData);
