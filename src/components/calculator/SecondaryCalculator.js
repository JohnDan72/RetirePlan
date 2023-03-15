import React from 'react';
import { Col, FlexboxGrid } from 'rsuite';
// import HeroList from '../hero/HeroList';
import styles from './SecondaryCalculator.module.css'
import FormCalculatorSecondary from './forms/FormCalculatorSecondary';
import ResultPanel from '../tables/ResultPanel';

const SecondaryCalculator = () => {
    return (
        <div className={styles.fondo}>
            <FlexboxGrid justify="center" >
                <FlexboxGrid.Item as={Col} xs={24} >
                    <FormCalculatorSecondary />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item as={Col} xs={24} className={`mt-2`} >
                    <ResultPanel />
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </div>
    );
}

export default SecondaryCalculator;