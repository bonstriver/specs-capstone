import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)
    
    return (
    <>
        <nav className="navbar">
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                <i className='fa-solid fa-chess-rook'/>
                 <div className='title'>CHECKMATE</div>
                <i className='fa-solid fa-chess-rook'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas-fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                </ul>
                {button && <a className='a-btn' href="http://localhost:3000">PLAY</a>}
            </div>
        </nav>
    </>
    )
}

export default Navbar