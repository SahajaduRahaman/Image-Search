import React, { useEffect, useState } from 'react'
import { FetchAPI } from '../constant/FetchAPI'
import { Link } from 'react-router-dom'
import '../styles/Photos.css'
import { useSelector, useDispatch } from 'react-redux'
import { nextPage, prevPage } from '../actions'

const Photos = ({ item }) => {

    const currPage = useSelector((state) => state.Reducer);
    const dispatch = useDispatch();
    const [images, setImages] = useState([]);

    useEffect(() => {
        FetchAPI(`${currPage}&query=${item ? item : 'nature'}`).then((data) => setImages(data.results));
    },[item, currPage])

    return (
        <div className='container'>
            {
                images.map((item) => (
                    <div className='image-item'  key={item.id}>
                        <Link className='phoo' to={`photos/${item.id}`} >
                            <img className='phoo-image' src={item.urls.thumb} alt=''/>
                        </Link>
                    </div>
                ))
            }
            <div className='btn-div'>
                <button className='btn' onClick={() => dispatch(prevPage())}>Prev</button>
                <button className='btn' onClick={() => dispatch(nextPage())}>Next</button>
            </div>
        </div>
    )
}

export default Photos