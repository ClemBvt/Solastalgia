import React, { useEffect, useState } from 'react';
import { animate } from 'animejs';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import '../styles/Home.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';


Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function Home() {
  const [ecoData, setEcoData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/preoccupations/')
      .then(res => res.json())
      .then(data => setEcoData(data))
      .catch(err => console.error(err));
  }, []);

  const chartData = {
    labels: ecoData.map(item => item.nom),
    datasets: [
      {
        data: ecoData.map(item => item.pourcentage_repondants),
        backgroundColor: [
          '#4caf50',
          '#2196f3',
          '#ff9800',
          '#f44336',
          '#9c27b0',
          '#00bcd4',
          '#ffc107',
          '#8bc34a',
        ],
        borderWidth: 1,
        hoverOffset: 50
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'left',
        align: 'center',
        labels: {
          boxWidth: 20,
          padding: 10
        }
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw * 100;
            return `${Math.round(value)}%`;
          }
        }
      },
      datalabels: {
        color: '#fff',
        font: {
          weight: 'bold'
        },
        formatter: value => `${Math.round(value * 100)}%`
      }
    }
  };

  animate('.title', {
    // Property keyframes
    y: [
      { to: '-2.75rem', ease: 'outExpo', duration: 600 },
      { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
    ],
    // Property specific parameters
    rotate: {
      from: '-1turn',
      delay: 0
    },
    delay: (_, i) => i * 50, // Function based value
    ease: 'inOutCirc',
    loopDelay: 1000,
    loop: true
  });

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="title">SOLASTALGIA</h1>
      </section>

      <section className="intro-section">
        <p>
          Solastalgia est une plateforme web interactive qui vise à rendre les enjeux environnementaux
          accessibles et compréhensibles pour tous.
        </p>
        <p>
          Grâce à des données visuelles, des indicateurs clés et des graphiques explicites, nous proposons
          un aperçu des grands bouleversements écologiques et leur impact sur notre société.
        </p>
      </section>

      <section className="chart-section">
        <h2>Sources d'écoanxiété (%)</h2>
        {ecoData.length > 0 ? (
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <Pie data={chartData} options={options} />
          </div>
        ) : (
          <p>Chargement des données...</p>
        )}
      </section>

      <section className="intro-section">
        <p>
          Pour rappel, l'accord de Paris ratifié par 195 pays en 2015 vise à attenuer et s'adapter aux effets du changement climatique. 
          Les objectifs fixés sont :
        </p>
        <br/>
        <ul>
          <li>Limiter le réchauffement climatique à 1,5 °C par rapport aux niveaux préindustriels</li>
          <li>Renforcer la résilience et réduire la vulnérabilité aux changements climatiques</li>
          <li>Mobiliser des financements pour diminuer les emissions de gaz à effet de serre</li>
        </ul>
      </section>
    </div>
  );
}
