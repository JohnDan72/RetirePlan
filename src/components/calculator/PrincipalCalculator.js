import React from 'react';

import FormCalculatorPrincipal from './forms/FormCalculatorPrincipal';
import styles from './PrincipalCalculator.module.css'

const PrincipalCalculator = () => {

    return (
        <div className={styles.fondo}>
            <FormCalculatorPrincipal />
        </div>
    );
}

export default PrincipalCalculator;