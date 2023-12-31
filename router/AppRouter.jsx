import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SobremiPage from "../pages/SobremiPage";
import ScrollToTop from "../src/components/ScrollToTop";
import Clase1 from "../pages/Clase1";
import Clase2 from "../pages/Clase2";
import Clase3 from "../pages/Clase3";
import Clases from "../pages/Clases";
import Contacto from "../pages/Contacto";
const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/sobremi" element={<SobremiPage />}/>
                <Route path="/" element={<HomePage />}/>
                <Route path="/clases" element={<Clases />}/>
                <Route path="/clase1" element={<Clase1 />}/>
                <Route path="/clase2" element={<Clase2 />}/>
                <Route path="/clase3" element={<Clase3 />}/>
                <Route path="/contacto" element={<Contacto />}/>
                {/* <Route path="*" element={<Error404 />}/> */}
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRouter