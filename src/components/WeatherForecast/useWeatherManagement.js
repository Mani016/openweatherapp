/* eslint-disable react-hooks/exhaustive-deps */
import moment from "moment";
import {  useEffect, useState } from "react";

const useWeatherManagement = () => {
  const [activeTab, setActiveTab] = useState("daily-forecast");
  const [position, setPosition] = useState({});
  const handleTab = (tab) => {
    setActiveTab(tab);
  };
  const [last5DaysDate, setLast5DaysDate] = useState([]);
  useEffect(() => {
    for (let i = 1; i <= 5; i++) {
      last5DaysDate.push(moment().subtract(i, "days").unix());
    }
    setLast5DaysDate(last5DaysDate);
  }, []);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return {
    activeTab,
    handleTab,
    position
  };
};
export default useWeatherManagement;
