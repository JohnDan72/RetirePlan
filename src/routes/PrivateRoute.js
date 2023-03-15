import React, { useContext } from 'react';
import { Navigate , useLocation } from 'react-router-dom';
import { GeneralContext } from '../GeneralContext';

export const PrivateRoute = ({ children }) => {
    const { reducerData } = useContext(GeneralContext);
    const location = useLocation();

    const { pathname , search } = location;
    if(reducerData.planData.length < 1){
        console.log("chii")
        localStorage.setItem("lastPath","/")
    }
    else{
        console.log("nooo")
        localStorage.setItem('lastPath', `${pathname}${search}`);
    }

    return (reducerData.user.logged)?children:<Navigate to="/start" />;
}
