import React, { useState } from 'react';
import { BiBarChartAlt } from 'react-icons/bi';
import { Button, Modal } from 'rsuite';
import MyLineChart from './MyLineChart';


const ModalChart = () => {
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
                <MyLineChart />
            </Modal.Body>
        </Modal>
    </>
    );
}


export default ModalChart;