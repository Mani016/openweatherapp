import React from 'react';
import GoogleMaps from './GoogleMap';
import useWeatherManagement from './useWeatherManagement';
import Daily from './Daily';
import Historical from './Historical';
import { WEATHER_TABS } from '../../constants';
const WeatherForecast = () => {
  const { activeTab, handleTab, position } = useWeatherManagement();
  return (
    <React.Fragment>
      <div className='container mt-5 border p-5'>
        <ul className='nav nav-pills nav-fill border'>
          {WEATHER_TABS.map((tab, index) => (
            <li className='nav-item' key={index}>
              <div
                className={`nav-link ${
                  tab.value === activeTab ? 'active' : ''
                }`}
                aria-current='page'
                onClick={() => handleTab(tab.value)}
              >
                {tab.name}
              </div>
            </li>
          ))}
        </ul>
        {activeTab === 'daily-forecast' && <Daily position={position} />}
        {activeTab === 'historical-weather' && (
          <Historical position={position} />
        )}
        {activeTab === 'google-maps' && <GoogleMaps position={position}/>}
      </div>
    </React.Fragment>
  );
};
export default WeatherForecast;
