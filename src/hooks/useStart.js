import { useState } from 'react';



export const useStart = (initialState = {}) => {

    const [startValue, setStartValue] = useState({
        ...initialState,
        loading: false
    });

    const setLoading = (loading) => {
        setStartValue({
            ...startValue,
            loading
        })
    }

    return {
        startValue,
        setStartValue,
        setLoading
    };
}


