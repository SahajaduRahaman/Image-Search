import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = ({ setItem }) => {

    const navigate = useNavigate();

    const handleClick = (e) => {
        setItem(e.target.innerHTML.toLowerCase());
        navigate('/');
    }

    return (
        <div className='footer'>
            <div className='left-footer'>Vehicle Section
                <button onClick={handleClick} className='item'>Car</button>
                <button onClick={handleClick} className='item'>McLaren</button>
                <button onClick={handleClick} className='item'>MotorBike</button>
                <button onClick={handleClick} className='item'>Ferrari</button>
            </div>
            <div className='center-footer'>Natute Section
                <button onClick={handleClick} className='item'>Birds</button>
                <button onClick={handleClick} className='item'>Jungle</button>
                <button onClick={handleClick} className='item'>Nature</button>
                <button onClick={handleClick} className='item'>Mountain</button>
            </div>
            <div className='right-footer'>Others Section
                <button onClick={handleClick} className='item'>Games</button>
                <button onClick={handleClick} className='item'>Sunset</button>
                <button onClick={handleClick} className='item'>Galaxy</button>
                <button onClick={handleClick} className='item'>Painting</button>
            </div>
        </div>
    )
}

export default Footer;