import React from "react";

import { formatSpotifyResults } from "../utils/formatter";

const DisplaySong = ({ data }) => {
  const song = formatSpotifyResults(data);

  if (!song) {
    return null;
  }

  return (
    <div className="bg-white shadow rounded-lg mr-8">
      <div>
        <img src={song.album.imageUrl} style={{ width: 400 }} />
      </div>
      <div className="py-4 px-4">
        <div className="text-3xl leading-6 font-medium text-gray-900 mb-2">
          {song.title}
        </div>
        <div className="text-lg leading-6 font-light text-gray-500">
          {song.artist}
        </div>
      </div>
    </div>
  );
};

export default DisplaySong;
