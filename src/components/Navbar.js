import React, { useState } from 'react'
import { StyledNav, StyledSpan} from '../styles/Header.styled'
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import { NavLink,Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    
  return (
    <StyledNav>
        <h1>Delicious</h1>

        <span>
            <GiHamburgerMenu 
            onClick={()=> setIsOpen(true)} 
            size={30} 
            style={{color:'#49a6e9'}}/>
        </span>

        <ul className={isOpen && 'open'}>
            
            <StyledSpan onClick={()=> setIsOpen(false)} >
                <AiOutlineClose style={{color:'red'}}/>
            </StyledSpan>

            <li><NavLink to='/home' onClick={()=> setIsOpen(false)}>Home</NavLink></li>

            <li><NavLink to='/about' onClick={()=> setIsOpen(false)}>About</NavLink></li>

            <li><Link to='/' onClick={()=> {setIsOpen(false); sessionStorage.clear()}}>Logout</Link></li>
        </ul>
    </StyledNav>
  )
}

export default Navbar