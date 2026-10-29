import { useEffect, useRef, useState } from "react";
import userimg from "../Images/images.jpg";
import { FaSignOutAlt, FaXbox, FaXing } from "react-icons/fa";
import {  FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Board = () => {
  const [display, setdisplay] = useState(false);
  const [board,setboard] = useState(false);
  const dropdwonref = useRef(null);
  const toggale = () => {
    setdisplay(!display);
  };
  useEffect(() => {
    const handleclickoutside = (event) => {
      if (dropdwonref.current && !dropdwonref.current.contains(event.target)) {
        setdisplay(false);
      }
    };
    document.addEventListener("mousedown", handleclickoutside);
    return () => {
      document.removeEventListener("mousedown", handleclickoutside);
    };
  }, []);
  return (
    <>
      <div ref={dropdwonref}>
        <div className="flex justify-between pr-20">
          <div className="m-5">
            <span className="text-2xl font-semibold ml-10">FlowBoard</span>
          </div>
          <button onClick={toggale} className="cursor-pointer">
            <div className="h-10 w-10 bg-gray-200 rounded-4xl m-50 mr-0 mb-0 mt-5">
              <img src={userimg} alt="" />
            </div>
            {display ? (
              <div className="h-60 w-50 bg-white fixed z-10 rounded-xl border-1 border-black/20 flex justify-center flex-col">
                <div className="h-15 w-15 bg-gray-200 rounded-4xl ml-18 ">
                  <img src={userimg} alt="" />
                </div>
                <div className="mb-5 mt-2 ml-2 flex flex-col ">
                    <span className="">User name</span>
                    <span className="text-xs opacity-60">you@example.com</span>
                </div>
                <hr className="bg-gray-300 text-2xl opacity-20 ml-5 mr-5 " />
                <div className="flex ">
                    <FaSignOutAlt className="ml-5 mt-5 text-xl"></FaSignOutAlt>
                    <NavLink className="mt-4 ml-3" to="/">Sign out</NavLink>
                </div>
              </div>
            ) : null}
          </button>
        </div>
        <hr className="bg-gray-300 text-2xl opacity-20 ml-5 mr-5" />
        <div className="flex justify-between m-15 mt-8">
            <p className="text-2xl font-semibold">Your boards</p>
            <button onClick={()=>setboard(true)} className="text-xl border-2 bg-blue-600 rounded-lg text-white/90 p-1 cursor-pointer flex gap-1 pl-2 pr-3"><p className="text-3xl -mt-1.5">+</p> New board</button>
        </div>
        <div className="bg-[#ebe6e742] h-150 w-350 m-15 -mt-10 rounded-xl flex flex-col">
            {
            board?<div className=" fixed h-70 w-120 bg-white ml-120 mt-15 rounded-xl">
                <FaXmark onClick={()=>setboard(false)} className="ml-110 mt-5 text-2xl opacity-70 cursor-pointer"></FaXmark>
                <p className="m-10 text-2xl mt-0  mb-0 font-medium">Add board</p>
                <div className="flex flex-col">
                <label htmlFor="title" className="m-10 mb-0 mt-5 text-lg">Title</label>
                <input type="text" id="title" className="border-1 rounded-lg m-10 mt-0 p-1 text-lg"  placeholder=" Your title"/>
                <NavLink to="/boardview/b1">
                <button className="bg-blue-600 m-10 mt-0 p-2 hover:bg-white border-1 hover:border-black/50 hover:text-black cursor-pointer text-amber-50 rounded-lg">Add board</button>
                </NavLink>
                </div>
            </div>:null
            }
            <span className="ml-153 mt-60 text-3xl font-medium">No boards yet</span>
            <span className="ml-110 mt-2 text-2xl">Create your first board to start tracking applications.</span>
        </div>
      </div>
    </>
  );
};
export default Board;
