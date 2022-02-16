export function formatSpotifyResults(data) {
  const artist = data?.item?.artists?.[0];
  const album = data?.item?.album;
  const title = data?.item?.name;

  if (!artist || !album || !title) {
    return null;
  }

  return {
    title,
    artist: artist.name,
    album: {
      title: album.name,
      imageUrl: album.images?.[0]?.url,
    },
  };
}
