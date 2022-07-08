import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Header from "../components/Header"
import About from "../pages/About"
import Details from "../pages/Details"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Error from "../pages/Error"
import PrivateRouter from "./PrivateRouter"

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
          
            <Route path="/home" element={<PrivateRouter/>}>
              <Route path="/home" element={<Home/>}/>
            </Route>

            <Route path="/about" element={<PrivateRouter/>}>
              <Route path="/about" element={<About/>}/>
            </Route>

            <Route path="/details" element={<PrivateRouter/>}>
             <Route path="/details/:label" element={<Details/>}/>
            </Route>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter