import React from "react";

import { formatSpotifyResults } from "../utils/formatter";

const DisplaySong = ({ data }) => {
  const song = formatSpotifyResults(data);

  if (!song) {
    return null;
  }

  return (
    <div>
      <div>
        <img src={song.album.imageUrl} />
      </div>
      <div>{song.title}</div>
      <div>{song.artist}</div>
    </div>
  );
};

export default DisplaySong;
