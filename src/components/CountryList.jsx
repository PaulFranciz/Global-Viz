import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { saveAs } from 'file-saver';
import { debounce } from 'lodash';
import CountryChart from './CountryChart';
import globalviz from '/global viz.jpeg'
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
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(12);
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

  useEffect(() => {
    console.log('Search term updated:', searchTerm);
  }, [searchTerm]);

  const debouncedSetSearchTerm = debounce((value) => {
    setSearchTerm(value);
  }, 300);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (regionFilter === '' || country.region === regionFilter) &&
    (subregionFilter === '' || country.subregion === subregionFilter) &&
    (populationMin === '' || country.population >= Number(populationMin)) &&
    (populationMax === '' || country.population <= Number(populationMax)) &&
    (languageFilter === '' || country.languages.some(lang => lang.name.toLowerCase() === languageFilter.toLowerCase())) &&
    (timezoneFilter === '' || country.timezones.includes(timezoneFilter))
  );

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry);
  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const uniqueRegions = [...new Set(countries.map(country => country.region))];
  const uniqueSubregions = [...new Set(countries.map(country => country.subregion))];
  const uniqueLanguages = [...new Set(countries.flatMap(country => country.languages.map(lang => lang.name)))];
  const uniqueTimezones = [...new Set(countries.flatMap(country => country.timezones))];

  const exportData = (format) => {
    let dataStr;
    if (format === 'json') {
      dataStr = JSON.stringify(filteredCountries);
    } else if (format === 'csv') {
      const headers = ['name', 'region', 'subregion', 'population', 'languages', 'timezones', 'flag'];
      const csvContent = [
        headers.join(','),
        ...filteredCountries.map(country => [
          country.name,
          country.region,
          country.subregion,
          country.population,
          country.languages.map(lang => lang.name).join(';'),
          country.timezones.join(';'),
          country.flag
        ].join(','))
      ].join('\n');
      dataStr = csvContent;
    }
    const blob = new Blob([dataStr], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `countries.${format}`);
  };

  const renderPaginationButtons = () => {
    const pageNumbers = [];
    const ellipsis = <span key="ellipsis" className="ellipsis">...</span>;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => paginate(i)}
            className={currentPage === i ? 'active' : ''}
          >
            {i}
          </button>
        );
      }
    } else {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => paginate(1)}
          className={currentPage === 1 ? 'active' : ''}
        >
          1
        </button>
      );

      if (currentPage > 3) {
        pageNumbers.push(ellipsis);
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => paginate(i)}
            className={currentPage === i ? 'active' : ''}
          >
            {i}
          </button>
        );
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push(ellipsis);
      }

      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => paginate(totalPages)}
          className={currentPage === totalPages ? 'active' : ''}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="country-list">
      <div className="header">
        <img src={globalviz} alt="globalviz" className="globalbiz" />
        <h1 className='heading'>{t('Global viz')}</h1>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder={t('search')}
          value={searchTerm}
          onInput={(e) => debouncedSetSearchTerm(e.target.value)}
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
        <button className='btn' onClick={() => exportData('json')}>{t('export')} JSON</button>
        <button className='btn' onClick={() => exportData('csv')}>{t('export')} CSV</button>
      </div>
      <CountryChart countries={filteredCountries} />
      <div className="country-grid" key={searchTerm}>
        {currentCountries.map((country) => (
          <div key={country.name} className="country-card">
            <div className="country-header">
              <img src={country.flag} alt={`Flag of ${country.name}`} className="country-flag" />
              <h2>{country.name}</h2>
            </div>
            <p><strong>{t('region')}:</strong> {country.region}</p>
            <p><strong>{t('subregion')}:</strong> {country.subregion}</p>
            <p><strong>{t('population')}:</strong> {country.population.toLocaleString()}</p>
            <p><strong>{t('languages')}:</strong> {country.languages.map(lang => lang.name).join(', ')}</p>
            <p><strong>{t('timezones')}:</strong> {country.timezones.join(', ')}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-nav"
        >
          &laquo; {t('prev')}
        </button>
        {renderPaginationButtons()}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-nav"
        >
          {t('next')} &raquo;
        </button>
      </div>
    </div>
  );
}

export default CountryList;