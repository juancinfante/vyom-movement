/* eslint-disable no-unused-vars */
import { useState } from 'react';
import '../components/NavBar.css';
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
                <a href="#" className="nav-branding">VYOM <span>Movement</span></a>

                <ul className={active ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={handleSetActive}>Sobre mi</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={handleSetActive}>Cursos</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={handleSetActive}>Contacto</a>
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

