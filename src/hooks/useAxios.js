import { useState, useEffect } from 'react';
import axios from 'axios';
import { HTTP_CONSTANTS, APPID } from '../constants';


/**
 fixed :
  - no need to JSON.stringify to then immediatly do a JSON.parse
  - don't use export defaults, because default imports are hard to search for
  - axios already support generic request in one parameter, no need to call specialized ones
* */
// eslint-disable-next-line import/prefer-default-export
const REACT_APP_API_BASE_URL = 'https://api.openweathermap.org/data/2.5';
export const useAxios = ({
  url,
  method = HTTP_CONSTANTS.GET,
  params,
  invokeOnLoad = false,
  initialLoader = true,
  baseURL = '',
}) => {
  axios.defaults.baseURL = baseURL || REACT_APP_API_BASE_URL;
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [loading, setloading] = useState(initialLoader);

  const fetchData = async (payload) => {
    if (payload?.method) {
      setloading(true);
    }
    try {
      const result = await axios.request({
        method: payload ? payload.method : method,
        url: payload ? payload.url : url,
        headers: {
          accept: 'application/json',
        },
        params: payload?.params ? {...payload.params , appid: APPID} : {...params, appid: APPID},
        data: payload?.data ? payload.data : null,
      });
      setResponse(result.data);
    } catch (e) {
      setError(e);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    if (invokeOnLoad) {
      fetchData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invokeOnLoad]);

  return { response, error, loading, reFetchData: fetchData };
};

