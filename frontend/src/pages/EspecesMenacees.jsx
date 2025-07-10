import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

export default function EspecesMenacees() {
  const [especes, setEspeces] = useState([]);
  const [animaux, setAnimaux] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/especes-menacees/')
      .then(res => res.json())
      .then(setEspeces);
    
    fetch('http://localhost:8000/api/nombres-animaux-menaces/')
      .then(res => res.json())
      .then(setAnimaux);
  }, []);

  const chartData = {
    labels: animaux.map(a => a.nom),
    datasets: [
      {
        label: 'Nombre d’espèces restantes',
        data: animaux.map(a => a.nombre_restant),
        backgroundColor: '#66bb6a'
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Nombre d’espèces animales restantes parmi les plus menacées'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Nombre d’espèces'
        }
      }
    }
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      <h2>Espèces menacées</h2>

      <section>
        <h3>Répartition des espèces menacées</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr style={{ background: '#f0f0f0' }}>
              <th style={{ padding: '0.5rem' }}>Espèce</th>
              <th>Part (%)</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {especes.map((e, i) => (
              <tr key={i}>
                <td style={{ padding: '0.5rem' }}>{e.nom}</td>
                <td>{Math.round(e.part_menacee * 100)}%</td>
                <td>{e.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={{ marginTop: '4rem' }}>
        <Bar data={chartData} options={chartOptions} />
      </section>
    </div>
  );
}
