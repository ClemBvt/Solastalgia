import React, { useEffect, useState } from "react";
import DataTable from "./components/DataTable";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/environmental-data/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <h1 className="text-2xl font-bold text-center my-4">Environmental Data</h1>
      <DataTable data={data} />
    </div>
  );
}

export default App;
