import insta from '../assets/insta.png';
import fb from '../assets/fb.png';
import link from '../assets/link.png';

import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {NavLink} from 'react-router-dom';

const Footer = () => {
  return (
   <>
   <div className="footer">
        <h1 className="Nove">VYOM <span className="Halimum">Movement</span></h1>
        <p>450 NW Couch Street, Portland, Oregon 97209</p>
        <div className="btn">

        <NavLink to={'/contacto'}><button><FontAwesomeIcon icon={faPhone} />  (+54) 385123123 </button></NavLink>

        <NavLink to={'/sobremi'}><button> <FontAwesomeIcon icon={faUser} /> Contacto</button></NavLink>
        </div>
     </div>
   <div className="footer2">
      <ul>
        <li>
            <NavLink to={'/sobremi'}>Sobre mi</NavLink>
        </li>
        <li>
            <NavLink to={'/sobremi'}>Cursos</NavLink>
        </li>
        <li>
            <NavLink to={'/sobremi'}>Contacto</NavLink>
        </li>
 
       
      </ul>
      <div className="redes">
        <a href="#"><img src={fb} alt="" /></a>
        <a href="#"><img src={insta} alt="" /></a>
        <a href="#"><img src={link} alt="" /></a>
      </div>
    </div>  
    <hr />
    <div className="terminos">
    <ul>
      <li><a href="">Terminos & condiciones</a></li>
      <li>@2023 Hecho por <a href="" className="juan">juancinfante</a></li>
    </ul>

    </div>
   </>
  )
}
export default Footer;