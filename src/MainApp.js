import React , { useEffect , useState , useReducer } from 'react';

import { authReducer } from './auth/authReducer';
import { GeneralContext } from './GeneralContext';
import AppRouter from './routes/AppRouter';


const init = () => {
    return {
        user: JSON.parse(localStorage.getItem('userSession')) || { logged: false },
        planData: (localStorage.getItem('planData')) ? JSON.parse(localStorage.getItem('planData')) : []
    }
    // return JSON.parse(localStorage.getItem('userSession')) || { logged: false };
}

const MainApp = () => {
    const [reducerData, dispatch] = useReducer(authReducer, {}, init);

    const [active, setActive] = useState('')
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        console.log("reducerData-->",JSON.stringify(reducerData))
        if (!reducerData.user) return;
        localStorage.setItem('userSession', JSON.stringify(reducerData.user));
        localStorage.setItem('planData', JSON.stringify(reducerData.planData));
        
    }, [reducerData])
    return (
        <GeneralContext.Provider value={{
            reducerData, dispatch,
            theme, setTheme,
            active, setActive,
        }}
        >
            <AppRouter />
        </GeneralContext.Provider>
    );
}

export default MainApp;