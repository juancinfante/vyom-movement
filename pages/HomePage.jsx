import ag1 from '../src/assets/ag1.png';
import ag2 from '../src/assets/ag2.png';
import ag3 from '../src/assets/ag3.png';
import ag4 from '../src/assets/ag4.png';
import ag5 from '../src/assets/ag5.png';
import ag6 from '../src/assets/ag6.png';
import pose1 from '../src/assets/pose1.jpg';
import pose2 from '../src/assets/pose2.jpg';
import pose3 from '../src/assets/pose3.jpg';
import clase1 from '../src/assets/clase1.jpg';
import clase2 from '../src/assets/clase2.jpg';
import clase3 from '../src/assets/clase3.jpg';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';
import { Link } from 'react-router-dom';



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

      <h1 className="separador" id="sobremi">Sobre mi</h1>
    
    <div className="section1 ">
  <img src={ag1} alt="" />
  <div className="info">
    <p className="">Hola! 
    Mi nombre es Agustina Suarez. Es un placer estar aquí para compartir un poco sobre mi viaje y pasión por el yoga.
    Soy instructora de yoga certificada con una formación integral obtenida en el Centro Samastah de México. Este proceso de formación me brindó una triple certificación que abarca Hatha, Vinyasa y Ashtanga Yoga, permitiéndome explorar y enseñar diversas modalidades.
    </p>
  </div>
</div>
      <div className="section1">
      <img src={ag2} alt=""  className="visible"/>
        <div className="info">
          <p>Además, cuento con la certificación como instructora de stretching y corrección postural otorgada por AMAIP. Esta formación me ha permitido abordar el bienestar integral, no solo a través de las prácticas de yoga, sino también mediante enfoques específicos para mejorar la postura y la flexibilidad.
          </p>
        </div>
        <img src={ag2} alt="" className="visible2"/>
      </div>

      <div className="section1">
        <img src={ag3} alt="" />
        <div className="info">
          <p>Constantemente busco la mejora y el perfeccionamiento, participando en cursos y talleres que enriquecen mi práctica y mi capacidad como instructora. Para mí el aprendizaje es un viaje continuo y estoy comprometida con brindar lo mejor a mis estudiantes.
          </p>
        </div>
      </div>
    <h1 className="separador">Clases</h1>

    <div className="clases">
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
          <h4>Hatha vinyasa Yoga</h4>
          <p>Este programa está abierto a personas que tengan o no experiencia previa en el entrenamiento de la flexibilidad</p>
          <Link to={'/clase1'}>Ver mas →</Link>
        </div>
      </div>
    </div>
    <Footer />



    </div>
    </div>
    </>
  )
}

export default HomePage