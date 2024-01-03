import clase1 from '../src/assets/clase1.jpg';
import clase2 from '../src/assets/clase2.jpg';
import clase3 from '../src/assets/clase3.jpg';
import { Link } from 'react-router-dom';
import Footer from '../src/components/Footer';
import NavBar from '../src/components/NavBar';
import banner from '../src/assets/portada.jpg'

const Clases = () => {
  return (
    <>  
        <div className="App">
            <NavBar/>
                <div className="banner-clase">
                    <img src={banner} alt="" />
                    <h1>Clases</h1>
                </div>
                <div className="container">
                    <div className="clases mt-50">
                    <div className="clase">
                        <img src={clase1} alt="" />
                        <div className="info">
                        <h4>Streching - Nivel 1</h4>
                        <p>Este programa está abierto a personas que tengan o no experiencia previa en el entrenamiento de la flexibilidad</p>
                        <Link to={'/clase1'}>Ver mas →</Link>
                        </div>
                    </div>
                    <div className="clase">
                        <img src={clase2} alt="" />
                        <div className="info">
                        <h4>Clases regulares de flexibilidad</h4>
                        <p>En este programa, nos encontramos dos veces por semana para explorar el mundo del entrenamiento de la flexibilidad.</p>
                        <Link to={'/clase2'}>Ver mas →</Link>
                        </div>
                    </div>
                    <div className="clase">
                        <img src={clase3} alt="" />
                        <div className="info">
                        <h4>Hatha vinyasa</h4>
                        <p>Este programa está abierto a personas que tengan o no experiencia previa en el entrenamiento de la flexibilidad</p>
                        <Link to={'/clase3'}>Ver mas →</Link>
                        </div>
                    </div>
                    </div>
                </div>
                <Footer />
        </div>
    </>
  )
}

export default Clases