import React, { useState } from 'react';
import { BiExit } from 'react-icons/bi';
import { Button, Col, FlexboxGrid, Panel, PanelGroup, Placeholder, Table } from 'rsuite';

import styles from './ResultPanel.module.css'

const { Column, HeaderCell, Cell } = Table;

const propTypes = {};
const defaultProps = {};

const ResultPanel = ({ data }) => {
    const [info, setInfo] = useState([
        {
            id: 1,
            name: "example - 1",
            gender: "male",
            age: 23,
            email: "email-example@gmail.com"
        },
        {
            id: 2,
            name: "example - 2",
            gender: "female",
            age: 25,
            email: "email-example@gmail.com"
        },
        {
            id: 3,
            name: "example - 3",
            gender: "male",
            age: 21,
            email: "email-example@gmail.com"
        }
    ])
    const [sortColumn, setSortColumn] = React.useState();
    const [sortType, setSortType] = React.useState();
    const [loading, setLoading] = React.useState(false);

    const getData = () => {
        if (sortColumn && sortType) {
            return info.sort((a, b) => {
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
        return info;
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
                    info.map((item, index) => (
                        <FlexboxGrid.Item as={Col} xs={24} lg={22} className={`mt-3`} >
                            <PanelGroup accordion bordered className={` ${styles.panelStyle}`}>
                                <Panel header={`Resultado - ${(index + 1)}`} defaultExpanded>
                                    <FlexboxGrid.Item as={Col} xs={24} className={`mt-3`} >
                                        <Table
                                        block
                                            // height={420}
                                            data={getData()}
                                            sortColumn={sortColumn}
                                            sortType={sortType}
                                            onSortColumn={handleSortColumn}
                                            loading={loading}
                                        >
                                            <Column width={70} align="center" fixed sortable>
                                                <HeaderCell>Id</HeaderCell>
                                                <Cell dataKey="id" />
                                            </Column>

                                            <Column width={130} fixed sortable>
                                                <HeaderCell>Name</HeaderCell>
                                                <Cell dataKey="name" />
                                            </Column>

                                            <Column width={100} sortable>
                                                <HeaderCell>Gender</HeaderCell>
                                                <Cell dataKey="gender" />
                                            </Column>

                                            <Column width={100} sortable>
                                                <HeaderCell>Age</HeaderCell>
                                                <Cell dataKey="age" />
                                            </Column>

                                            <Column width={200} sortable>
                                                <HeaderCell>Email</HeaderCell>
                                                <Cell dataKey="email" />
                                            </Column>
                                        </Table>
                                    </FlexboxGrid.Item>
                                </Panel>
                            </PanelGroup>
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