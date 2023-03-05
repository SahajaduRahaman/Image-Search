import { useParams } from 'react-router-dom'
import '../styles/PhotoDetails.css'

const PhotoDetails = () => {

    const { id } = useParams();

    return (
        <div className='photo-div'>
            <img src={`https://source.unsplash.com/${id}`} alt="" />
        </div>
    )
}

export default PhotoDetails