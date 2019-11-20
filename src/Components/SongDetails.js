import React from "react";
import { connect } from "react-redux";

const SongDetails = ({ song }) => {
  if (!song) {
    return <div>Select the Song</div>;
  }
  return (
    <div>
      <h1>Song Details</h1>
      <p>Song Title : {song.title}</p>
      <br />
      <p>Duration : {song.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetails);
