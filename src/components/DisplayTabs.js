import React from "react";

const DisplayTabs = ({ results }) => {
  if (!results) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Rating
              </th>
            </tr>
          </thead>
          <tbody>
            {results
              .filter((r) => r.marketing_type !== "official")
              .map((result, i) => (
                <tr
                  key={`tab-${result.id}`}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a
                      href={result.tab_url}
                      target="_blank"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      {result.artist_name} - {result.song_name}
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {result.marketing_type === "TabPro"
                      ? "Pro Version"
                      : result.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {parseFloat(result.rating).toFixed(2)} ({result.votes}{" "}
                    votes)
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayTabs;
