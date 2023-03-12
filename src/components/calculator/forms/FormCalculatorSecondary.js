import React, { useContext } from 'react';
// import JSONView from '../../ui/JSONView';
import { Button, ButtonToolbar, Col, FlexboxGrid, Form, Loader, Message } from 'rsuite';
import { useNavigate } from 'react-router-dom'
import { GeneralContext } from '../../../GeneralContext';


// import styles
import styles from "./FormCalculatorSecondary.module.css";
import { BiExit, BiSend, BiBarChartAlt, BiCalculator } from 'react-icons/bi';
// logo
import logo from "../../../media/retplan-logo-2.png";

// hooks / models / helpers / my components
import model from '../../../models/calculator/formModel';
import { useForm } from '../../../hooks/useForm';
import { types } from '../../../types/types';
import { startUser } from '../../../selectors/startUser';
import { InputSalary } from '../input-types/InputSalary';
import { InputRate } from '../input-types/InputRate';
import { InputRateSlider } from '../input-types/InputRateSlider';
import { InputMonthPay } from '../input-types/InputMonthPay';
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem';

const propTypes = {};
const defaultProps = {};


const FormCalculatorSecondary = () => {
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
        <div className={`container animate__animated animate__bounceInRight allHeightWidth v-a-middle`}>
            <FlexboxGrid justify="center" >

                <FlexboxGrid.Item as={Col} xs={24} >
                    <FlexboxGrid justify="center" className={`${styles.formStyle}`}>
                        {/* logo */}
                        <FlexboxGrid.Item className='mt-4' as={Col} xs={20}>
                            <img src={logo} className={styles.imgStyle} alt="logo" />
                        </FlexboxGrid.Item>
                        {/* título */}
                        <FlexboxGrid.Item as={Col} xs={20} className="mt-3">
                            <h4 id="id_bienvenida" className={styles.textCenter}>Comienza a ver el poder que tienen las inversiones sobre tu ahorro</h4>
                        </FlexboxGrid.Item>
                        {/* form */}
                        <FlexboxGridItem as={Col} xs={24}>
                            <Form
                                // ref={formRef}
                                formValue={{ salary, rate }}
                                onSubmit={handlePrincipalCalculator}
                                fluid
                                model={model}
                            >
                                <FlexboxGrid justify="center" className={`my-5 ${styles.vAEnd}`}>
                                    {/* salary */}
                                    <FlexboxGrid.Item as={Col} xs={20} lg={5}>
                                        <InputSalary
                                            formValue={formValue}
                                            handleInputChange={handleInputChange}
                                            label="Sueldo mensual deseado"
                                        />
                                    </FlexboxGrid.Item>
                                    {/* rate */}
                                    <FlexboxGrid.Item as={Col} xs={20} lg={3}>
                                        <InputRate
                                            formValue={formValue}
                                            handleInputChange={handleInputChange}
                                            label="Tasa"
                                        />
                                    </FlexboxGrid.Item>

                                    {/* month pay array */}
                                    <FlexboxGrid.Item as={Col} xs={20} lg={8} >
                                        <InputMonthPay
                                            formValue={formValue}
                                            handleInputChange={handleInputChange}
                                            label="Abono(s) mensual (max 6)"
                                        />
                                    </FlexboxGrid.Item>
                                    {/* send or loaiding */}
                                    <FlexboxGrid.Item as={Col} xs={20} lg={3} >
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
                                                            Calcular
                                                            <BiCalculator style={{ marginLeft: '10px' }} />
                                                        </Button>
                                                    </ButtonToolbar>
                                                )
                                        }
                                    </FlexboxGrid.Item>
                                    {/* chart button */}
                                    <FlexboxGrid.Item as={Col} xs={20} lg={3} >
                                        <Button
                                            block
                                            color="violet"
                                            appearance="primary"
                                            endIcon={<BiBarChartAlt />}
                                        // onClick={handleEnd}
                                        >
                                            Gráfica
                                        </Button>
                                    </FlexboxGrid.Item>
                                    {/* chart button */}
                                    <FlexboxGrid.Item as={Col} xs={20} lg={2} >
                                        <Button
                                            block
                                            color="red"
                                            appearance="ghost"
                                        // onClick={handleEnd}
                                        >
                                            Salir
                                        </Button>
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
                        </FlexboxGridItem>



                        {/* form */}
                        <FlexboxGrid.Item as={Col} xs={20} className="mt-5">

                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </div>
    )
}


FormCalculatorSecondary.propTypes = propTypes;
FormCalculatorSecondary.defaultProps = defaultProps;

export default FormCalculatorSecondary;