import { mockBoard } from "../Data/mockBoard";
import { NavLink, useParams } from "react-router-dom";
import userimg from "../Images/images.jpg";
import { useState } from "react";
import { LuArrowLeft } from "react-icons/lu";
const Boardview = () => {
  const [display, setdisplay] = useState(false);
  const [addtask,setaddtask] = useState(false);
  const { id } = useParams();
  console.log("Board id:", id);
  const board = mockBoard.find((b) => b._id === id);
  if (!board) {
    return (
      <>
        <h1>Board not found</h1>
        <NavLink to="/boardview">Back to Board</NavLink>
      </>
    );
  }
  const toggale = () => {
    setdisplay(!display);
  };
  const applied = board.column.find((col)=>col.title1 === "Applied");
  const oa = board.column.find((col)=>col.title2 === "OA");
  const interview = board.column.find((col)=>col.title3 === "Interview");
  const offer = board.column.find((col)=>col.title4 === "Offer");
  const reject = board.column.find((col)=>col.title5 === "Reject");
  return (
    <>
      <div>
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
                  <NavLink className="mt-4 ml-3" to="/">
                    Sign out
                  </NavLink>
                </div>
              </div>
            ) : null}
          </button>
        </div>
        <hr className="bg-gray-300 text-2xl opacity-20 ml-5 mr-5 mb-10" />

        <div>
            <NavLink className="h-10 w-55 bg-blue-600 p-1 m-10  pl-4 pr-2 -pt-3 text-2xl rounded-lg text-amber-50 flex" to="/board"><LuArrowLeft className="mt-1 -ml-1 mr-1"></LuArrowLeft> Back to boards</NavLink>
        </div>
        <div className="flex w-full mt-10">
            <div className="bg-gray-100 h-screen w-100 m-5 rounded-lg">
                <div className="flex justify-between m-5 text-md font-medium">
                {
                    board.column.map((col)=>(
                        <div>
                            <p>{col.title1}</p>
                            
                        </div>
                    ))
                }
                <p>{applied?.tasks1.length ?? 0}</p>
                </div>
                <div className="h-40 w-62 ml-4 bg-white rounded-lg">
                    <button className="mt-32 bg-gray-200 pl-24 pr-24 ">Remove</button>
                </div>
                <button onClick={()=>setaddtask(true)} className="bg-gray-200 pl-24 pr-24 ml-3.5 mr-1 mt-4 pt-1 pb-1 rounded-md ">Add task</button>
                {
                    addtask?<div className="h-105 w-140 bg-[#ffffff9c] shadow-lg relative ml-120 -mt-65 rounded-lg">
                        <div className="flex flex-col m-5 pt-5">
                        <p className="text-2xl font-medium">Add task</p>
                        <label htmlFor="company" className="text-md mb-1 mt-2">Company name</label>
                        <input type="text" placeholder="Your company name" className="border-1 rounded-md p-1" />
                        <label htmlFor="role" className="text-md mb-1 mt-3">Role</label>
                        <input type="text" placeholder="Your role" className="border-1 rounded-md p-1" />
                        <p className="mt-3">Tags</p>
                        <select name="" id="" className="border-1 rounded-md mt-1 p-1">
                            <option value="Dsa">DSA</option>
                            <option value="Web">Full stack developer</option>
                            <option value="Web">Backend developer</option>
                            <option value="Web">Frontend developer</option>
                            <option value="Web">Cloud developer</option>
                        </select>
                        <p className="mt-2">Duedate</p>
                        <input type="date" className="border-1 rounded-md p-1"/>
                        <button  className="mt-5 bg-blue-600 text-white p-1.5 rounded-md hover:bg-white border-2 border-black border-black/10 hover:text-black  hover:broder-black/70">Add task</button>
                        </div>
                    </div>:null
                }
            </div>
            <div className="bg-gray-100 h-screen w-100 m-5 ml-0 rounded-lg">
                <div className="flex">

                {
                    board.column.map((col)=>(
                        <div>
                            <p>{col.title2}</p>
                        </div>
                    ))
                }
                <p>{oa?.tasks2.length ?? 0}</p>
                </div>
            </div>
            <div className="bg-gray-100 h-screen w-100 m-5 ml-0 rounded-lg">
                <div className="flex">

                {
                    board.column.map((col)=>(
                        <div>
                            <p>{col.title3}</p>
                        </div>
                    ))
                }
                <p>{interview?.tasks3.length ?? 0}</p>
                </div>
            </div>
            <div className="bg-gray-100 h-screen w-100 m-5 ml-0 rounded-lg">
                <div className="flex">

                {
                    board.column.map((col)=>(
                        <div>
                            <p>{col.title4}</p>
                        </div>
                    ))
                }
                <p>{offer?.tasks4.length ?? 0}</p>
                </div>
            </div>
            <div className="bg-gray-100 h-screen w-100 m-5 ml-0 rounded-lg">
                <div className="flex">
                    
                {
                    board.column.map((col)=>(
                        <div>
                            <p>{col.title5}</p>
                        </div>
                    ))
                }
                <p>{reject?.tasks5.length ?? 0}</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};
export default Boardview;
