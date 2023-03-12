import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CustomProvider } from 'rsuite';
// context
import { GeneralContext } from '../GeneralContext';
// my components
import PrincipalCalculator from '../components/calculator/PrincipalCalculator';
import SecondaryCalculator from '../components/calculator/SecondaryCalculator';


import RetirementPlanApp from '../RetirementPlanApp';

const DashboardRouter = () => {
    const { theme } = useContext(GeneralContext)

    return (
        <CustomProvider theme={theme}>
            <Routes>
                <Route path="" element={<RetirementPlanApp />}>
                    <Route index element={<PrincipalCalculator />} />
                    <Route path="secondary-calculator" element={<SecondaryCalculator />} />
                    {/* <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:id_hero" element={<HeroScreen />} /> */}
                </Route>
            </Routes>
        </CustomProvider>
    );
}

export default DashboardRouter;