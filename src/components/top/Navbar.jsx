import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import Mobile from './Mobile'
import mstyle from './Navbar.module.css'


function Navbar() {

    const list_catergory = ['Nosotros','Equipo','Servicios','Contacto']

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
    <div className={mstyle.zonatop}>
        
        <div className={mstyle.top_logo} >
            <Link to="/"> <img src="" title="Home" alt='Home'/> </Link>
            <span>"LOGO"</span>
        </div>

        <nav ref={navRef}  id={mstyle.top_list} className={barOpened ? `${mstyle.active}` : ``} >
                {list_catergory.map((item, ix) => (
                    <div key={ix} className={mstyle.lista_simple}> 
                        <Link to={`/${item.toLowerCase()}`} onClick={handleClick}> {item} </Link>
                    </div>
                ))}
        </nav>


        <Mobile fClick = {{barOpened, handleClick}} />
    </div>
    )
}

export default Navbar
