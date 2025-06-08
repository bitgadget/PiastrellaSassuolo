import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import React from 'react';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const stockData = [
  { categoria: 'Marmo', stock: 1350 },
  { categoria: 'Pietra', stock: 1500 },
  { categoria: 'Cemento', stock: 2250 },
  { categoria: 'Legno', stock: 1000 },
];

// Nuovi colori flat e moderni
const barColors = [
  '#6366f1', // blu-violet
  '#fbbf24', // gold
  '#34d399', // green
  '#f87171', // red
];

const options = {
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
      padding: 12,
      callbacks: {
        label: ctx => ` ${ctx.parsed.y} mq`,
      },
      displayColors: false,
      caretSize: 7,
      cornerRadius: 8,
    },
    title: { display: false },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'mq',
        color: '#64748b',
        font: { size: 14, weight: 700 },
        padding: { top: 8, bottom: 0 }
      },
      ticks: { stepSize: 500, color: '#64748b', font: { size: 12, weight: 600 } },
      grid: { color: '#e5e7eb', borderDash: [2, 4] },
    },
    x: {
      title: { display: false },
      ticks: {
        color: '#334155',
        font: { size: 13, weight: 700 },
        autoSkip: false,
        maxRotation: 0,
        minRotation: 0,
        padding: 8,
      },
      grid: { display: false },
    },
  },
  animation: {
    duration: 900,
    easing: 'easeOutCubic',
  },
  layout: {
    padding: { left: 30, right: 10, top: 10, bottom: 20 },
  },
  elements: {
    bar: {
      borderRadius: 12,
      borderSkipped: false,
    },
  },
};

export default function StockChart() {
  const chartRef = React.useRef(null);

  const data = React.useMemo(() => ({
    labels: stockData.map(d => d.categoria),
    datasets: [
      {
        label: 'Stock (mq)',
        data: stockData.map(d => d.stock),
        backgroundColor: barColors,
        borderWidth: 0,
        maxBarThickness: 44,
        barPercentage: 0.7,
        categoryPercentage: 0.6,
      },
    ],
  }), []);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-neutral-200 p-0 flex flex-col items-center">
      <div className="w-full flex flex-col items-center px-2 py-4 sm:px-6 sm:py-6">
        <h3 className="text-xl font-extrabold mb-1 text-center text-neutral-900 tracking-tight">Stock per categoria</h3>
        <p className="text-center text-neutral-500 mb-4 text-xs sm:text-sm">Dati aggiornati in tempo reale</p>
        <div
          className="relative w-full flex justify-center items-center"
          style={{
            minHeight: 140,
            height: '32vw',
            maxHeight: 180
          }}
        >
          <div className="w-full" style={{ minWidth: 220, maxWidth: 400 }}>
            <Bar ref={chartRef} data={data} options={options} />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs sm:text-base text-neutral-700 font-medium">
          {stockData.map((cat, i) => (
            <div key={cat.categoria} className="flex items-center gap-2">
              <span
                style={{
                  display: 'inline-block',
                  width: 14,
                  height: 14,
                  borderRadius: 4,
                  background: barColors[i],
                  boxShadow: '0 1px 4px 0 #0001',
                }}
              />
              <span className="whitespace-nowrap">{cat.categoria}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}