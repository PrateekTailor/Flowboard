import Navbar from "../Components/Navbar";
import { FaGithub, FaLinkedin, FaLock } from "react-icons/fa";
import { BsColumnsGap } from "react-icons/bs";
import { RxDragHandleDots2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className=" w-full bg-gradient-to-b from-[#ffffff] via-[#f4f7fc] via-[#e1ebf7] to-[#c7dcfaa3] text-[#1d1d1f] font-sans antialiased selection:bg-blue-500 selection:text-white min-h-screen">
       
        <div className="flex flex-col justify-center mt-40 relative z-10">
          <div className="flex justify-center">
            <span className="text-7xl font-bold">P</span>
            <span className="text-7xl font-bold">l</span>
            <span className="text-7xl font-bold">a</span>
            <span className="text-7xl font-bold">i</span>
            <span className="text-7xl font-bold">n.</span>
          </div>
          <div className="flex justify-center">
            <span className="text-7xl font-medium">Y</span>
            <span className="text-7xl font-medium">o</span>
            <span className="text-7xl font-medium">u</span>
            <span className="text-7xl font-medium">r</span>
            <span className="text-7xl font-medium">T</span>
            <span className="text-7xl font-medium">a</span>
            <span className="text-7xl font-medium">s</span>
            <span className="text-7xl font-medium">k</span>
            <span className="text-7xl font-medium">s.</span>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <span className="text-lg mt-3 flex justify-center font-serif [text-shadow:0_4px_12px_rgba(0,0,0,0.3)]">
              Built for placement season.
            </span>
          </div>
          <div>
            <span className="flex justify-center font-serif text-lg [text-shadow:0_4px_12px_rgba(0,0,0,0.3)]">
              Track your placement applications on one board.
            </span>
          </div>
        </div>
        <div className="ml-30 mt-20 pr-40">
          <span className="text-4xl font-medium ">
            Know where you stand, every day
          </span>
          <br />
          <span>
            Each stage stays visible, so no deadline gets lost in the pile.
          </span>
        </div>
        <div className="h-100 w-340 bg-[#ffffff6e] mt-10 ml-20 rounded-2xl flex ">
          <div className="h-90 w-75 bg-blue-50 m-5 rounded-2xl ">
            <div className="flex justify-between">
              <span className="pl-5">Applied</span>
              <span className="pr-5">2</span>
            </div>
            <div className="bg-[#ffffff8c] w-65 h-35 m-5 rounded-2xl border-2 border-black/7">
              <p className="p-3 pb-0 text-2xl font-semibold">Nimbus Tech</p>
              <p className="p-3 pt-0 pb-0 text-md font-semibold opacity-70">
                SDE Intern
              </p>
              <p className="p-3 pt-0 pb-0 text-md font-semibold opacity-90">
                Tags : DSA , Development
              </p>
              <div className="flex justify-between">
                <span className="m-5 ml-3 mt-2 bg-[#cf222ec7] text-[#ffffffe6] rounded-lg  pl-3  pb-0.5 pr-3  ">
                  High
                </span>
                <span className="pr-3 pt-2 opacity-50 text-sm">2 Nov</span>
              </div>
            </div>
            <div className="bg-[#ffffff8c] w-65 h-35 m-5 rounded-2xl border-2 border-black/7">
              <p className="p-3 pb-0 text-2xl font-semibold">Pixel Works</p>
              <p className="p-3 pt-0 pb-0 text-md font-semibold opacity-70">
                Frontend Intern
              </p>
              <p className="p-3 pt-0 pb-0 text-md font-semibold opacity-90">
                Tags : Development
              </p>
              <div className="flex justify-between">
                <span className="m-5 ml-3 mt-2 bg-[#e33c17c1] text-[#ffffffe6] rounded-lg  pl-3  pb-0.5 pr-3  ">
                  medium
                </span>
                <span className="pr-3 pt-2 opacity-50 text-sm">8 Nov</span>
              </div>
            </div>
          </div>
          <div className="h-90 w-75 bg-blue-50 m-5 rounded-2xl">
            <div className="flex justify-between">
              <span className="pl-5">OA</span>
              <span className="pr-5">1</span>
            </div>
            <div className="bg-[#ffffff8c] w-65 h-35 m-5 rounded-2xl border-2 border-black/7">
              <p className="p-3 pb-0 text-2xl font-semibold">Orbit Soft</p>
              <p className="p-3 pt-0 pb-0 text-md font-semibold opacity-70">
                Backend Intern
              </p>
              <p className="p-3 pt-0 pb-0 text-md font-semibold opacity-90">
                Tags : Development
              </p>
              <div className="flex justify-between">
                <span className="m-5 ml-3 mt-2 bg-[#cf222ec7] text-[#ffffffe6] rounded-lg  pl-3  pb-0.5 pr-3  ">
                  High
                </span>
                <span className="pr-3 pt-2 opacity-50 text-sm">30 Oct</span>
              </div>
            </div>
          </div>
          <div className="h-90 w-75 bg-blue-50 m-5 rounded-2xl ">
            <div className="flex justify-between">
              <span className="pl-5">Interview</span>
              <span className="pr-5">1</span>
            </div>
            <div className="bg-[#ffffff8c] w-65 h-35 m-5 rounded-2xl border-2 border-black/7">
              <p className="p-3 pb-0 text-2xl font-semibold">Vertex Labs</p>
              <p className="p-3 pt-0 pb-0 text-md font-semibold opacity-70">
                Full Stack Intern
              </p>
              <p className="p-3 pt-0 pb-0 text-md font-semibold opacity-90">
                Tags : Development
              </p>
              <div className="flex justify-between">
                <span className="m-5 ml-3 mt-2 bg-[#cf222ec7] text-[#ffffffe6] rounded-lg  pl-3  pb-0.5 pr-3  ">
                  High
                </span>
                <span className="pr-3 pt-2 opacity-50 text-sm">3 Nov</span>
              </div>
            </div>
          </div>
          <div className="h-90 w-75 bg-blue-50 m-5 rounded-2xl ">
            <div className="flex justify-between">
              <span className="pl-5">Offer</span>
              <span className="pr-5">1</span>
            </div>
            <div className="bg-[#ffffff8c] w-65 h-35 m-5 rounded-2xl border-2 border-black/7">
              <p className="p-3 pb-0 text-2xl font-semibold">Quanta Systems</p>
              <p className="p-3 pt-0 pb-0 text-md font-semibold opacity-70">
                Web dev Intern
              </p>
              <p className="p-3 pt-0 pb-0 text-md font-semibold opacity-90">
                Tags : Development
              </p>
              <div className="flex justify-between">
                <span className="m-5 ml-3 mt-2 bg-[#22cf59c7] text-[#ffffffe6] rounded-lg  pl-3  pb-0.5 pr-3  ">
                  Low
                </span>
                <span className="pr-3 pt-2 opacity-50 text-sm">20 Nov</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#c7dcfa9c] to-[#ffff] h-30 w-full"></div>
      <div className="min-h-screen">
        <div className="m-30 mt-0">
          <span className="text-4xl font-medium">What you get</span>
          <div className="flex h-60 mt-5">
            <div className="h-52 w-120 m-10 mr-0 rounded-2xl ml-0 border-2 border-black/10">
              <BsColumnsGap className="text-2xl m-6 mb-3"></BsColumnsGap>
              <span className="text-2xl font-semibold pl-5">
                Track application
              </span>
              <p className="text-xl p-5 pt-2 pl-5">
                Applied, OA, Interview, Offer and Rejected columns show where
                every application stands.
              </p>
            </div>
            <div className="h-52 w-120 m-10 mr-0 rounded-2xl border-2 border-black/10">
              <RxDragHandleDots2 className="text-3xl m-4 "></RxDragHandleDots2>
              <span className="text-2xl font-semibold pl-5">Drag and drop</span>
              <p className="text-xl p-5 pt-2 pl-5">
                Move a card to another column, and its status updates right
                away.
              </p>
            </div>
            <div className=" border-2 border-black/10 h-52 w-120 m-10 rounded-2xl">
              <FaLock className="text-2xl m-4"></FaLock>
              <span className="text-2xl font-semibold pl-5">
                Private Boards
              </span>
              <p className="text-xl p-5 pt-2 pl-5">
                Your data is visible only to you. Your board opens only after
                you log in.
              </p>
            </div>
          </div>
        </div>
        <div className="m-30 mt-0">
          <span className="text-4xl font-medium">How it Works</span>
          <div className="flex h-60 mt-5">
            <div className="h-52 w-120 m-10 mr-0 rounded-2xl ml-0 border-2 border-black/10">
              <p className="text-2xl m-6 mb-3">01</p>
              <span className="text-2xl font-semibold pl-5">Sign up</span>
              <p className="text-xl p-5 pt-2 pl-5">
                Create an account with your email and password.
              </p>
            </div>
            <div className="h-52 w-120 m-10 mr-0 rounded-2xl border-2 border-black/10">
              <p className="text-2xl m-6 mb-3">02</p>
              <span className="text-2xl font-semibold pl-5">
                Create a Board
              </span>
              <p className="text-xl p-5 pt-2 pl-5">
                Your new board comes with five columns, ready to use.
              </p>
            </div>
            <div className=" border-2 border-black/10 h-52 w-120 m-10 rounded-2xl">
              <p className="text-2xl m-6 mb-3">03</p>
              <span className="text-2xl font-semibold pl-5">
                Add applications
              </span>
              <p className="text-xl p-5 pt-2 pl-5">
                Add each application and move it forward as it progresses.
              </p>
            </div>
          </div>
        </div>
        <div  className=" m-30 h-90 w-310 bg-white rounded-2xl border border-gray-300/100 shadow-md flex justify-center flex-col ">
          <p className="mt-10 ml-100 text-4xl font-medium">
            Start your task board today
          </p>
          <NavLink
            to="/reg"
            className="font-sans antialiased text-white mr-143 text-md  bg-blue-600 pt-2 pl-4  pb-2.5 pr- rounded-lg m-10 ml-139 border-black "
          >
            Get started
          </NavLink>
        </div>
        {/* <hr className="border-t border-gray-300 my-4 ml-5 mr-5" /> */}
        <div className="bg-black h-100">
            <div className="flex ">
            <div className="m-20 mb-0">
            <span className="text-2xl text-white ">FlowBoard</span>
            <p className="text-white">Track your placement applications on one board.</p>
          </div>
          <div className="m-20 ">
            <NavLink to="/signin" className=" cursor-pointer font-sans antialiased text-white  mr-4 text-sm">Sign in</NavLink>
            <NavLink to="/reg" className=" cursor-pointer font-sans antialiased text-white mr-4 text-sm  bg-blue-600 pt-0.5 pl-2 pr-2 pb-1.5 rounded-lg">Get started</NavLink>
          </div>
            </div>
          <div className="flex gap-2 text-xl m-20 mt-0 mb-0">
              <NavLink className=" cursor-pointer text-white" to="https://github.com/PrateekTailor"><FaGithub></FaGithub></NavLink>
            <NavLink className="cursor-pointer text-white"><FaLinkedin></FaLinkedin></NavLink>
          </div>
          <p className="opacity-50 text-white ml-20 pt-1">© 2026 FlowBoard-All rights reserved</p>
        </div>
        
      </div>
    </>
  );
};
export default Homepage;
