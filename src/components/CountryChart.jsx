import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useTranslation } from 'react-i18next';
import '../components/CountryCharts.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function CountryChart({ countries }) {
  const { t } = useTranslation();
  const [chartType, setChartType] = useState('population');

  const getChartData = () => {
    let sortedCountries = [...countries];
    let dataKey, label, title;

    switch (chartType) {
      case 'population':
        sortedCountries.sort((a, b) => b.population - a.population);
        dataKey = 'population';
        label = t('population');
        title = t('top10CountriesByPopulation');
        break;
      case 'area':
        sortedCountries.sort((a, b) => b.area - a.area);
        dataKey = 'area';
        label = t('area');
        title = t('top10CountriesByArea');
        break;
      case 'density':
        sortedCountries.forEach(c => c.density = c.population / c.area);
        sortedCountries.sort((a, b) => b.density - a.density);
        dataKey = 'density';
        label = t('populationDensity');
        title = t('top10CountriesByDensity');
        break;
      default:
        dataKey = 'population';
        label = t('population');
        title = t('top10CountriesByPopulation');
    }

    const topCountries = sortedCountries.slice(0, 10);

    return {
      labels: topCountries.map(country => country.name),
      datasets: [
        {
          label: label,
          data: topCountries.map(country => country[dataKey]),
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
      ],
      title: title,
    };
  };

  const chartData = getChartData();

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: chartData.title },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: chartData.datasets[0].label,
        },
      },
      x: {
        title: {
          display: true,
          text: t('countries'),
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <div className="chart-controls">
        <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
          <option value="population">{t('population')}</option>
          <option value="area">{t('area')}</option>
          <option value="density">{t('populationDensity')}</option>
        </select>
      </div>
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default CountryChart;