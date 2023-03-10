import React from 'react'
import mStyles from './Navbar.module.css'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Mobile({fClick}) {

    let {barOpened, handleClick} = fClick

  return (
    <div className={mStyles.mobileMenu}>

        {
            (!barOpened )
            ? <MenuIcon className={mStyles.mobileIcon} onClick={handleClick} />
            : <CloseIcon onClick={handleClick}/>
        }

    </div>
  )
}

export default Mobile