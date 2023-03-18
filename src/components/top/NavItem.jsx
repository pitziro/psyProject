import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'

import {ExpandMoreOutlined, ExpandLessOutlined} from '@mui/icons-material';

import mstyle from './Navbar.module.css'

export default function NavItem(props) {
    

    const {item, handleClick, barOpened} = props
    const [opened, setopen] = useState(false);

    const handleOpenSub = () => {
        setopen (prev => !prev)
    }

    useEffect(() => {
        setopen (false)
    }, [barOpened]);

    const navRefSub = useRef(null)
    
    useEffect(() => {
        const clickOutside = (evt) => {
            if ((navRefSub.current) && (!navRefSub.current.contains(evt.target))) {
                setopen(false)
            }
        }
        document.addEventListener('mousedown',clickOutside)
        
        return () => {
            document.removeEventListener('mousedown',clickOutside)
        };
    }, [navRefSub]);




    if (item.childrens){
        return (
            <div className={mstyle.categoryitem}> 
                <div className={mstyle.subcategory_title} onClick={handleOpenSub}>
                    <a href="#">{item.title}</a>
                    {opened ? <ExpandLessOutlined/> : <ExpandMoreOutlined/>}
                </div>

                <div ref={navRefSub} className={opened ? `${mstyle.subcategory_container} ${mstyle.opened}` : `${mstyle.subcategory_container} `}>
                {/* <div className={`${mstyle.subcategory_container} ${mstyle.opened}`}> */}
                    { item.childrens.map((child, index) => <NavItem key={index} item={child} handleClick={handleClick}/>) }
                </div>
            </div> 
        )
    } 
    
    else
    {
        return (
            <div className={mstyle.categoryitem}> 
                <Link to={item.path} onClick={handleClick}> {item.title} </Link>
            </div>
        )
    }

}
