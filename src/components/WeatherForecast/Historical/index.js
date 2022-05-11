import React from 'react';
import WeatherCard from '../../reusables/weatherCards';
import useHistoricalForecast from './useHistoricalForecast';
const HistoricalWeather = ({ position }) => {
  const { data, loading } = useHistoricalForecast({ position });

  return (
    <div className='row'>
      {data.map((item, index) => (
        <div key={index} className='col-4'>
          <WeatherCard loading={loading} data={item} isHistorical/>
        </div>
      ))}
    </div>
  );
};
export default HistoricalWeather;
