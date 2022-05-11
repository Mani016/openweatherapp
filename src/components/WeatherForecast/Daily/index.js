import React from 'react';
import Flex from '../../common/Flex';
import WeatherCard from '../../reusables/weatherCards';
import useDailyForecast from './useDailyForecast';
const DailyForecast = ({ position }) => {
  const { data, loading } = useDailyForecast({ position });
  return (
    <Flex justify="center" className='row'>
      <div className='col-4'>
        <WeatherCard loading={loading} data={data} isHistorical={false} />
      </div>
    </Flex>
  );
};
export default DailyForecast;
