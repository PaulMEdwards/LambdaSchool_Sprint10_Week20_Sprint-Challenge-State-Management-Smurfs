import React from "react";
import { connect } from "react-redux";
import { getSmurfyGifData } from "../actions";

const SmurfyGifData = props => {
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
          props.getSmurfyGifData();
        }}
      >
        Get Smurf GIFs
      </button>
      {props.error && <div>Error: {props.error}</div>}
      {props.isLoading ? (
        <div>loading data...</div>
      ) : (
        props.smurfyGifData.length > 0 && 
        <div className="smurfGifResults">
          {props.smurfyGifData.map(s => (
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
    smurfyGifData: state.smurfyGifData
  };
};

export default connect(
  mapStateToProps,
  { getSmurfyGifData }
)(SmurfyGifData);
