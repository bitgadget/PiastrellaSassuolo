import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';
import React, { useRef } from 'react';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip);

const stockData = [
  { categoria: 'Marmo', stock: 2800 },
  { categoria: 'Pietra', stock: 4120 },
  { categoria: 'Cemento', stock: 6200 },
  { categoria: 'Legno', stock: 1920 },
];

const barColor = '#6366f1';

function lighten(hex, percent) {
  // Semplice funzione per schiarire un colore HEX
  const num = parseInt(hex.replace('#', ''), 16);
  let r = (num >> 16) + Math.round(255 * percent);
  let g = ((num >> 8) & 0x00FF) + Math.round(255 * percent);
  let b = (num & 0x0000FF) + Math.round(255 * percent);
  r = r > 255 ? 255 : r;
  g = g > 255 ? 255 : g;
  b = b > 255 ? 255 : b;
  return `rgb(${r},${g},${b})`;
}

export default function StockChart() {
  const chartRef = useRef();

  const data = {
    labels: stockData.map(d => d.categoria),
    datasets: [
      {
        label: 'Stock (mq)',
        data: stockData.map(d => d.stock),
        borderRadius: 18,
        borderSkipped: false,
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          if (!chartArea) return barColor;
          const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
          gradient.addColorStop(0, barColor);
          gradient.addColorStop(1, lighten(barColor, 0.4));
          return gradient;
        },
        hoverBackgroundColor: lighten(barColor, 0.2),
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#fff',
        titleColor: '#18181b',
        bodyColor: '#18181b',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        padding: 10,
        displayColors: false,
        caretSize: 7,
        cornerRadius: 8,
        enabled: true,
        callbacks: {
          label: ctx => ` ${ctx.parsed.x} mq`,
        },
      },
      datalabels: false,
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: { color: '#64748b', font: { size: 12, weight: 600 } },
        grid: { color: '#e5e7eb33', borderDash: [2, 4] },
      },
      y: {
        ticks: { color: '#334155', font: { size: 13, weight: 700 } },
        grid: { display: false },
      },
    },
    animation: {
      duration: 1200,
      easing: 'easeOutQuart',
    },
    onHover: (event, chartElement) => {
      event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
    },
  };

  // Visualizza il valore direttamente sulla barra (senza plugin)
  const renderValueOnBar = (chart) => {
    const { ctx, chartArea, data: chartData } = chart;
    ctx.save();
    chartData.datasets[0].data.forEach((value, i) => {
      const meta = chart.getDatasetMeta(0).data[i];
      if (meta) {
        ctx.font = 'bold 13px sans-serif';
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${value} mq`, meta.x - 10, meta.y);
      }
    });
    ctx.restore();
  };

  React.useEffect(() => {
    const chart = chartRef.current;
    if (chart && chart.chart) {
      chart.chart.options.plugins.afterDraw = renderValueOnBar;
      chart.chart.update();
    }
  }, []);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-neutral-200 p-0 flex flex-col items-center">
      <div className="w-full flex flex-col items-center px-2 py-4 sm:px-6 sm:py-6">
        <h3 className="text-xl font-extrabold mb-1 text-center text-neutral-900 tracking-tight">Stock per categoria</h3>
        <p className="text-center text-neutral-500 mb-4 text-xs sm:text-sm">Dati aggiornati in tempo reale</p>
        <div
          className="relative w-full flex justify-center items-center"
          style={{
            minHeight: 180,
            height: '32vw',
            maxHeight: 220
          }}
        >
          <div className="w-full" style={{ minWidth: 220, maxWidth: 400 }}>
            <Bar ref={chartRef} data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}