import { useState } from "react"
import {Link} from 'react-router-dom'
import "./Navbar.css"

function Navbar() {

    const [nav_list] = useState (['Inicio','Nosotros','Equipo','Servicios','Contacto'])

    return (
    <div id="zonatop">
        
        <div id="top_logo" >
            {/* <Link to="/"> <img src="" title="Home" alt='Home'/> </Link> */}
            <span>"LOGO"</span>
        </div>
        
        <div id="top_list" >
                {nav_list.map((item, ix) => (
                    <div key={ix} className ="lista_inline"> 
                        <Link to={`/${item.toLowerCase()}`}> {item} </Link>
                    </div>
                ))}
        </div>
    </div>
    )
}

export default Navbar
