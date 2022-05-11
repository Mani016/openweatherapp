/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useAxios } from '../../../hooks/useAxios';
const BASIC_PARAMS = {
  url: 'forecast',
  method: 'GET',
  params: {},
};
const useWeatherManagement = ({ position }) => {
  const {
    response: data,
    loading,
    error,
    reFetchData,
  } = useAxios(BASIC_PARAMS);
  useEffect(() => {
    if (position.lat) {
      const payload = {
        ...BASIC_PARAMS,
        params: {
          lat: position.lat,
          lon: position.lng,
          units: 'metric',
        },
      };
      reFetchData({ ...payload });
    }
  }, [position.lat]);
  const decoData = (data) => {
    if (data) {
      return data.map((item) => {
        const { main, clouds, wind } = item;
        const { temp, feels_like, pressure, humidity } = main;
        const { speed, deg } = wind;
        return {
          ...item,
          dt: item.dt_txt,
          temp: temp,
          feels_like: feels_like,
          pressure: pressure,
          humidity: humidity,
          clouds: clouds.all,
          visibility: item.visibility,
          wind_speed: speed,
          wind_deg: deg,
        };
      });
    }
  };

  return {
    data:
    decoData(data?.list) || [],
    loading,
    error
  };
};
export default useWeatherManagement;
