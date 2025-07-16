import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { animate } from 'animejs';
import { Bar, Line } from 'react-chartjs-2';
import { Chart, BarElement, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

gsap.registerPlugin(SplitText);

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
      <h1 className="subtitle">A</h1>
      <h1 className="subtitle">T</h1>
      <h1 className="subtitle">T</h1>
      <h1 className="subtitle">E</h1>
      <h1 className="subtitle">N</h1>
      <h1 className="subtitle">U</h1>
      <h1 className="subtitle">A</h1>
      <h1 className="subtitle">T</h1>
      <h1 className="subtitle">I</h1>
      <h1 className="subtitle">O</h1>
      <h1 className="subtitle">N</h1>
      <div style={{ width: '15px' }}></div>
      <h1 className="subtitle">D</h1>
      <h1 className="subtitle">U</h1>
      <div style={{ width: '15px' }}></div>
      <h1 className="subtitle">C</h1>
      <h1 className="subtitle">H</h1>
      <h1 className="subtitle">A</h1>
      <h1 className="subtitle">N</h1>
      <h1 className="subtitle">G</h1>
      <h1 className="subtitle">E</h1>
      <h1 className="subtitle">M</h1>
      <h1 className="subtitle">E</h1>
      <h1 className="subtitle">N</h1>
      <h1 className="subtitle">T</h1>
      <div style={{ width: '15px' }}></div>
      <h1 className="subtitle">C</h1>
      <h1 className="subtitle">L</h1>
      <h1 className="subtitle">I</h1>
      <h1 className="subtitle">M</h1>
      <h1 className="subtitle">A</h1>
      <h1 className="subtitle">T</h1>
      <h1 className="subtitle">I</h1>
      <h1 className="subtitle">Q</h1>
      <h1 className="subtitle">U</h1>
      <h1 className="subtitle">E</h1>
    </section>
    <div className="intro"> 
      <p className="text-intro">
        Le changement climatique représente l’un des plus grands défis du XXIe siècle. L’augmentation des gaz à effet de serre, principalement émis par les activités humaines, entraîne un réchauffement global aux conséquences multiples : phénomènes météorologiques extrêmes, élévation du niveau des océans, fonte des glaces, et pertes de biodiversité. Comprendre les sources d’émissions (CO₂, CH₄, N₂O...) et leurs impacts permet d’agir plus efficacement. Cette section met en lumière les principales sources d’émissions et les effets déjà visibles sur notre planète.otection des océans est donc une priorité majeure pour assurer la stabilité climatique et préserver la vie marine.
      </p>
    </div>
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>

      <section className="graph-section">
        <h3>Principales sources d'émissions de gaz à effet de serre</h3>
        <p>
          Ce graphique montre les principales sources d'émissions de gaz à effet de serre.
        </p>
        <Bar data={barData} options={options} />
      </section>

      <section className="graph-section">
        <h3>Conséquence 1 : Augmentation des températures terrestres</h3>
        <p>
          L’un des effets les plus immédiats de l’augmentation des gaz à effet de serre est le réchauffement de la température moyenne à la surface de la Terre. En piégeant la chaleur dans l’atmosphère, les GES perturbent l’équilibre climatique naturel. Cette élévation des températures entraîne des vagues de chaleur plus fréquentes et intenses, modifie les régimes de précipitation, accélère la fonte des glaciers et perturbe les écosystèmes. Le dérèglement climatique qui en découle affecte directement les populations humaines, l’agriculture et la disponibilité en eau.
        </p>
        <br/>
        <p style={{ fontWeight: 'bold' }}>
          Ce graphique montre l'évolution de l'écart des températures terrestres au fil des ans par rapport à la moyenne du 20ème siècle.
        </p>
        <Line data={tempData} options={options} />
      </section>

      <section className="graph-section">
        <h3>Conséquence 2 : Montée du niveau des océans</h3>
        <p>
          Le réchauffement climatique provoqué par les gaz à effet de serre entraîne également une élévation progressive du niveau des océans. Deux phénomènes en sont principalement responsables : la fonte des glaciers et des calottes polaires, ainsi que la dilatation thermique de l’eau de mer (l’eau chaude prend plus de volume). Cette montée des eaux menace les zones côtières, les petits États insulaires, les terres agricoles basses et les grandes villes littorales. Elle accentue aussi les risques d’érosion, d’inondations et de déplacement de populations.
        </p>
        <br/>
        <p style={{ fontWeight: 'bold' }}>
          Ce graphique montre l'évolution du niveau des océans depuis 1993.
        </p>
        <Line data={seaData} options={options} />
      </section>
    </div>
    </>
  );
}
