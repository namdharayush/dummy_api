import React from 'react'
import '../style/header.css'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='navbar_custom '>
            <Link to="/" className='link'><h2>dummy<span>JSON</span></h2></Link>
            <div>
                <NavLink className='link' to="/"><h4>Home</h4></NavLink>
                <NavLink className='link' to="/docs"><h4>Docs</h4></NavLink>
                <NavLink className='link' to="/githhub"><h4>GitHub</h4></NavLink>
            </div>
        </div>
    )
}

export default Header