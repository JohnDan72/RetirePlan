import React from 'react';
import { validTagInput } from '../../../helpers/calculatorValidator';
import { TagTextField } from '../../textfieldsForm/TexField';

// #region component
const propTypes = {};
const defaultProps = {};


const InputMonthPay = ({ formValue, handleInputChange }) => {

    const { month_pay } = formValue;

    const monthPayHandler = (value, item) => {
        validTagInput(value, item)
        handleInputChange({ name: 'month_pay', value })
    }
    const monthPayClenHandler = (event) => {
        handleInputChange({ name: 'month_pay', value: [] })
    }
    const monthPayCloseHandler = (value, item) => {
        if (item.type === 'click') {
            handleInputChange({ name: 'month_pay', value })
        }
    }

    return (
        <TagTextField
            name="month_pay"
            id="id_month_pay_input"
            label="¿Cuánto abonarías mensualmente? (max 6)"
            trigger={['Enter', 'Space', 'Comma']}
            placeholder="Abono mesual (máximo 6 cifras)"
            value={month_pay}
            onCreate={monthPayHandler}
            onClean={monthPayClenHandler}
            onChange={monthPayCloseHandler}
        />
    );
}

InputMonthPay.propTypes = propTypes;
InputMonthPay.defaultProps = defaultProps;

export {
    InputMonthPay
};