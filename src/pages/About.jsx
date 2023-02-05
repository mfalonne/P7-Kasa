import  aboutHeader  from '../assets/About_header.jpg';
//import  DropDown from '../components/DropDown';
import  HeadImage from '../components/HeadImage';
import  DropDown from '../components/DropDown';
import { about_datas } from '../datas/about_datas';
import '../styles/About.css';


function About() {
    return(
        <div className='about container'>
            <HeadImage src={aboutHeader} alt='photo à propos' className='about-image' />
            <div className='about dp-container'>
            {about_datas.map((data) => 
                    <DropDown title={data.title} text={data.text} />
                )}
            </div>
        </div>
    )
}

export default About;