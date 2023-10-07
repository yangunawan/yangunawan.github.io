import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { create, all, random } from 'mathjs';
import { Chart, LinearScale, PointElement, LineElement } from 'chart.js';

Chart.register(LinearScale, PointElement, LineElement);

function GraphDisplay({ variables, equation, isMulipleOralDosing }) {
  const math = create(all)
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const evaluateEquation = (eq, t) => {
      try {
        const scope = {
          ...variables,
          t: parseFloat(t),
        };
        const compiledExpression = math.compile(eq);
        return compiledExpression.evaluate(scope);
      } catch (error) {
        console.error('Error evaluating equation:', error);
        return NaN;
      }
    };
    let tValues = [];

    if (isMulipleOralDosing) {
      tValues = Array.from({ length: (variables.duration/0.24) }, (_, i) => i * 0.24);
    }
    else {
      tValues = Array.from({ length: 100 }, (_, i) => i * 0.24);
    }

    let datasets = [];

    if (typeof equation === 'string') {
      console.log(equation)
      const yValues = tValues.map((time) => evaluateEquation(equation, time));

      datasets.push({
        label: 'Plasma Concentration (mg/L)',
        data: yValues,
        fill: false,
        borderColor: '#e54726',
      });

    }
    if (typeof equation === 'function') {
      const yValues = tValues.map((time) => evaluateEquation(equation(variables, time), time));
      datasets.push({
        label: 'Plasma Concentration (mg/L)',
        data: yValues,
        fill: false,
        borderColor: '#e54726',
      });

    }
    if (Array.isArray(equation)) {
      // Loop through each equation in the array
      
      equation.forEach((eq, index)=> {
        console.log(eq)
        const yValues = tValues.map((time) => evaluateEquation(eq, time));
        let randomColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`;
        if (index == 0){
          randomColor =  `rgba(0,0,255)`
        }
        if (index == 1) {
          randomColor = `rgba(0,255,0)`;
        }
        if (index == 2){
          randomColor = `rgba(255,0,0)`;
        }

        datasets.push({
          label: eq.label,
          data: yValues,
          fill: false,
          borderColor: randomColor,
        });
      });
    }
    setChartData({
      labels: tValues,
      datasets: datasets,
    });
  }, [variables, equation]);


  const chartOptions = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        ticks: {
          beginAtZero: true,
        },
        title: {
          display: true,
          text: 'Time (h)', // X-axis label
        },
      },

      y: {
        type: 'linear',
        position: 'left',
        ticks: {
          beginAtZero: true,
        },
        title: {
          display: true,
          text: 'Plasma Concentration (mg/L)',
        },
      },
    },
  };

  return (
    <div className='col-9'>

      <h2>Plasma Concentration Over Time</h2>
      {chartData && <Line data={chartData} options={chartOptions} />}
    </div>
  );
}

export default GraphDisplay;