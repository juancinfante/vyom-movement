import Footer from "../src/components/Footer"
import NavBar from "../src/components/NavBar"
import Sobremi from "../src/components/Sobremi"

const SobremiPage = () => {
  return (
    <>
    <div className="App">
        <NavBar />
        <div className="container">
            <Sobremi />
            <Footer />
        </div>
    </div>
    </>
    )
}

export default SobremiPage