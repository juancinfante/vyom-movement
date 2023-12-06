import ag4 from '../src/assets/ag4.png';
import ag5 from '../src/assets/ag5.png';
import ag6 from '../src/assets/ag6.png';
import pose1 from '../src/assets/pose1.jpg';
import pose2 from '../src/assets/pose2.jpg';
import pose3 from '../src/assets/pose3.jpg';
import NavBar from '../src/components/NavBar';
import Sobremi from '../src/components/Sobremi';
import Footer from '../src/components/Footer';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="App">
      <div className="portada">
          <h1 className="Nove">VYOM</h1> 
          <h4 className="Halimum">Movement</h4>
      </div>
      <div className="container">

      <h1 className="separador" >Descubrì la libertad en cada movimiento</h1>
      <div className="section3">
        <div className="info">
          <img src={ag5} alt="" />
          <h1>Respirà</h1>
          <p>
            Conectà con la esencia vital que fluye a través de vos, permitiendo que el presente te llene de energía renovada.</p>
        </div>
        <div className="info">
          <img src={ag4} alt="" />
          <h1>Conectà</h1>
          <p>
            Enlázate con tu ser interior, conecta con cada parte de ti mismo: mente, cuerpo y espíritu. Extiende esa conexión hacia el entorno que te rodea, sintiéndote parte de algo más grande.</p>
        </div>
        <div className="info">
          <img src={ag6} alt="" />
          <h1>Liberà</h1>
          <p>
          Libera cualquier carga que no te sirva. Suelta expectativas, preocupaciones y permite que tu ser se expanda hacia la libertad. Desconéctate de las limitaciones y fluye con la energía del momento presente.
          </p>
        </div>
      </div>
      

     

      <h1 className="separador">Comprender los fundamentos del movimiento permite una práctica segura y de apoyo.</h1>

      <div className="section2">
        <div className="info">
          <img src={pose2} alt="" className="border-top-right-radius" />
          <h1>Mente</h1>
          <p>La meditación es una práctica de entrenamiento mental que te enseña a ralentizar los pensamientos acelerados.</p>
        </div>
        <div className="info">
          <img src={pose1} alt="" className="border-radius" />
          <h1>Salud Mental</h1>
          <p>Ser más conscientes del momento presente puede ayudarnos a disfrutar del mundo que nos rodea.</p>
        </div>
        <div className="info">
          <img src={pose3} alt="" className="border-top-left-radius" />
          <h1>Cuerpo</h1>
          <p>El cuerpo es de suma importancia para nuestra salud holística, ya que es aquí donde residen los reinos mental y espiritual.</p>
        </div>
      </div>

    <Sobremi />  
    <Footer />
    </div>
    </div>
    </>
  )
}

export default HomePage