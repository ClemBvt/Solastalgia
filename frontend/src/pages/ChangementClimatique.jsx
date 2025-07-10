import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart, BarElement, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

Chart.register(BarElement, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function ChangementClimatique() {
  const [emissions, setEmissions] = useState([]);
  const [temperatures, setTemperatures] = useState([]);
  const [oceans, setOceans] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/sources-emissions-ges/')
      .then(res => res.json())
      .then(setEmissions);

    fetch('http://localhost:8000/api/temperatures-terrestres/')
      .then(res => res.json())
      .then(setTemperatures);

    fetch('http://localhost:8000/api/niveaux-oceans/')
      .then(res => res.json())
      .then(setOceans);
  }, []);

  // 📊 Graphe 1 : Sources d'émissions
  const barData = {
    labels: emissions.map(e => e.source),
    datasets: [
      {
        label: 'Total GES (Mt CO2 éq)',
        data: emissions.map(e => e.total),
        backgroundColor: '#ef6c00'
      }
    ]
  };

  // 🌡 Graphe 2 : Températures terrestres
  const tempData = {
    labels: temperatures.map(t => t.annee),
    datasets: [
      {
        label: 'Température terrestre (°C)',
        data: temperatures.map(t => t.ecart),
        fill: false,
        borderColor: '#c62828',
        tension: 0.3
      }
    ]
  };

  // 🌊 Graphe 3 : Niveau des océans
  const seaData = {
    labels: oceans.map(o => o.annee),
    datasets: [
      {
        label: 'Niveau des océans (cm)',
        data: oceans.map(o => o.niveau),
        fill: false,
        borderColor: '#1565c0',
        tension: 0.3
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: { 
      datalabels: { 
        display : false
      } 
    } 
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      <h2>Atténuation du changement climatique</h2>

      <section>
        <h3>Sources d'émissions de gaz à effet de serre</h3>
        <p>
          Ce graphique montre les principales sources d'émissions de gaz à effet de serre.
        </p>
        <Bar data={barData} options={options} />
      </section>

      <section style={{ marginTop: '4rem' }}>
          <h3>Conséquence 1 : Températures terrestres</h3>
          <p>
          Ce graphique montre l'évolution de l'écart des températures terrestres au fil des ans par rapport à la moyenne du 20ème siècle.
        </p>
        <Line data={tempData} options={options} />
      </section>

      <section style={{ marginTop: '4rem' }}>
        <h3>Conséquence 2 : Montée du niveau des océans</h3>
        <p>
          Ce graphique montre l'évolution du niveau des océans depuis 1993.
        </p>
        <Line data={seaData} options={options} />
      </section>
    </div>
  );
}
