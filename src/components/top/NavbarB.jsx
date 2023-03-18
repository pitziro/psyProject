import React, {useRef} from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import mstyle from './NavbarB.module.css';
import aStyle from '../../App.module.css';

function NavbarB() {

    const navRef = useRef(null);
	return (
        <div className={aStyle.zonatop}>
            
            <div className={mstyle.top_logo} >
                <Link to="/"> <img src="/logotipo16.png" title="Home" alt='Home'/> </Link>
                {/* <span>"LOGO"</span> */}
            </div>

            <nav ref={navRef}  id={mstyle.top_list}  >
            
                <div className={mstyle.lista_simple}> 
                    <Link to='/' > Hol </Link>
                </div>

                    <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                        <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.2'>Second</NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.4'>last</NavDropdown.Item>
                    </NavDropdown>
            </nav>

        </div>

	);
}

export default NavbarB;
