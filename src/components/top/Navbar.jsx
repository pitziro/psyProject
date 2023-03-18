import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'

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
    }, [navRef]);


    return (
    <div className={aStyle.zonatop}>
        
        <div className={mstyle.top_logo} >
            <Link to="/"> 
                <img className={mstyle.logo_img} src="/logotipo16.png" title="Home" alt='Home'/> 
                <img className={mstyle.logo_letras} src='nombre-sin-fondo.png'/>
            </Link>
        </div>


        {/* <nav ref={navRef}  id={mstyle.categorybar} className={barOpened && `${mstyle.show}` } > */}
        <nav ref={navRef}  id={mstyle.categorybar} className={barOpened ? `${mstyle.show}` : `${mstyle.inicial}`} >
            {
            myitems.map((item) => <NavItem key={item.id} item={item} handleClick={handleClick} barOpened={barOpened}/>)
            }
        </nav>
        <Mobile fClick = {{barOpened, handleClick}} />

        
    </div>
    )
}

export default Navbar
