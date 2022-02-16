import React from "react";

import DisplaySong from "./DisplaySong";
import DisplayTabs from "./DisplayTabs";

import { getSpotifyClient, fetcher } from "../utils/clients";

import useSWR from "swr";
import { formatSpotifyResults } from "../utils/formatter";

const NowPlaying = ({ token }) => {
  const { data: spotifyData } = useSWR(
    "https://api.spotify.com/v1/me/player/currently-playing",
    getSpotifyClient(token)
  );

  const currentSong = formatSpotifyResults(spotifyData);

  const { data: tabsData } = useSWR(
    currentSong
      ? `/api/search-tab?value=${currentSong.title} ${currentSong.artist}`
      : null,
    fetcher
  );

  return (
    <div>
      <div>Now Playing</div>
      <DisplaySong data={spotifyData} />
      <DisplayTabs results={tabsData?.results} />
    </div>
  );
};

export default NowPlaying;
