import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap';

import mstyle from './Navbar.module.css'
import aStyle from '../../App.module.css'

import NavItem from './NavItem'
import Mobile from './Mobile'

import myitems from "../../data/navbarData.json"


function Navbar() {

    const [barOpened, setbarOpened] = useState(false)
    
    const handleClick = () => {
        setbarOpened (prev => !prev)
    }

    const navRef = useRef(null);
    
    useEffect(() => {
        const clickOutside = (evt) => {
            if ((navRef.current) && (!navRef.current.contains(evt.target))) {
                setbarOpened(false)
            }
        }
        document.addEventListener('mousedown',clickOutside)
        
        return () => {
            document.removeEventListener('mousedown',clickOutside)
        };
    }, [barOpened]);


    return (
    <div className={aStyle.zonatop}>
        
        <div className={mstyle.top_logo} >
            <Link to="/"> <img src="/logotipo16.png" title="Home" alt='Home'/> </Link>
            {/* <span>"LOGO"</span> */}
        </div>

        {/* <nav ref={navRef}  id={mstyle.top_list} className={barOpened ? `${mstyle.active}` : ``} >
                {list_catergory.map((item, ix) => (
                    <div key={ix} className={mstyle.lista_simple}> 
                        <Link to={`/${item.toLowerCase()}`} onClick={handleClick}> {item} </Link>
                    </div>
                ))}
        </nav> */}
        
        {/* <NavItem/> */}

        <nav ref={navRef}  id={mstyle.top_list} className={barOpened ? `${mstyle.active}` : ``} >
            {
            myitems.map((item) => <NavItem key={item.id} item={item} handleClick={handleClick} barOpened={barOpened}/>)
            }
             <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>Second</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>last</NavDropdown.Item>
            </NavDropdown>
        </nav>

        <Mobile fClick = {{barOpened, handleClick}} />
    </div>
    )
}

export default Navbar
