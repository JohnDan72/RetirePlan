import React, { useContext } from 'react';
import { GeneralContext } from '../../../GeneralContext';
import { validAge } from '../../../helpers/calculatorValidator';
import { TextField } from '../../textfieldsForm/TexField';

// #region component
const propTypes = {};
const defaultProps = {};


const InputAge = ({ formValue, handleInputChange, label, placeholder }) => {
    const { reducerData } = useContext(GeneralContext)
    const { MAX_AGE } = reducerData
    const { age } = formValue;

    const ageHandler = (value) => {
        if (validAge(value,MAX_AGE) !== false) { handleInputChange({ name: 'age', value }) }
    }

    return (
        <TextField
            posfix="años"
            name="age"
            id="id_age_input"
            label={label}
            placeholder={placeholder}
            value={age}
            onChange={ageHandler} />
    );
}

InputAge.propTypes = propTypes;
InputAge.defaultProps = defaultProps;

export {
    InputAge
};