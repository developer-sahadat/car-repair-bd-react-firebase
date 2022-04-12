import "./App.css";
import Header from "./Component/Shear/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Shear/Home/Home/Home";
import About from "./Component/Pages/About/About";
import Contact from "./Component/Pages/Contact/Contact";
import Services from "./Component/Pages/Services/Services";
import Login from "./Component/Pages/login/Login";
import Signup from "./Component/Pages/Signup/Signup";
import NotFound from "./Component/Pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
