import { useState, useEffect } from 'react';
import axios from 'axios';
import "./eltiempo.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThermometerHalf } from "@fortawesome/free-solid-svg-icons";
function Tiempo() {
  const [tiempo, setTiempo] = useState(null);

  useEffect(() => {
    async function fetchTiempo() {
      try {
        const response = await axios.get('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly', {
          params: {
            lat: '38.967887', // Latitud de Don Benito
            lon: '-5.859729', // Longitud de Don Benito
            units: 'metric',
            lang: 'es'
          },
          headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
          }
        });
        setTiempo(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTiempo();
  }, []);

 
  return (
    <div className="tiempo">
      {tiempo ? (
        <>
          <h2 className="tiempo__titulo">Tiempo en Don Benito:</h2>
          <div className="tiempo__info">
            <FontAwesomeIcon
              className="tiempo__icono"
              icon={faThermometerHalf}
            />
            <p className="tiempo__temperatura">
              {tiempo.data[0].temp} °C
            </p>
          </div>
          <p className="tiempo__descripcion">
            {tiempo.data[0].weather.description}
          </p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
    
}

export default Tiempo;
