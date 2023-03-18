import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import {ExpandMoreOutlined, ExpandLessOutlined} from '@mui/icons-material';

import mstyle from './Navbar.module.css'

export default function NavItem(props) {
    

    const {item, handleClick, barOpened} = props
    const [opened, setopen] = useState(false);

    const handleOpen = () => {
        setopen (prev => !prev)
    }

    useEffect(() => {
        setopen (false)
    }, [barOpened]);

    if (item.childrens){
        return (
            <div className={mstyle.lista_menu}>
                <div className={mstyle.lista_simple} onClick={handleOpen}>
                        <a href="#">{item.title}</a>
                        {opened ? <ExpandLessOutlined/> : <ExpandMoreOutlined/>}
                </div>
                <div className={opened ? `${mstyle.lista_content} ${mstyle.opened}` : `${mstyle.lista_content}`}>
                    { item.childrens.map((child, index) => <NavItem key={index} item={child} handleClick={handleClick}/>) }
                </div>
            </div>
        )
    } 
    
    else
    {
        return (
            <div className={mstyle.lista_simple}> 
                <Link to={item.path} onClick={handleClick}> {item.title} </Link>
            </div>
        )
    }

}
