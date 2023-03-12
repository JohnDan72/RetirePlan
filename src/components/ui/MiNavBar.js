import React, { useContext} from 'react';
// import PropTypes from 'prop-types';
import { Nav, Navbar } from 'rsuite';
import { CustomNavLink } from './CustomNavLink';
import { GeneralContext } from '../../GeneralContext';
import { useNavigate } from 'react-router-dom';

// react icons
import { BsFillPersonFill} from "react-icons/bs";
import { MdColorLens, MdDarkMode, MdLightMode } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { types } from '../../types/types';
import { startUser } from '../../selectors/startUser';


const propTypes = {};
const defaultProps = {};

const MiNavBar = () => {

    const navigate = useNavigate();
    const { setTheme, active, setActive, user, dispatch } = useContext(GeneralContext);

    const handleLogout = () => {
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

        <Navbar appearance="inverse">
            <div className="container">
                {/* <Navbar.Brand as={CustomNavLink} href="/" className={styles.logoDiv}>
                    <img src={logoPath} alt="logo" height="50" />
                </Navbar.Brand> */}
                {/* <Nav activeKey={active} onSelect={setActive}>
                    <Nav.Item as={CustomNavLink} href="/dc" eventKey="dc" icon={<GiBatMask />}>DC</Nav.Item>
                    <Nav.Item as={CustomNavLink} href="/marvel" eventKey="marvel" icon={<GiMaskedSpider />}>Marvel</Nav.Item>
                    <Nav.Item as={CustomNavLink} href="/search" eventKey="search" icon={<BsSearch />}>Search</Nav.Item>

                </Nav> */}
                <Nav pullRight activeKey={active} onSelect={setActive}>
                    <Nav.Dropdown title="Theme" icon={<MdColorLens />}>
                        <Nav.Dropdown.Item as={CustomNavLink} icon={<MdLightMode />} eventKey='light' onClick={() => setTheme('light')}> Mode light</Nav.Dropdown.Item>
                        <Nav.Dropdown.Item as={CustomNavLink} icon={<MdDarkMode />} eventKey='dark' onClick={() => setTheme('dark')}> Mode dark</Nav.Dropdown.Item>
                    </Nav.Dropdown>
                    <Nav.Dropdown title={user.name} icon={<BsFillPersonFill />} id="id_account_nav">
                        <Nav.Dropdown.Item as={CustomNavLink} icon={<FiLogOut />} onClick={handleLogout} id="id_logout">
                            Salir
                        </Nav.Dropdown.Item>
                    </Nav.Dropdown>
                </Nav>
            </div>
        </Navbar>
    );
}

MiNavBar.propTypes = propTypes;
MiNavBar.defaultProps = defaultProps;

export default MiNavBar;