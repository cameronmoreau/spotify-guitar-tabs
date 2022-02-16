import React from "react";

const DisplayTabs = ({ results }) => {
  if (!results) {
    return null;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Type</th>
          <th>Rating</th>
          <th>Pro?</th>
        </tr>
      </thead>
      <tbody>
        {results
          .filter((r) => r.marketing_type !== "official")
          .map((result) => (
            <tr key={`tab-${result.id}`}>
              <td>
                <a href={result.tab_url} target="_blank">
                  {result.artist_name} - {result.song_name}
                </a>
              </td>
              <td>{result.type}</td>
              <td>
                {result.rating} ({result.votes} votes)
              </td>
              <td>{result.marketing_type === "TabPro" ? "Pro" : null}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default DisplayTabs;
