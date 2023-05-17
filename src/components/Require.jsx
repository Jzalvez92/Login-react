
import { Navigate, useLocation } from "react-router-dom"

export const Require = ({children}) => {
 
    let location = useLocation();
    if (!localStorage.getItem("token")) {
        return <Navigate to="/Login" state={{ from: location}} replace/>
    }
    return children; 

}