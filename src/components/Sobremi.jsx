import ag1 from '../assets/ag1.png';
import ag2 from '../assets/ag2.png';
import ag3 from '../assets/ag3.png';



const Sobremi = () => {
  return (
    <>
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
      
      
    
    </>
  )
}

export default Sobremi