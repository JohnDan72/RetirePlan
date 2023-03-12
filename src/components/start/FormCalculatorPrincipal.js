import React, { useContext } from 'react';
// import JSONView from '../ui/JSONView';
import { Button, ButtonToolbar, Col, FlexboxGrid, Form, Loader, Message, Slider } from 'rsuite';
import { useNavigate } from 'react-router-dom'
// icons
import { BiSend } from 'react-icons/bi';


// import PropTypes from 'prop-types';

import { TextField, TagTextField } from '../textfieldsForm/TexField';

// logo
import logo from "../../media/retplan-logo.png";
import styles from "./FormCalculatorPrincipal.module.css";
import model from '../../models/calculator/formModel';
import { useForm } from '../../hooks/useForm';
import { GeneralContext } from '../../GeneralContext';
import { types } from '../../types/types';
import { startUser } from '../../selectors/startUser';
import { validInt, validMoney, validTagInput } from '../../helpers/calculatorValidator';
import SearchScreen from '../search/SearchScreen';



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

    const salaryHandler = (value) => {
        const result = validMoney(value)
        if (result !== false) { handleInputChange({ name: 'salary', value: result }) }
    }
    const rateHandler = (value) => {
        if (validInt(value) !== false) { handleInputChange({ name: 'rate', value }) }
    }
    const monthPayHandler = (value, item) => {
        validTagInput(value, item)
        handleInputChange({ name: 'month_pay', value })

        // console.log("value ---> ", value)
        // console.log("month_pay ---> ", month_pay)
    }
    const monthPayClenHandler = (event) => {
        handleInputChange({ name: 'month_pay', value: [] })
    }
    const monthPayCloseHandler = (value, item) => {
        if (item.type === 'click') {
            handleInputChange({ name: 'month_pay', value })
        }
    }

    const handleLogin = (formStatus) => {
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

    return (
        <div className="container animate__animated animate__bounceInRight allHeightWidth v-a-middle">
            {/* <JSONView formValue={formValue} /> */}
            <FlexboxGrid justify="center">
                {/* logo */}
                <FlexboxGrid.Item as={Col} xs={24}>
                    <img src={logo} className={styles.imgStyle} alt="logo" />
                </FlexboxGrid.Item>
                {/* título */}
                <FlexboxGrid.Item as={Col} xs={24} className="mt-3">
                    <h4 id="id_bienvenida" className={styles.textCenter}>Comienza a ver el poder que tienen las inversiones sobre tu ahorro</h4>
                </FlexboxGrid.Item>
                {/* form */}
                <FlexboxGrid.Item as={Col} xs={20} sm={18} md={12} className="mt-5">
                    <Form
                        // ref={formRef}
                        formValue={{ salary, rate }}
                        onSubmit={handleLogin}
                        fluid
                        model={model}
                    >


                        <FlexboxGrid className={`mb-3 ${styles.vAEnd}`}>
                            {/* salary */}
                            <FlexboxGrid.Item as={Col} xs={20} lg={14}>
                                <TextField prefix="$" name="salary"
                                    id="id_salary_input"
                                    label="¿Cuánto te gustaría recibir mensualmente?"
                                    value={salary}
                                    onChange={salaryHandler} />
                            </FlexboxGrid.Item>
                            {/* rate */}
                            <FlexboxGrid.Item as={Col} xs={20} lg={10}>
                                <TextField posfix="%" name="rate"
                                    id="id_rate_input"
                                    label={`Tasa de rendimiento`}
                                    value={rate}
                                    onChange={rateHandler} />
                            </FlexboxGrid.Item>
                            {/* rate slider */}
                            <FlexboxGrid.Item as={Col} xs={20} lg={24} className='mt-4' >
                                <Slider
                                    max={100}
                                    step={0.2}
                                    progress
                                    // style={{  fontSize: '10px' }}
                                    value={Number(rate)}
                                    // graduated
                                    // renderMark={mark => {
                                    //     if(mark == 100) return mark+' %'
                                    //     return mark % 10 == 0 ? mark : false;
                                    // }}
                                    onChange={value => {
                                        handleInputChange({ name: 'rate', value: value + '' });
                                    }}
                                />
                            </FlexboxGrid.Item>
                            {/* month pay array */}
                            <FlexboxGrid.Item as={Col} xs={20} lg={24} className='mt-4'>
                                <TagTextField
                                    name="month_pay"
                                    id="id_month_pay_input"
                                    label="¿Cuánto abonarías mensualmente? (max 6)"
                                    trigger={['Enter', 'Space', 'Comma']}
                                    placeholder="Abono mesual (máximo 6 cifras)"
                                    value={month_pay}
                                    onCreate={monthPayHandler}
                                    onClean={monthPayClenHandler}
                                    onChange={monthPayCloseHandler}
                                />
                            </FlexboxGrid.Item>
                            {/* send or loaiding */}
                            <FlexboxGrid.Item as={Col} xs={20} lg={24} className='mt-4'>
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
        </div>
    )
}


FormCalculatorPrincipal.propTypes = propTypes;
FormCalculatorPrincipal.defaultProps = defaultProps;

export default FormCalculatorPrincipal;