import React from 'react'
import '../Header/header.css'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <Link to="/"><h2>Online shop</h2></Link>
        <Link to="/cart"><button >My cart</button></Link>
      
    </div>
  )
}

export default Header
