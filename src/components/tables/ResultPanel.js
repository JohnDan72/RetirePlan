import React, { useContext } from 'react';
import { Col, FlexboxGrid, Panel, Table } from 'rsuite';
import { GeneralContext } from '../../GeneralContext';
// import { calculeRetPlan } from '../../helpers/calculator-functions';

import styles from './ResultPanel.module.css'

const { Column, HeaderCell, Cell } = Table;

const propTypes = {};
const defaultProps = {};

const ResultPanel = () => {
    const { planData: data } = useContext(GeneralContext).reducerData;

    const [sortColumn, setSortColumn] = React.useState();
    const [sortType, setSortType] = React.useState();
    const [loading, setLoading] = React.useState(false);

    const getData = (ind) => {
        if (sortColumn && sortType) {
            return data[ind].breakDown.sort((a, b) => {
                let x = a[sortColumn];
                let y = b[sortColumn];
                if (typeof x === 'string') {
                    x = x.charCodeAt();
                }
                if (typeof y === 'string') {
                    y = y.charCodeAt();
                }
                if (sortType === 'asc') {
                    return x - y;
                } else {
                    return y - x;
                }
            });
        }
        return data[ind].breakDown;
    };

    const handleSortColumn = (sortColumn, sortType) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSortColumn(sortColumn);
            setSortType(sortType);
        }, 500);
    };


    return (
        <div className={`container animate__animated animate__bounceInLeft`}>
            <FlexboxGrid justify="center" >
                {
                    data.map((item, index) => (
                        <FlexboxGrid.Item as={Col} xs={24} lg={20} className={`mt-3`} key={index}>
                            <Panel className={` ${styles.panelStyle}`} header={`Resultado - ${(index + 1)}`} defaultExpanded>
                                <Table
                                    height={800}
                                    data={getData(index)}
                                    sortColumn={sortColumn}
                                    sortType={sortType}
                                    onSortColumn={handleSortColumn}
                                    loading={loading}
                                    rowKey="key"
                                >
                                    <Column width={80} align="center" sortable resizable>
                                        <HeaderCell>Id</HeaderCell>
                                        <Cell dataKey="key">{rowData => rowData.id}</Cell>
                                    </Column>

                                    <Column width={100} sortable resizable>
                                        <HeaderCell>Año</HeaderCell>
                                        <Cell dataKey="year" />
                                    </Column>

                                    <Column width={150} sortable resizable>
                                        <HeaderCell>Rendimiento</HeaderCell>
                                        <Cell dataKey="return" />
                                    </Column>

                                    <Column width={200} sortable resizable>
                                        <HeaderCell>Acumulación</HeaderCell>
                                        <Cell dataKey="investment_and_returns" />
                                    </Column>

                                    <Column sortable width={180} >
                                        <HeaderCell>Ganarías mensualmente</HeaderCell>
                                        <Cell dataKey="final_salary" />
                                    </Column>
                                    <Column sortable flexGrow={1} >
                                        <HeaderCell>Edad</HeaderCell>
                                        <Cell dataKey="current_age" />
                                    </Column>
                                </Table>
                            </Panel>
                        </FlexboxGrid.Item>
                    ))
                }

            </FlexboxGrid>
        </div>
    );
}

ResultPanel.propTypes = propTypes;
ResultPanel.defaultProps = defaultProps;

export default ResultPanel;