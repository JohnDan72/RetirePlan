import React, { useContext } from 'react';
// import JSONView from '../../ui/JSONView';
import { Button, ButtonToolbar, Col, FlexboxGrid, Form, Loader, Message } from 'rsuite';
import { useNavigate } from 'react-router-dom'
import { GeneralContext } from '../../../GeneralContext';


// import styles
import styles from "./FormCalculatorSecondary.module.css";
import { BiExit, BiBarChartAlt, BiCalculator } from 'react-icons/bi';
// logo

// hooks / models / helpers / my components
import model from '../../../models/calculator/formModel';
import { useForm } from '../../../hooks/useForm';
import { types } from '../../../types/types';
import { startUser } from '../../../selectors/startUser';
import { InputSalary } from '../input-types/InputSalary';
import { InputRate } from '../input-types/InputRate';
import { InputMonthPay } from '../input-types/InputMonthPay';
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem';
import { InputAge } from '../input-types/InputAge';
import { calculeRetPlan } from '../../../helpers/calculator-functions';

const propTypes = {};
const defaultProps = {};


const FormCalculatorSecondary = () => {
    const navigate = useNavigate();

    const { formValue, handleInputChange, setFormError, setLoading, resetForm } = useForm({
        salary: "5,000",
        rate: "8",
        month_pay: ["$1,500.00", "$4,500.52"],
        age: "26",
        chart_ready: false
    });
    const { status: status_error, error_msg } = formValue.error;
    const { loading, salary, rate, month_pay, chart_ready, age } = formValue;

    const { reducerData , dispatch } = useContext(GeneralContext);
    const { MAX_AGE } = reducerData

    const handleSecondaryCalculator = (formStatus) => {
        console.log("formStatus --> ", formStatus)
        if (formStatus) {
            setLoading(true); //load while authenticate

            startUser(500)
                .then(userData => {
                    // if (month_pay.length < 1) { // check month pay length
                    //     setFormError(true, 'Al menos debes agregar 1 abono mensual');
                    //     return
                    // }
                    // if (rate < 1) { // check month pay length
                    //     setFormError(true, 'Ingresa una tasa de rendimiento válida mayor igual a 1');
                    //     return
                    // }
                    // const planData = calculeRetPlan(formValue, MAX_AGE)
                    // console.log("Sucess!!!");
                    // resetForm();
                    // dispatch({ type: types.start, payload:{ user: {status: userData}, planData } });
                    // navigate('/secondary-calculator');
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
        <>
            <div className={`container animate__animated animate__bounceInLeft`}>
                <FlexboxGrid justify="end" >
                    {/* exit button */}
                    <FlexboxGrid.Item as={Col} className={`mt-3 ta-center`} >
                        <Button
                            size="lg"
                            color="red"
                            appearance="primary"
                            endIcon={<BiExit />}
                            onClick={handleEnd}
                        >
                            Salir
                        </Button>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </div>
            <div className={`container animate__animated animate__bounceInRight`}>
                <FlexboxGrid justify="center" >

                    <FlexboxGrid.Item as={Col} xs={24} >
                        <FlexboxGrid align="middle" justify="center" className={`mt-5 ${styles.formStyle}`}>
                            <FlexboxGridItem as={Col} xs={24} className="ta-center mt-3">
                                <h5>Completa la información requerida y comprueba el poder de las inversiones a largo plazo</h5>
                            </FlexboxGridItem>
                            {/* form */}
                            <FlexboxGridItem as={Col} xs={24}>
                                <Form
                                    // ref={formRef}
                                    formValue={{ salary, rate, age }}
                                    onSubmit={handleSecondaryCalculator}
                                    fluid
                                    model={model}
                                >
                                    <FlexboxGrid justify="center" className={`mt-4 mb-3 ${styles.vAEnd}`}>
                                        {/* salary */}
                                        <FlexboxGrid.Item as={Col} xs={20} lg={5}>
                                            <InputSalary
                                                formValue={formValue}
                                                handleInputChange={handleInputChange}
                                                label="Sueldo mensual deseado"
                                            />
                                        </FlexboxGrid.Item>
                                        {/* rate */}
                                        <FlexboxGrid.Item as={Col} xs={20} lg={2}>
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
                                        {/* age */}
                                        <FlexboxGrid.Item as={Col} xs={20} lg={3}>
                                            <InputAge
                                                formValue={formValue}
                                                handleInputChange={handleInputChange}
                                                label="Edad"
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
                                        {
                                            /* chart button */
                                            chart_ready && (
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
                                            )
                                        }


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

                        </FlexboxGrid>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </div>
        </>
    )
}


FormCalculatorSecondary.propTypes = propTypes;
FormCalculatorSecondary.defaultProps = defaultProps;

export default FormCalculatorSecondary;