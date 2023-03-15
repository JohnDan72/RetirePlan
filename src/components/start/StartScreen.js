// react and rsuite
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, CustomProvider, FlexboxGrid, Loader } from 'rsuite';
// hooks
import { useStart } from '../../hooks/useStart';
import { startUser } from '../../selectors/startUser';
// extras
import { GeneralContext } from '../../GeneralContext';
import { types } from '../../types/types';
// styles
import styles from './StartScreen.module.css';



const StartScreen = () => {
    const navigate = useNavigate();

    const { startValue, setLoading } = useStart({});
    const { loading } = startValue;

    const { dispatch } = useContext(GeneralContext);

    const handleStart = (formStatus) => {
        if (formStatus) {
            setLoading(true); //load while authenticate

            // NOTA:    tener cuidado con funciones async 
            //          ya que no funciona bien por el cambio 
            //          de state en PublicRoute
            startUser()
                .then(response => {
                    console.log("Sucess!!!");
                    setLoading(false);
                    dispatch({ type: types.start, payload: { user: {status: response}, planData: [] } });

                    const lastPath = localStorage.getItem('lastPath') || '/';

                    navigate(lastPath, {
                        replace: true
                    });
                });
        }
    }
    return (
        <CustomProvider theme="dark">
            <FlexboxGrid className={styles.allHeighWidth} justify="center">

                <FlexboxGrid.Item className="h-100" as={Col} xs={24} >
                    <div className={`h-100 ${styles.carousel1}`}  >
                        <div className="v-a-middle allHeightWidth " justify="center" >

                            {   //se muestra loading o button si esta cargando
                                loading
                                    ? (
                                        <div className={styles.loadingStyle}>
                                            <Loader size="lg" />
                                        </div>
                                    )
                                    : (
                                        <>
                                            <FlexboxGrid  justify="center">
                                                <FlexboxGrid.Item className="h-100" as={Col} xs={24} >
                                                    <h1 className={` ${styles.textCenter} ${styles.header}`}>Plan de Retiro</h1>
                                                </FlexboxGrid.Item>
                                                <FlexboxGrid.Item className={`mt-5 h-100 ${styles.textCenter}`} as={Col} xs={24} >

                                                    <Button onClick={handleStart} className={`animate__animated animate__backInDown ${styles.customButton}`} appearance="primary">Iniciar</Button>
                                                </FlexboxGrid.Item>

                                            </FlexboxGrid>


                                        </>
                                    )
                            }
                        </div>
                    </div>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </CustomProvider>


    );
}


export default StartScreen;