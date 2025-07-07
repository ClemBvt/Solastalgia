import React from "react";

function DataTable({ data }) {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Region</th>
            <th className="border border-gray-300 px-4 py-2">Metric Name</th>
            <th className="border border-gray-300 px-4 py-2">Value</th>
            <th className="border border-gray-300 px-4 py-2">Unit</th>
            <th className="border border-gray-300 px-4 py-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{item.region}</td>
              <td className="border border-gray-300 px-4 py-2">{item.metric_name}</td>
              <td className="border border-gray-300 px-4 py-2">{item.value}</td>
              <td className="border border-gray-300 px-4 py-2">{item.unit}</td>
              <td className="border border-gray-300 px-4 py-2">{item.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
