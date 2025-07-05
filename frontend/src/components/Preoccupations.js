import React, { useEffect, useState } from "react";

function Preoccupations() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/preoccupations/")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération des données :", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
    <div>
      <h1>Préoccupations environnementales</h1>
      <table>
        <thead>
          <tr>
            <th>Problème</th>
            <th>Pourcentage</th>
            <th>Répondants</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.nom}</td>
              <td>{(item.pourcentage_repondants * 100).toFixed(1)}%</td>
              <td>{item.nombre_repondants}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Preoccupations;
