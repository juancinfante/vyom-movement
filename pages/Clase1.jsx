import NavBar from "../src/components/NavBar"
import banner from '../src/assets/portada.jpg'
import { Link } from "react-router-dom"
import Footer from "../src/components/Footer"


const Clase1 = () => {
  return (
    <>
        <NavBar/>
        <div className="App">
            <div className="banner-clase">
                <img src={banner} alt="" />
                <h1>Streching Nivel 1</h1>
            </div>
            <div className="container">
                <div className="info-clase">
                    <h1>MARZO - JUNIO 2024</h1>
                    <p>Este programa está abierto a personas que tengan o no experiencia previa en el entrenamiento de la flexibilidad, que deseen profundizar sus conocimientos sobre esta práctica, aumentar su rango de movilidad y construir una base sólida para su musculatura. </p>
                    <h1>Modalidad de las clases</h1>
                    <p>Prácticas presenciales dos veces por semana. Duración de las clases 1:15hs 
                    Encuentros teóricos por Google meet una vez al mes, donde profundizaremos 1:30hs específicamente en ejercicios básicos de flexibilidad: Splits, segundas, puentes y plegados.
                    </p>
                    <h1>Duración </h1>
                    <p>4 meses comenzando el mes de marzo y concluyendo el mes de Junio
                    Cantidad de horas entre prácticas y encuentros online 46 hs</p>
                    <h1>Este programa incluye:</h1>
                    <p>- Guía para medir la flexibilidad.</p>
                    <p>- Material impreso que utilizaremos las primeras y últimas 4 clases impresas.</p>
                    <p>- PDF con rutina de ejercicios para practicar en casa. </p>
                    <h1>Valores del programa: </h1>
                    <p>Tu cupo quedará reservado con el pago de inscripción.
                    Los pagos mensuales deben realizarse del 1 al 10. 
                    </p>
                    <p>Tené en cuenta que los cupos son <span className="underline">limitados</span>. Las inscripciones cierran en Marzo. </p>
                    <div className="tabla-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>INSCRIPCIÓN</th>
                                    <th>Hasta el 31/12</th>
                                    <th>01 al 31/01</th>
                                    <th>01 al 29/02</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Transferencia/Efectivo</td>
                                    <td>$5000</td>
                                    <td>$6000</td>
                                    <td>$7000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="" className="btn-inscripcion">INSCRIBITE AQUI!</a>
                    <p className="mt-20">No se realizan devoluciones, ni reembolsos de la inscripción ni del abono mensual. 
                    </p>
                    <p>
                    Es <strong>importante</strong> que en caso de decidir tomar el taller, te <strong>comprometas a terminarlo</strong>, ya que los cupos son limitados, con seguimientos personalizados.
                    </p>
                    <p>
                    Si quieres probar las clases, ver si te gusta la forma de entrenamiento, o clases de vez en cuanto te recomiendo anotarte en las <Link className="link"><strong>CLASES REGULARES MULTINIVEL</strong></Link>
                    </p>
            </div>
            </div>
            <Footer/>
        </div>  
    </>
  )
}

export default Clase1