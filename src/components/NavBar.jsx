/* eslint-disable no-unused-vars */
import { useState } from 'react';
import '../components/NavBar.css';
import { NavLink } from 'react-router-dom';
const NavBar = () => {

    const [active, setActive] = useState(false);

    const handleSetActive = (e) => {
        e.preventDefault();
        if(active){
            setActive(false);
        }else{
            setActive(true);
        }
    }
  return (
    <>
        <header>
            <nav className="navbar">
                {/* <a href="#" className="nav-branding">VYOM <span>Movement</span></a> */}
                <NavLink to={"/"} className="nav-branding" >VYOM <span>Movement</span></NavLink>


                <ul className={active ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item" onClick={handleSetActive}>
                        <NavLink to={"/sobremi"} className="nav-link" >Sobre mi</NavLink>
                    </li>
                    <li className="nav-item" onClick={handleSetActive}>
                        <NavLink to={"/clases"} className="nav-link" >Clases</NavLink>
                    </li>
                    <li className="nav-item" onClick={handleSetActive}>
                        <NavLink to={"/sobremi"} className="nav-link" >Contacto</NavLink>
                    </li>
                  
                </ul>

                <div className={active ? "hamburger active" : "hamburger"} onClick={handleSetActive}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    </>
  )
}

export default NavBar;

