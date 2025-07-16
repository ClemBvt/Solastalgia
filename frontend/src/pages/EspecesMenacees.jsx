import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { animate } from 'animejs';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title } from 'chart.js';

gsap.registerPlugin(SplitText);

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

  animate('.subtitle', {
    y: [
      { to: '-2.75rem', ease: 'outExpo', duration: 600 },
      { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
    ],
    delay: (_, i) => i * 50,
    ease: 'inOutCirc',
    loopDelay: 1000,
    loop: true
  });

  document.fonts.ready.then(() => {
    gsap.set(".text-intro", { opacity: 1 });

    let split;
    SplitText.create(".text-intro", {
      type: "words,lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        split = gsap.from(self.lines, {
          duration: 0.6,
          yPercent: 100,
          opacity: 0,
          stagger: 0.1,
          ease: "expo.out",
        });
        return split;
      }
    });
  });

  return (
    <>
    <section className="animation-section subpage">
      <h1 className="subtitle">P</h1>
      <h1 className="subtitle">R</h1>
      <h1 className="subtitle">O</h1>
      <h1 className="subtitle">T</h1>
      <h1 className="subtitle">E</h1>
      <h1 className="subtitle">C</h1>
      <h1 className="subtitle">T</h1>
      <h1 className="subtitle">I</h1>
      <h1 className="subtitle">O</h1>
      <h1 className="subtitle">N</h1>
      <div style={{ width: '15px' }}></div>
      <h1 className="subtitle">D</h1>
      <h1 className="subtitle">E</h1>
      <h1 className="subtitle">S</h1>
      <div style={{ width: '15px' }}></div>
      <h1 className="subtitle">E</h1>
      <h1 className="subtitle">S</h1>
      <h1 className="subtitle">P</h1>
      <h1 className="subtitle">E</h1>
      <h1 className="subtitle">C</h1>
      <h1 className="subtitle">E</h1>
      <h1 className="subtitle">S</h1>
      <div style={{ width: '15px' }}></div>
      <h1 className="subtitle">M</h1>
      <h1 className="subtitle">E</h1>
      <h1 className="subtitle">N</h1>
      <h1 className="subtitle">A</h1>
      <h1 className="subtitle">C</h1>
      <h1 className="subtitle">E</h1>
      <h1 className="subtitle">E</h1>
      <h1 className="subtitle">S</h1>
    </section>

    <div className="intro"> 
      <p className="text-intro">
        La biodiversité mondiale est en recul à un rythme alarmant. De nombreuses espèces animales et végétales sont aujourd’hui menacées d’extinction, en grande partie à cause des activités humaines : déforestation, pollution, braconnage ou encore changement climatique. Chaque espèce joue un rôle essentiel dans l’équilibre des écosystèmes. Cette page met en lumière les espèces les plus en danger et les conséquences de leur disparition, afin de sensibiliser à l’urgence de leur protection.
      </p>
    </div>
    <div style={{ maxWidth: '1000px', margin: '7rem auto', padding: '2rem' }}>
      <section className="graph-section">
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

      <section className="graph-section">
        <h3>Nombre d’espèces animales restantes parmi les plus menacées</h3>
        <Bar data={chartData} options={chartOptions} />
      </section>
    </div>
    </>
  );
}
