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
                <button onClick={handleClick} className='item'>Bike</button>
                <button onClick={handleClick} className='item'>MotorBike</button>
                <button onClick={handleClick} className='item'>Plain</button>
            </div>
            <div className='center-footer'>Natute Section
                <button onClick={handleClick} className='item'>Birds</button>
                <button onClick={handleClick} className='item'>Tiger</button>
                <button onClick={handleClick} className='item'>Nature</button>
                <button onClick={handleClick} className='item'>Mountain</button>
            </div>
            <div className='right-footer'>Sports Section
                <button onClick={handleClick} className='item'>Cricket</button>
                <button onClick={handleClick} className='item'>Hockey</button>
                <button onClick={handleClick} className='item'>Tennis</button>
                <button onClick={handleClick} className='item'>Football</button>
            </div>
        </div>
    )
}

export default Footer;