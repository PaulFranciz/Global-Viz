import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { saveAs } from 'file-saver';
import CountryChart from './CountryChart';
import './CountryList.css';

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [subregionFilter, setSubregionFilter] = useState('');
  const [populationMin, setPopulationMin] = useState('');
  const [populationMax, setPopulationMax] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [timezoneFilter, setTimezoneFilter] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    }
    fetchCountries();
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (regionFilter === '' || country.region === regionFilter) &&
    (subregionFilter === '' || country.subregion === subregionFilter) &&
    (populationMin === '' || country.population >= Number(populationMin)) &&
    (populationMax === '' || country.population <= Number(populationMax)) &&
    (languageFilter === '' || country.languages.some(lang => lang.name.toLowerCase() === languageFilter.toLowerCase())) &&
    (timezoneFilter === '' || country.timezones.includes(timezoneFilter))
  );

  const uniqueRegions = [...new Set(countries.map(country => country.region))];
  const uniqueSubregions = [...new Set(countries.map(country => country.subregion))];
  const uniqueLanguages = [...new Set(countries.flatMap(country => country.languages.map(lang => lang.name)))];
  const uniqueTimezones = [...new Set(countries.flatMap(country => country.timezones))];

  const exportData = (format) => {
    let dataStr;
    if (format === 'json') {
      dataStr = JSON.stringify(filteredCountries);
    } else if (format === 'csv') {
      const headers = ['name', 'region', 'subregion', 'population', 'languages', 'timezones'];
      const csvContent = [
        headers.join(','),
        ...filteredCountries.map(country => [
          country.name,
          country.region,
          country.subregion,
          country.population,
          country.languages.map(lang => lang.name).join(';'),
          country.timezones.join(';')
        ].join(','))
      ].join('\n');
      dataStr = csvContent;
    }
    const blob = new Blob([dataStr], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `countries.${format}`);
  };

  return (
    <div className="country-list">
      <h1>{t('countryList')}</h1>
      <div className="filters">
        <input
          type="text"
          placeholder={t('search')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={regionFilter} onChange={(e) => setRegionFilter(e.target.value)}>
          <option value="">{t('allRegions')}</option>
          {uniqueRegions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
        <select value={subregionFilter} onChange={(e) => setSubregionFilter(e.target.value)}>
          <option value="">{t('allSubregions')}</option>
          {uniqueSubregions.map(subregion => (
            <option key={subregion} value={subregion}>{subregion}</option>
          ))}
        </select>
        <div className="population-filter">
          <input
            type="number"
            placeholder={t('minPopulation')}
            value={populationMin}
            onChange={(e) => setPopulationMin(e.target.value)}
          />
          <input
            type="number"
            placeholder={t('maxPopulation')}
            value={populationMax}
            onChange={(e) => setPopulationMax(e.target.value)}
          />
        </div>
        <select value={languageFilter} onChange={(e) => setLanguageFilter(e.target.value)}>
          <option value="">{t('allLanguages')}</option>
          {uniqueLanguages.map(language => (
            <option key={language} value={language}>{language}</option>
          ))}
        </select>
        <select value={timezoneFilter} onChange={(e) => setTimezoneFilter(e.target.value)}>
          <option value="">{t('allTimezones')}</option>
          {uniqueTimezones.map(timezone => (
            <option key={timezone} value={timezone}>{timezone}</option>
          ))}
        </select>
      </div>
      <div className="export-buttons">
        <button onClick={() => exportData('json')}>{t('export')} JSON</button>
        <button onClick={() => exportData('csv')}>{t('export')} CSV</button>
      </div>
      <CountryChart countries={filteredCountries} />
      <ul className="country-items">
        {filteredCountries.map((country) => (
          <li key={country.name} className="country-item">
            <h2>{country.name}</h2>
            <p>{t('region')}: {country.region}</p>
            <p>{t('subregion')}: {country.subregion}</p>
            <p>{t('population')}: {country.population.toLocaleString()}</p>
            <p>{t('languages')}: {country.languages.map(lang => lang.name).join(', ')}</p>
            <p>{t('timezones')}: {country.timezones.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;