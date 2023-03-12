import React from 'react';
import { Slider } from 'rsuite';

// #region component
const propTypes = {};
const defaultProps = {};


const InputRateSlider = ({ formValue, handleInputChange }) => {

    const { rate } = formValue;

    return (
        <Slider
            max={100}
            step={0.2}
            progress
            // style={{  fontSize: '10px' }}
            value={Number(rate)}
            // graduated
            // renderMark={mark => {
            //     if(mark == 100) return mark+' %'
            //     return mark % 10 == 0 ? mark : false;
            // }}
            onChange={value => {
                handleInputChange({ name: 'rate', value: value + '' });
            }}
        />
    );
}

InputRateSlider.propTypes = propTypes;
InputRateSlider.defaultProps = defaultProps;

export {
    InputRateSlider
};