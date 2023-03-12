import React, { useContext } from 'react';
// import JSONView from '../../ui/JSONView';
import { Button, ButtonToolbar, Col, FlexboxGrid, Form, Loader, Message } from 'rsuite';
import { useNavigate } from 'react-router-dom'
import { GeneralContext } from '../../../GeneralContext';


// import styles
import styles from "./FormCalculatorPrincipal.module.css";
import { BiExit, BiSend } from 'react-icons/bi';
// logo
import logo from "../../../media/retplan-logo.png";

// hooks / models / helpers / my components
import model from '../../../models/calculator/formModel';
import { useForm } from '../../../hooks/useForm';
import { types } from '../../../types/types';
import { startUser } from '../../../selectors/startUser';
import { InputSalary } from '../input-types/InputSalary';
import { InputRate } from '../input-types/InputRate';
import { InputRateSlider } from '../input-types/InputRateSlider';
import { InputMonthPay } from '../input-types/InputMonthPay';

const propTypes = {};
const defaultProps = {};


const FormCalculatorPrincipal = () => {
    const navigate = useNavigate();

    const { formValue, handleInputChange, setFormError, setLoading, resetForm } = useForm({
        salary: "5,000",
        rate: "8",
        month_pay: ["$1,500.00", "$4,500.52"]
    });
    const { status: status_error, error_msg } = formValue.error;
    const { loading, salary, rate, month_pay } = formValue;

    const { dispatch } = useContext(GeneralContext);

    const handlePrincipalCalculator = (formStatus) => {
        console.log("formStatus --> ", formStatus)
        if (formStatus) {
            setLoading(true); //load while authenticate

            // NOTA:    tener cuidado con funciones async 
            //          ya que no funciona bien por el cambio 
            //          de state en PublicRoute
            startUser(500)
                .then(userData => {
                    if (month_pay.length < 1) { // check month pay length
                        setFormError(true, 'Al menos debes agregar 1 abono mensual');
                        return
                    }
                    if (rate < 1) { // check month pay length
                        setFormError(true, 'Ingresa una tasa de rendimiento válida mayor igual a 1');
                        return
                    }
                    console.log("Sucess!!!");
                    resetForm();
                    dispatch({ type: types.end });
                    navigate('/start');
                });


        }
    }

    const handleEnd = () => {
        startUser(400)
            .then(response => {
                console.log("LogOut!!!!");
                dispatch({
                    type: types.end
                });
                navigate('/start')
            });

    }

    return (
        <div className={`container animate__animated animate__bounceInRight allHeightWidth v-a-middle ${styles.fondo}`}>
            {/* <JSONView formValue={formValue} /> */}
            <FlexboxGrid justify="center" >
                <FlexboxGrid.Item as={Col} xs={20} md={14}>
                    <FlexboxGrid justify="center" className={`${styles.formStyle}`}>
                        <FlexboxGrid.Item as={Col} xs={10} xsOffset={14} md={8} mdOffset={16} lg={6} lgOffset={18} className={`mt-4 ta-center`}>
                            <Button
                                color="red"
                                appearance="ghost"
                                endIcon={<BiExit />}
                                onClick={handleEnd}
                            >
                                Salir
                            </Button>
                        </FlexboxGrid.Item>
                        {/* logo */}
                        <FlexboxGrid.Item as={Col} xs={20}>
                            <img src={logo} className={styles.imgStyle} alt="logo" />
                        </FlexboxGrid.Item>
                        {/* título */}
                        <FlexboxGrid.Item as={Col} xs={20} className="mt-3">
                            <h4 id="id_bienvenida" className={styles.textCenter}>Comienza a ver el poder que tienen las inversiones sobre tu ahorro</h4>
                        </FlexboxGrid.Item>
                        {/* form */}
                        <FlexboxGrid.Item as={Col} xs={20} className="mt-5">
                            <Form
                                // ref={formRef}
                                formValue={{ salary, rate }}
                                onSubmit={handlePrincipalCalculator}
                                fluid
                                model={model}
                            >
                                <FlexboxGrid className={`mb-3 ${styles.vAEnd}`}>
                                    {/* salary */}
                                    <FlexboxGrid.Item as={Col} xs={24} lg={14}>
                                        <InputSalary
                                            formValue={formValue}
                                            handleInputChange={handleInputChange}
                                        />
                                    </FlexboxGrid.Item>
                                    {/* rate */}
                                    <FlexboxGrid.Item as={Col} xs={24} lg={10}>
                                        <InputRate
                                            formValue={formValue}
                                            handleInputChange={handleInputChange}
                                        />
                                    </FlexboxGrid.Item>
                                    {/* rate slider */}
                                    <FlexboxGrid.Item as={Col} xs={24} lg={24} className='mt-4' >
                                        <InputRateSlider
                                            formValue={formValue}
                                            handleInputChange={handleInputChange}
                                        />
                                    </FlexboxGrid.Item>
                                    {/* month pay array */}
                                    <FlexboxGrid.Item as={Col} xs={24} lg={24} className='mt-4'>
                                        <InputMonthPay
                                            formValue={formValue}
                                            handleInputChange={handleInputChange}
                                        />
                                    </FlexboxGrid.Item>
                                    {/* send or loaiding */}
                                    <FlexboxGrid.Item as={Col} xs={24} lg={24} className='mt-4'>
                                        {   //se muestra loading o button si esta cargando
                                            loading
                                                ? (
                                                    <div className={styles.centerContet}>
                                                        <Loader size="md" />
                                                    </div>
                                                )
                                                : (
                                                    <ButtonToolbar >
                                                        <Button appearance="primary" type="submit" block className={styles.centerButton}>
                                                            Calcular plan
                                                            <BiSend style={{ marginLeft: '10px' }} />
                                                        </Button>
                                                    </ButtonToolbar>
                                                )
                                        }
                                    </FlexboxGrid.Item>
                                    {/* divider error message */}
                                    <FlexboxGrid.Item as={Col} xs={20} lg={24} className="mt-4" >
                                        {
                                            status_error &&
                                            <Message showIcon type="error">
                                                {error_msg}
                                            </Message>
                                        }

                                    </FlexboxGrid.Item>
                                </FlexboxGrid>

                            </Form>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </div>
    )
}


FormCalculatorPrincipal.propTypes = propTypes;
FormCalculatorPrincipal.defaultProps = defaultProps;

export default FormCalculatorPrincipal;