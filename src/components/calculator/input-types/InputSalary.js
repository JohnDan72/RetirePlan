import React from 'react';
import { validMoney } from '../../../helpers/calculatorValidator';
import { TextField } from '../../textfieldsForm/TexField';

// #region component
const propTypes = {};
const defaultProps = {};


const InputSalary = ({ formValue, handleInputChange, label }) => {

    const { salary } = formValue;

    const salaryHandler = (value) => {
        const result = validMoney(value)
        if (result !== false) { handleInputChange({ name: 'salary', value: result }) }
    }

    return (
        <TextField
            prefix="$"
            name="salary"
            id="id_salary_input"
            label={label}
            value={salary}
            onChange={salaryHandler}
        />
    );
}

InputSalary.propTypes = propTypes;
InputSalary.defaultProps = defaultProps;

export {
    InputSalary
};