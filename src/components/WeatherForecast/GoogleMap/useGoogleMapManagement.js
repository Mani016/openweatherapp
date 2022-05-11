/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useAxios } from '../../../hooks/useAxios';
// import agent from "../../agent";
const BASIC_PARAMS = {
  url: 'weather',
  method: 'GET',
  params: {},
};

const useGoogleMap = ({ position }) => {
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
          exclude: 'hourly,daily',
          units: 'metric',
        },
      };
      reFetchData({ ...payload });
    }
  }, [position.lat]);
  return {
    loading,
    error,
    data,
  };
};
export default useGoogleMap;
