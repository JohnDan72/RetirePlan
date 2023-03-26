import React, { useContext, useState } from 'react';
import { BiBarChartAlt } from 'react-icons/bi';
import { Button, Divider, Modal } from 'rsuite';
import { GeneralContext } from '../../GeneralContext';
import MyLineChart from './MyLineChart';


const ModalChart = () => {
    const { planData: data } = useContext(GeneralContext).reducerData;
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => {
        setOpenModal(true);
    };
    const handleClose = () => setOpenModal(false);
    return (<>
        <Button
            block
            color="violet"
            appearance="primary"
            endIcon={<BiBarChartAlt />}
            onClick={handleOpen}
        >
            Gráfica
        </Button>
        <Modal size={`md`} open={openModal} onClose={handleClose}>
            <Modal.Header>
                <Modal.Title>Gráfica Comparativa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{`Meta mensual: $${data[0].salary}`}</p>
                <p>{`Mejor abono: ${data[data.length - 1].month_pay}`}</p>
                <p>{`En el mejor caso lograrás tu meta cuando tengas: ${data[data.length - 1].breakDown[data[data.length - 1].breakDown.length - 1].current_age}`}</p>
                <Divider />
                <MyLineChart />
            </Modal.Body>
        </Modal>
    </>
    );
}


export default ModalChart;