import "./App.css";
import Header from "./Component/Shear/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import About from "./Component/Pages/About/About";
import Contact from "./Component/Pages/Contact/Contact";
import Services from "./Component/Pages/Services/Services";
import Login from "./Component/Pages/login/Login";
import Signup from "./Component/Pages/Signup/Signup";
import NotFound from "./Component/Pages/NotFound/NotFound";
import Profile from "./Component/Pages/Profile/Profile";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import Footer from "./Component/Shear/Footer/Footer";
import OrderPage from "./Component/Pages/OderPage/OrderPage";
import AddServices from "./Component/Pages/AddServices/AddServices";
import ServiceDelete from "./Component/Pages/ServiceDelete/ServiceDelete";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderHistory from "./Component/Pages/OrderHistory/OrderHistory";

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
        <Route
          path="/order-page/:id"
          element={
            <RequireAuth>
              <OrderPage />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/add-service"
          element={
            <RequireAuth>
              <AddServices />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/delete-service"
          element={
            <RequireAuth>
              <ServiceDelete />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/order-history"
          element={
            <RequireAuth>
              <OrderHistory />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
