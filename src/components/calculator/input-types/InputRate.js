import React from 'react';
import { validInt } from '../../../helpers/calculatorValidator';
import { TextField } from '../../textfieldsForm/TexField';

// #region component
const propTypes = {};
const defaultProps = {};


const InputRate = ({ formValue, handleInputChange, label }) => {

    const { rate } = formValue;

    const rateHandler = (value) => {
        if (validInt(value) !== false) { handleInputChange({ name: 'rate', value }) }
    }

    return (
        <TextField
            posfix="%"
            name="rate"
            id="id_rate_input"
            label={label}
            value={rate}
            onChange={rateHandler} />
    );
}

InputRate.propTypes = propTypes;
InputRate.defaultProps = defaultProps;

export {
    InputRate
};