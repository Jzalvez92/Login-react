import { Link } from "react-router-dom";
import "./nav.css"
import { useContext } from "react";
import { JwtContext } from "../context/JwtContext";
import { ButtonLogout } from "../components/ButtonLogout";
const Nav = () => {
  
  const { jwt } = useContext(JwtContext);
 
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      
        {jwt && (
            <>
            <li>
            <Link to="/Eltiempo">Tiempo</Link>
          </li>
          <li>
            <ButtonLogout/>
          </li>
          </>
        )}
        {jwt === null && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/Registro">Registro</Link>
            </li>
          </>
        )}
        
      </ul>
    </nav>
  );
};

export default Nav;
