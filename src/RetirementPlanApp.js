import React from 'react';
// import PropTypes from 'prop-types';
import { Container, Content } from 'rsuite';
// import MiNavBar from './components/ui/MiNavBar';
import { Outlet } from 'react-router-dom';

const propTypes = {};
const defaultProps = {};


const RetirementPlanApp = () => {
    return (
        <Container>
            {/* <Header className="">
                <MiNavBar />
            </Header> */}
            <Content >
                <Outlet />
            </Content>
        </Container>
    );
}

RetirementPlanApp.propTypes = propTypes;
RetirementPlanApp.defaultProps = defaultProps;

export default RetirementPlanApp;