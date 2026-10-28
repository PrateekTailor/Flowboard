import mylogo from "../Images/logo-removebg-preview.png";
import { NavLink} from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <div>
        <div className="flex justify-center fixed w-full top-0 left-0 z-50 ">
        <div className="bg-black h-4 w-4 flex justify-center pt-0.4">
          <div className="bg-white h-4 w-4 mr-0.4 rounded-tr-xl"></div>
        </div>
        <nav className="h-9.5 w-150 bg-black rounded-bl-2xl rounded-br-2xl flex justify-between pointer-events-auto ">
          <div id="img" className="h-9 w-19 flex ">
            <img src={mylogo} className="h-13 w-18 pb-4" alt="" />
            <p className="font-sans antialiased text-white pt-2 text-sm">
              FlowBoard
            </p>
          </div>
          <div className="mt-1 ">
            <NavLink to="/signin" className="font-sans antialiased text-white mr-4 text-sm">Sign in</NavLink>
            <NavLink to="/reg" className="font-sans antialiased text-white mr-4 text-sm  bg-blue-600 pt-0.5 pl-2 pr-2 pb-1.5 rounded-lg">Sign up</NavLink>
          </div>
        </nav>
        <div className="bg-black h-4 w-4 flex justify-center pt-0.4">
          <div className="bg-white h-4 w-4 mr-0.4 rounded-tl-xl"></div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Navbar;
