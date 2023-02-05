import { Link } from 'react-router-dom';
import '../styles/Thumb.css';

function Thumb(props) {
    const path = '/Lodgings/'+ props.id;
    const imgSrc = props.cover;
    const title = props.title;
    return(
        <Link to={path} className='thumb link'>
            <img src={imgSrc} alt={title} className='thumb img'/>
            <div className='thumb linear-gradient' />
            <p className='thumb title'>{title}</p>
        </Link>
    )
}

export default Thumb;