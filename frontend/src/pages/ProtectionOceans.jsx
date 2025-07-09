import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

Chart.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function ProtectionOceans() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/temperatures-oceans/')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  const chartData = {
    labels: data.map(item => item.annee),
    datasets: [
      {
        label: 'Ecart de température (°C)',
        data: data.map(item => item.ecart),
        fill: false,
        borderColor: '#0288d1',
        tension: 0.3
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Évolution des températures océaniques depuis 1880'
      },
      datalabels: {
        display: false,
      }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Écart de température (°C)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Année'
        }
      }
    },
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      <h2>Protection des océans</h2>
      <p>Voici l'évolution de l'écart des températures océaniques (en °C) depuis 1880 par rapport à la moyenne du XXème siècle :</p>
      <Line data={chartData} options={options} />
    </div>
  );
}
