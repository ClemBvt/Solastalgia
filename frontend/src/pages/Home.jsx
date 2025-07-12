import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animate } from 'animejs';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import '../styles/Home.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';

gsap.registerPlugin(SplitText, ScrollTrigger);

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
          '#184725',
          '#3D9D56',
          '#969696',
          '#9CC692',
          '#000000',
          '#727171',
          '#465C30',
          '#204C18',
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
    // // Property specific parameters
    // rotate: {
    //   from: '-1turn',
    //   delay: 1000,
    // },
    delay: (_, i) => i * 50, // Function based value
    ease: 'inOutCirc',
    loopDelay: 1000,
    loop: true
  });


  gsap.registerPlugin(SplitText, ScrollTrigger);

console.clear();

gsap.set(".split", { opacity: 1 });

document.fonts.ready.then(() => {
  let containers = gsap.utils.toArray(".container");

  containers.forEach((container) => {
    let text = container.querySelector(".split");
    let animation;

    SplitText.create(text, {
      type: "words,lines",
      mask: "lines",
      linesClass: "line",
      autoSplit: true,
      onSplit: (instance) => {
        console.log("split")
        return gsap.from(instance.lines, {
          yPercent: 80,
          stagger: 0.1,
          scrollTrigger: {
            trigger: container,
            //markers: true,
            scrub: true,
            start: "clamp(top center)",
            end: "clamp(bottom center)"
          }
        });
      }
    });
  });
});



  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="title">S</h1>
        <h1 className="title">O</h1>
        <h1 className="title">L</h1>
        <h1 className="title">A</h1>
        <h1 className="title">S</h1>
        <h1 className="title">T</h1>
        <h1 className="title">A</h1>
        <h1 className="title">L</h1>
        <h1 className="title">G</h1>
        <h1 className="title">I</h1>
        <h1 className="title">A</h1>
      </section>

      <div class="container">
        <h2 class="split">Solastalgia est une plateforme web interactive qui vise à rendre les enjeux environnementaux accessibles et compréhensibles pour tous.
        <br/>
        <br/>
        Grâce à des données visuelles, des indicateurs clés et des graphiques explicites, nous permettons au plus grand public de comprendre ses préoccupations environnementales.
        </h2>
      </div>

      <section className="chart-section">
        <h2>Principales sources d'écoanxiété en France</h2>
        {ecoData.length > 0 ? (
          <div style={{ maxWidth: '700px', margin: '0 auto'}}>
            <Pie data={chartData} options={options}/>
          </div>
        ) : (
          <p>Chargement des données...</p>
        )}
      </section>

      <section className="text-section">
        <p>
          Pour rappel, l'accord de Paris signé par 195 pays en 2015 vise à attenuer et s'adapter aux effets du changement climatique. 
          <br/>
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
