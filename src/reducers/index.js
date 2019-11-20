import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    {
      title: "Nedhane",
      duration: "5.05"
    },
    {
      title: "Nandhane",
      duration: "4.25"
    },
    {
      title: "aadma jaichomada",
      duration: "3.52"
    },
    {
      title: "unakkenna",
      duration: "6.24"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
