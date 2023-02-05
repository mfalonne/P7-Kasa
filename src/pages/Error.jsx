import { Link } from 'react-router-dom';
import '../styles/Error.css';

function Error() {
    return(
        <div className='not-found container'>
            <p className='not-found code main-color'>404</p>
            <p className='not-found message main-color'>Oups! La page que vous avez demandez n'existe pas</p>
            <Link to="/" className='not-found link main-color'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error;