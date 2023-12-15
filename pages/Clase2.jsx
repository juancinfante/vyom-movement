import NavBar from "../src/components/NavBar"
import banner from '../src/assets/portada.jpg'
import Footer from "../src/components/Footer"

const Clase2 = () => {
  return (
    <>
        <NavBar/>
        <div className="App">
            <div className="banner-clase">
                <img src={banner} alt="" />
                <h1>Clases regulares de flexibilidad</h1>
            </div>
            <div className="container">
                <div className="info-clase">
                    <h1>Modalidad de las clases</h1>
                    <p>
                    En este programa, nos encontramos dos veces por semana para explorar el mundo del entrenamiento de la flexibilidad. 
                    </p>
                    <p>
                    Trabajamos sobre un enfoque integral destinado a potenciar la flexibilidad a través de series, estiramientos dinámicos y técnicas de respiración. Nuestro objetivo es mejorar progresivamente y optimizar los rangos de movimiento de manera segura y efectiva.
                    </p>
                    <p>
                    En estas clases vos  decides cuándo unirte y cuánto tiempo dedicar a estas sesiones.
                    </p>
                    <p>
                    Diseñadas para abarcar todos los niveles, desde principiantes hasta intermedios, las clases ofrecen un ambiente inclusivo y desafiante, ya sea que busques mejorar tu agilidad, aumentar tu rango de movilidad o simplemente liberar el estrés acumulado. 
                    </p>
                    <a href="" className="btn-inscripcion">INSCRIBITE AQUI!</a>
                </div>
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default Clase2       