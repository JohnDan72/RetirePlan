import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { GeneralContext } from "../GeneralContext"


export const PublicRoute = ({ children }) => {

    const { reducerData } = useContext(GeneralContext);
    const lastPath = localStorage.getItem('lastPath');

    return (!reducerData.user.logged)? children : <Navigate to={lastPath} />;
}