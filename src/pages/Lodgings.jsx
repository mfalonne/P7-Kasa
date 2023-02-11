import { useParams } from "react-router-dom";
import { logements } from '../datas/data';
import Caroussel from '../components/Carrousel';
import Rating from "../components/Rating";
import  DropDown from "../components/DropDown";
import Profil from "../components/Profil";
import TagList from "../components/TagList";
import Error from "./Error";
import '../styles/Lodgings.css';

const Singlelodging = () => {
  const  id  = useParams();
  const logement = logements.find((logement) => logement.id === id.id);
   // Error handling if the lodging id is not correct
   if (logement=== undefined) {
    return <Error/>;
  }

  return (
    <div className='lodging container'>
        {logement.pictures && <Caroussel pictures={logement.pictures} alt={logement.title} />}
        <div className='lodging infos'>
            <div className='lodging info-left'>
                <p className='lodging title main-color'>{logement.title}</p>
                <p className='lodging location main-color'>{logement.location}</p>
                {logement.tags && <TagList tags={logement.tags}/>}
            </div>
            <div className='lodging info-right'>
                {logement.host && <Profil picture={logement.host.picture} name={logement.host.name}/>}
                <Rating rating={logement.rating}/>
            </div>
        </div>
        <div className='lodging dropdowns'>
            <DropDown title='Description' text={logement.description}/>
            {logement.equipments && <DropDown title='Équipements' text={logement.equipments.join('\n')}/>}
        </div>
    </div>
)
};

export default Singlelodging;