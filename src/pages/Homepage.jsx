import  homeHeader  from '../assets/Home_header.jpg';
import '../styles/Homepage.css';
import  HeadImage from '../components/HeadImage';
import  Thumb from '../components/Thumb';
import { logements } from '../datas/data';

function Homepage() {

    return(
        <div className='home container'>
            <HeadImage src={homeHeader} alt='photo accueil' title='Chez vous, partout et ailleurs' className='home-head-image'/>
            <main className='home list'>
                {logements.map((el, index) => <Thumb cover={el.cover} title={el.title} key={index} id={el.id}/>)}
            </main>
        </div>
    )
}

export default Homepage;