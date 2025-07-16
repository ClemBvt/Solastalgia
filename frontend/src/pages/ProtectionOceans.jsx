import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { animate } from 'animejs';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

gsap.registerPlugin(SplitText);

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
        <h1 className="subtitle">O</h1>
        <h1 className="subtitle">C</h1>
        <h1 className="subtitle">E</h1>
        <h1 className="subtitle">A</h1>
        <h1 className="subtitle">N</h1>
        <h1 className="subtitle">S</h1>
      </section>
      <div className="intro"> 
        <p className="text-intro">
          Les océans, qui couvrent plus de 70 % de la surface de la Terre, jouent un rôle fondamental dans la régulation du climat et la préservation de la biodiversité. Pourtant, ils sont aujourd’hui menacés par le réchauffement climatique, la pollution plastique, la surpêche et l’acidification. L’augmentation des températures océaniques perturbe les écosystèmes marins et accélère la fonte des glaces, entraînant une élévation du niveau des mers. La protection des océans est donc une priorité majeure pour assurer la stabilité climatique et préserver la vie marine.
        </p>
      </div>
      <div className="graph-section">
        <h3>Évolution des températures océaniques depuis 1880</h3>
        <p>Voici l'évolution de l'écart des températures océaniques (en °C) depuis 1880 par rapport à la moyenne du XXème siècle :</p>
        <Line data={chartData} options={options} />
      </div>
    </>
  );
}
