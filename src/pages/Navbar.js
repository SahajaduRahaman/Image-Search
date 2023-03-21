import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { homePage } from '../actions'
import Logo from '../logo.png'
import '../styles/Navbar.css'

const Navbar = ({ item, setItem }) => {

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTimeout(() => {
            setItem(e.target.value);
        }, 3000);
    }

    const handleLink = () => {
        setItem("");
        dispatch(homePage())
    }

    return (
        <div className='navbar'>
            <Link className='icon' to="/" style={{ display: 'flex', alignItems: 'center' }} onClick={handleLink}>
                <img src={Logo} alt="logo" height="40px" />
                Home
            </Link>
            <input type="text" value={item} onChange={handleChange} placeholder="Search Photos....."/>
        </div>
    )
}

export default Navbar