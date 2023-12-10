
import {Toaster} from "react-hot-toast";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import { Outlet } from "react-router-dom";


const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Toaster />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
