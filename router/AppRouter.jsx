import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SobremiPage from "../pages/SobremiPage";
import ScrollToTop from "../src/components/ScrollToTop";
const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/sobremi" element={<SobremiPage />}/>
                <Route path="/" element={<HomePage />}/>
                {/* <Route path="*" element={<Error404 />}/> */}
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRouter