import React from 'react'
import { IoSend } from "react-icons/io5";
import { FaMobile } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom'

import '../style/sidebar.css'

function Sidebar() {
    return (
        <>
            <div className='sidebar'>
                <div className='intro'>
                    <NavLink className='navlink' to='/docs'><h5><span className='icon'><IoSend /></span> Intro</h5></NavLink>
                    <ul>
                        <NavLink className='navlink' to='/docs'><li>How to use it</li></NavLink>
                        <NavLink className='navlink' to='/docs'><li>Test</li></NavLink>
                        <NavLink className='navlink' to='/docs'><li>Delay Responses</li></NavLink>
                    </ul>
                </div>
                <div className='product'>
                    <NavLink className='navlink' to='/docs/product'><h5><span className='icon'><FaMobile /></span> Products</h5></NavLink>
                    <ul>
                        <NavLink className='navlink' to='/docs/product'><li>Get all products</li></NavLink>
                        <NavLink className='navlink' to='/docs/product'><li>Get a single product</li></NavLink>
                        <NavLink className='navlink' to='/docs/product'><li>Filter products</li></NavLink>
                        <NavLink className='navlink' to='/docs/product'><li>Filter Products by Max & Min Price</li></NavLink>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar