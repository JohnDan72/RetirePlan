import React from 'react';
import { Breadcrumb, Divider } from 'rsuite';
// import HeroList from '../hero/HeroList';
import styles from './SecondaryCalculator.module.css'
import FormCalculatorSecondary from './forms/FormCalculatorSecondary';

const SecondaryCalculator = () => {
    return (
        <div className={styles.fondo}>
            <FormCalculatorSecondary />
        </div>
    );
}

export default SecondaryCalculator;