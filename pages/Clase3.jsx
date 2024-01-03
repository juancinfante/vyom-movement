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
                <h1>Hatha vinyasa</h1>
            </div>
            <div className="container">
                <div className="info-clase">
                    <p>
                    Las clases de <strong> Hatha Vinyasa </strong>están diseñadas para todas las personas que busquen un enfoque activo en su práctica de yoga. 
Son clases intensas pero siempre donde se desafian musculos y articulaciones. Siempre respetando las necesidades individuales.
                    </p>
                    <p>
                    Esta modalidad de yoga ofrece una <strong> experiencia dinámica </strong>que va más allá de las prácticas convencionales.En cada sesión, fusionamos la respiración consciente, la fluidez y la quietud, así como la alineación física y energética, creando un equilibrio holístico para cuerpo y mente.
                    </p>
                    <p>
                    Es una practica <strong> super completa</strong>, ya que aumenta la resistencia, mejora la flexibilidad y la coordinación, reduce el estrés liberando tensiones mentales y fisicas, mejora la circulacion sanguinea y desintoxica el cuerpo revitalizanzo todo tu organismo
                    </p>
                    <p>
                    Enfoque enérgico en la ejecución de las asanas, donde cada postura fluye. 
                    </p>
                    <p>
                    Se trata de una práctica intensa que impulsa el fortalecimiento muscular y la mejora de la flexibilidad, llevándote más allá de tus límites habituales. 
                    </p>
                    <p>
                    Sumérgete en secuencias cuidadosamente elaboradas que desafían tu cuerpo de manera equilibrada. La creatividad en las secuencias no solo te mantiene comprometido, sino que también maximiza los beneficios físicos y mentales.
                    </p>
                    <p>
                        <strong>
                        Alineación Guiada:
                        </strong>
                        sincronizar tu respiración con el movimiento en un ritmo fluido. La atención consciente a la respiración no solo potencia tu práctica, sino que también calma la mente, permitiéndote sumergirse más profundamente en el momento presente.
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