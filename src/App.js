import React, { useState } from "react";

import NowPlaying from "./components/NowPlaying";

import Cookies from "js-cookie";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import "react-spotify-auth/dist/index.css"; // if using the included styles

function App() {
  const [token, setToken] = useState(Cookies.get("spotifyAuthToken"));

  if (!token) {
    return (
      <SpotifyAuth
        redirectUri="http://localhost:3000"
        clientID="84b52fc81ae04ad6b5f9cb87144dfb58"
        scopes={[Scopes.userReadCurrentlyPlaying]}
        onAccessToken={setToken}
      />
    );
  }

  return <NowPlaying token={token} />;
}

export default App;
