import moment from 'moment';
import Flex from '../common/Flex';

const FormatData = ({ label, value }) => (
  <>
    <Flex align={'center'} justify={'between'} className={'w-100'}>
      <h6> {label}:</h6> <p>{value || '-'}</p>
    </Flex>
    <hr className='w-100 m-0 text-black' />
  </>
);
const WeatherCard = (props) => {
  const { data, loading, isHistorical } = props;
  return (
    <div className='flip-card'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='flip-card-inner'>
          <Flex
            className='flip-card-front p-5'
            justify={'between'}
            column
            align={'center'}
          >
            <Flex align={'center'}>
              (
              {isHistorical
                ? moment(data.dt).format('DD/MM/YYYY hh:mm')
                : moment.unix(data.dt).format('DD/MM/YYYY hh:mm')}
              )-
              {isHistorical
                ? moment(data.dt).format('dddd')
                : moment.unix(data.dt).format('dddd')}
            </Flex>
            <h4>Weather Details</h4>
            <Flex>
              <img
                src={`http://openweathermap.org/img/wn/${data?.weather?.[0].icon}@2x.png`}
                alt='weather_icon'
              />
            </Flex>
            <FormatData label='Clouds' value={data.clouds} />
            <FormatData label='Dew Point' value={data.dew_point} />
            <FormatData label='Feels Like' value={data.feels_like} />
            <FormatData label='Humidity' value={`${data.humidity}%`} />
            <FormatData label='Pressure' value={`${data.pressure}hPa`} />
            <FormatData label='Temp' value={`${data.temp}°C`} />
          </Flex>
          <Flex
            className='flip-card-back p-5'
            justify={'between'}
            column
            align={'center'}
          >
            <FormatData label='Main' value={data.weather?.[0].main} />
            <FormatData
              label='Description'
              value={data.weather?.[0].description}
            />
            <FormatData label='uvi' value={data.uvi} />
            <FormatData label='Visibility' value={data.visibility} />
            <FormatData label='Wind Deg' value={`${data.wind_deg}degrees`} />
            <FormatData label='Wind Speed' value={`${data.wind_speed}m/s`} />
            <FormatData
              label='Sunrise Timing'
              value={
                data.sunrise
                  ? moment.unix(data.sunrise).format('DD/MM/YYYY hh:mm:ss')
                  : '-'
              }
            />
            <FormatData
              label='Sunset Timing'
              value={
                data.sunset
                  ? moment.unix(data.sunset).format('DD/MM/YYYY hh:mm:ss')
                  : '-'
              }
            />
          </Flex>
        </div>
      )}
    </div>
  );
};
export default WeatherCard;
