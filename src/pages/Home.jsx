
import './Home.css';
import Tiempo from '../pages/Eltiempo';

function Home() {
  return (
    <div className="home">
      <div className="mapa"></div>
      <div className="cabecera">
        <h1>¡Eso es todo amigos!</h1>
      </div>
      <Tiempo />
    </div>
  );
}

export default Home;
