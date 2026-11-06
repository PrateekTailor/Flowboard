import { mockBoard } from "../Data/mockBoard";
import { NavLink, useParams } from "react-router-dom";
import userimg from "../Images/images.jpg";
import { useState } from "react";
import { LuArrowLeft } from "react-icons/lu";
import { FaXmark } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { useBoard } from "../Hooks/useBoard";
const Boardview = () => {
  const [display, setdisplay] = useState(false);
  const [addapplieedtask, setaddappliedtask] = useState(false);
  const [addoatask, setaddoatask] = useState(false);
  const [addinterviewtask, setaddinterviewtask] = useState(false);
  const [addoffertask, setaddoffertask] = useState(false);
  const [addrejecttask, setaddrejecttask] = useState(false);
  // const [existingappliedtask, setexistingapplieddtask] = useState([""]);
  // const [existingoatask, setexistingoatask] = useState([]);
  const [newappliedtask, setnewapplieddtask] = useState([]);
  const [newoatask, setnewoatask] = useState([]);
  const [newinterviewtask, setnewinterviewtask] = useState([]);
  const [newoffertask, setnewoffertask] = useState([]);
  const [newrejecttask, setnewrejecttask] = useState([]);
  const [companyname, setcompanyname] = useState("");
  const [role, setrole] = useState("");
  const [tags, settags] = useState("");
  const [duedate, setduedate] = useState("");
  const { id } = useParams();
  // console.log("Board id:", id);
  const board = mockBoard.find((b) => b._id === id);
 const Board =  useBoard(id)
  console.log(Board);
  
  const toggale = () => {
    setdisplay(!display);
  };
  const handleappliedtask = () => {
    const task = {
      _id: Date.now(),
      company: companyname,
      Role: role,
      Tags: tags,
      Duedate: duedate,
    };
    setnewapplieddtask([...newappliedtask, task]);
    setcompanyname("");
    setduedate("");
    setrole("");
    settags("");
    setaddappliedtask(false);
  };
  const handleoatask = () => {
    const task = {
      _id: Date.now(),
      company: companyname,
      Role: role,
      Tags: tags,
      Duedate: duedate,
    };
    setnewoatask([...newoatask, task]);
    setcompanyname("");
    setduedate("");
    setrole("");
    settags("");
    setaddoatask(false);
  };
  const handleinterviewtask = () => {
    const task = {
      _id: Date.now(),
      company: companyname,
      Role: role,
      Tags: tags,
      Duedate: duedate,
    };
    setnewinterviewtask([...newinterviewtask, task]);
    setcompanyname("");
    setduedate("");
    setrole("");
    settags("");
    setaddinterviewtask(false);
  };
  const handleoffertask = () => {
    const task = {
      _id: Date.now(),
      company: companyname,
      Role: role,
      Tags: tags,
      Duedate: duedate,
    };
    setnewoffertask([...newoffertask, task]);
    setcompanyname("");
    setduedate("");
    setrole("");
    settags("");
    setaddoffertask(false);
  };
  const handlerejecttask = () => {
    const task = {
      _id: Date.now(),
      company: companyname,
      Role: role,
      Tags: tags,
      Duedate: duedate,
    };
    setnewrejecttask([...newrejecttask, task]);
    setcompanyname("");
    setduedate("");
    setrole("");
    settags("");
    setaddrejecttask(false);
  };
  const handleremovetask = (id, column) => {
    if (column === "applied") {
      setnewapplieddtask([newappliedtask.filter((t) => t._id !== id)]);
      setnewapplieddtask([]);
    }else if(column === "oa"){
      setnewoatask([newoatask.filter((t)=>t._id !== id)]);
      setnewoatask([]);
    }else if(column === "interview"){
      setnewinterviewtask([newinterviewtask.filter((t) => t._id !== id)]);
      setnewinterviewtask([]);
    }else if(column === "offer"){
      setnewoffertask([newoffertask.filter((t)=>t._id!==id)]);
      setnewoffertask([]);
    }else if(column === "reject"){
      setnewrejecttask([newrejecttask.filter((t)=> t._id !== id)]);
      setnewrejecttask([]);
    }
  };
  if (!board) {
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
            <NavLink
              className="h-10 w-55 bg-blue-600 p-1 m-10  pl-4 pr-2 -pt-3 text-2xl rounded-lg text-amber-50 flex"
              to="/board"
            >
              <LuArrowLeft className="mt-1 -ml-1 mr-1"></LuArrowLeft> Back to
              boards
            </NavLink>
          </div>
          <div className="h-160 w-370 bg-gray-100 m-5 rounded-lg flex justify-center flex-col">
            <p className="-mt-50 ml-160 text-3xl mb-1">Board not found</p>
            <p className="ml-152">This board is not found in your account</p>
          </div>
        </div>
      </>
    );
  }
  const applied = board.column.find((col) => col.title1 === "Applied");
  const oa = board.column.find((col) => col.title2 === "OA");
  const interview = board.column.find((col) => col.title3 === "Interview");
  const offer = board.column.find((col) => col.title4 === "Offer");
  const reject = board.column.find((col) => col.title5 === "Reject");
  return (
    <>
      <div>
        <header>
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
        </header>

        <main>
          {/* Back to board  */}
          <div>
            <NavLink
              className="h-10 w-55 bg-blue-600 p-1 m-10  pl-4 pr-2 -pt-3 text-2xl rounded-lg text-amber-50 flex"
              to="/board/b1"
            >
              <LuArrowLeft className="mt-1 -ml-1 mr-1"></LuArrowLeft> Back to
              boards
            </NavLink>
          </div>

          {/* Kanban tab  */}
          <div className="flex w-full mt-10">
            <div
              className="bg-gray-100 h-screen w-100 m-5 rounded-lg"
              name="applied"
            >
              {/* header/title of the tab  */}
              <div className="flex justify-between m-5 text-md font-medium">
                {board.column.map((col) => (
                  <div>
                    <p>{col.title1}</p>
                  </div>
                ))}
                <p>{applied?.tasks1.length ?? 0}</p>
              </div>

              {/* Existing applied task from mockboard  */}
                <div>
                  <div className="h-42 w-62 ml-4 bg-white rounded-lg">
                    {mockBoard.map((board) => (
                      <div>
                        {board.column.map((col) => (
                          <div>
                            {col.tasks1 &&
                              col.tasks1.map((tas) => (
                                <div>
                                  {tas._id1 && (
                                    <div>
                                      <p className="p-5 text-2xl">
                                        {tas.company}
                                      </p>
                                      <p className="p-5 pt-0 -mt-4 text-md opacity-50">
                                        {tas.title}
                                      </p>
                                      <p className="p-5 pt-0 -mt-4 pb-0">
                                        {tas.tags}
                                      </p>
                                      <p className="mt-0.5 ml-40 opacity-50 mb-1">
                                        {tas.dueDate}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              ))}
                          </div>
                        ))}
                      </div>
                    ))}
                    <button
                      onClick={() => handleremovetask(task._id, "applied")}
                      className=" bg-gray-200 pl-24 pr-24 cursor-pointer "
                    >
                      Delete
                    </button>
                  </div>
                  <div className="h-42 w-62 ml-4 bg-white rounded-lg mt-5">
                    {mockBoard.map((board) => (
                      <div>
                        {board.column.map((col) => (
                          <div>
                            {col.tasks1 &&
                              col.tasks1.map((tas) => (
                                <div>
                                  {tas._id2 && (
                                    <div>
                                      <p className="p-5 text-2xl">
                                        {tas.company}
                                      </p>
                                      <p className="p-5 pt-0 -mt-4 text-md opacity-50">
                                        {tas.title}
                                      </p>
                                      <p className="p-5 pt-0 -mt-4 pb-0">
                                        {tas.tags}
                                      </p>
                                      <p className="mt-0.5 ml-40 opacity-50 mb-1">
                                        {tas.dueDate}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              ))}
                          </div>
                        ))}
                      </div>
                    ))}
                    <button
                      onClick={() => handleremovetask(task._id, "applied")}
                      className=" bg-gray-200 pl-24 pr-24 cursor-pointer "
                    >
                      Delete
                    </button>
                  </div>
                </div>
              

              {newappliedtask.map((newtask) => (
                <div className="h-42 w-62 ml-4 bg-white rounded-lg mt-5">
                  <p className="p-5 text-2xl">{newtask.company}</p>
                  <p className="p-5 pt-0 -mt-4 text-md opacity-50">
                    {newtask.Role}
                  </p>
                  <p className="p-5 pt-0 -mt-4 pb-0">{newtask.Tags}</p>
                  <p className="mt-0.5 ml-40 opacity-50 mb-1">
                    {newtask.Duedate}
                  </p>
                  <button
                    onClick={() => handleremovetask(newtask._id, "applied")}
                    className=" bg-gray-200 pl-24 pr-24 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              ))}

              <button
                onClick={() => setaddappliedtask(true)}
                className="bg-gray-200 pl-24 pr-24 ml-3.5 mr-1 mt-4 pt-1 pb-1 rounded-md cursor-pointer"
              >
                Add task
              </button>
            </div>

            {addapplieedtask ? (
              <div className=" h-105 w-140 bg-[#ffffff9c] shadow-lg fixed ml-120 mt-10 rounded-lg">
                <div className="flex flex-col m-5 pt-2">
                  <div className="flex justify-between">
                    <p className="text-2xl font-medium">Add task</p>

                    <button onClick={() => setaddappliedtask(false)}>
                      <FaXmark className="text-2xl -mt-2 cursor-pointer"></FaXmark>
                    </button>
                  </div>
                  <label htmlFor="company" className="text-md mb-1 mt-2">
                    Company name
                  </label>
                  <input
                    type="text"
                    name="companyname"
                    placeholder="Your company name"
                    className="border-1 rounded-md p-1"
                    onChange={(e) => setcompanyname(e.target.value)}
                  />
                  <label htmlFor="role" className="text-md mb-1 mt-3">
                    Role
                  </label>
                  <input
                    type="text"
                    placeholder="Your role"
                    name="role"
                    className="border-1 rounded-md p-1"
                    onChange={(e) => setrole(e.target.value)}
                  />
                  <p className="mt-3">Tags</p>
                  <select
                    name="tags"
                    id=""
                    className="border-1 rounded-md mt-1 p-1"
                    onChange={(e) => settags(e.target.value)}
                  >
                    <option value="Dsa">DSA</option>
                    <option value="Web">Full stack developer</option>
                    <option value="Web">Backend developer</option>
                    <option value="Web">Frontend developer</option>
                    <option value="Web">Cloud developer</option>
                  </select>
                  <p className="mt-2 mb-1">Duedate</p>
                  <input
                    type="date"
                    name="duedate"
                    className="border-1 rounded-md p-1"
                    onChange={(e) => setduedate(e.target.value)}
                  />
                  <button
                    onClick={handleappliedtask}
                    className=" cursor-pointer mt-5 bg-blue-600 text-white p-1.5 rounded-md hover:bg-white border-2 border-black border-black/10 hover:text-black  hover:broder-black/70"
                  >
                    Add task
                  </button>
                </div>
              </div>
            ) : null}

            <div
              className="bg-gray-100 h-screen w-100 m-5 ml-0 rounded-lg"
              name="oa"
            >
              {/* header/title of the tab  */}
              <div className="flex justify-between m-5 -ml-9 text-md font-medium">
                {board.column.map((col) => (
                  <div>
                    <p>{col.title2}</p>
                  </div>
                ))}
                <p>{oa?.tasks2.length ?? 0}</p>
              </div>

              {/* existing oa task from mockBoard  */}
              <div>
                <div className="h-42 w-62 ml-4 bg-white rounded-lg">
                    {mockBoard.map((board) => (
                      <div>
                        {board.column.map((col) => (
                          <div>
                            {col.tasks2 &&
                              col.tasks2.map((tas) => (
                                <div>
                                  {tas._id1 && (
                                    <div>
                                      <p className="p-5 text-2xl">
                                        {tas.company}
                                      </p>
                                      <p className="p-5 pt-0 -mt-4 text-md opacity-50">
                                        {tas.title}
                                      </p>
                                      <p className="p-5 pt-0 -mt-4 pb-0">
                                        {tas.tags}
                                      </p>
                                      <p className="mt-0.5 ml-40 opacity-50 mb-1">
                                        {tas.dueDate}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              ))}
                          </div>
                        ))}
                      </div>
                    ))}
                    <button
                      onClick={() => handleremovetask(task._id, "applied")}
                      className=" bg-gray-200 pl-24 pr-24 cursor-pointer "
                    >
                      Delete
                    </button>
                  </div>
              </div>

              {/* new oa task  */}
              {newoatask &&
                newoatask.map((newtask) => (
                  <div className="h-42 w-62 ml-4 bg-white rounded-lg mt-5">
                    <p className="p-5 text-2xl">{newtask.company}</p>
                    <p className="p-5 pt-0 -mt-4 text-md opacity-50">
                      {newtask.Role}
                    </p>
                    <p className="p-5 pt-0 -mt-4 pb-0">{newtask.Tags}</p>
                    <p className="mt-0.5 ml-40 opacity-50 mb-1">
                      {newtask.Duedate}
                    </p>
                    <button
                      onClick={() => handleremovetask(newtask._id, "oa")}
                      className=" bg-gray-200 pl-24 pr-24 cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                ))}

              <button
                onClick={() => setaddoatask(true)}
                className="bg-gray-200 pl-24 pr-24 ml-3.5 mr-1 mt-4 pt-1 pb-1 rounded-md cursor-pointer"
              >
                Add task
              </button>
            </div>

            {addoatask ? (
              <div className=" h-105 w-140 bg-[#ffffff9c] shadow-lg fixed ml-120 mt-10 rounded-lg">
                <div className="flex flex-col m-5 pt-2">
                  <div className="flex justify-between">
                    <p className="text-2xl font-medium">Add task</p>

                    <button onClick={() => setaddoatask(false)}>
                      <FaXmark className="text-2xl -mt-2 cursor-pointer"></FaXmark>
                    </button>
                  </div>
                  <label htmlFor="company" className="text-md mb-1 mt-2">
                    Company name
                  </label>
                  <input
                    type="text"
                    name="companyname"
                    placeholder="Your company name"
                    className="border-1 rounded-md p-1"
                    onChange={(e) => setcompanyname(e.target.value)}
                  />
                  <label htmlFor="role" className="text-md mb-1 mt-3">
                    Role
                  </label>
                  <input
                    type="text"
                    placeholder="Your role"
                    name="role"
                    className="border-1 rounded-md p-1"
                    onChange={(e) => setrole(e.target.value)}
                  />
                  <p className="mt-3">Tags</p>
                  <select
                    name="tags"
                    id=""
                    className="border-1 rounded-md mt-1 p-1"
                    onChange={(e) => settags(e.target.value)}
                  >
                    <option value="Dsa">DSA</option>
                    <option value="Web">Full stack developer</option>
                    <option value="Web">Backend developer</option>
                    <option value="Web">Frontend developer</option>
                    <option value="Web">Cloud developer</option>
                  </select>
                  <p className="mt-2 mb-1">Duedate</p>
                  <input
                    type="date"
                    name="duedate"
                    className="border-1 rounded-md p-1"
                    onChange={(e) => setduedate(e.target.value)}
                  />
                  <button
                    onClick={handleoatask}
                    className=" cursor-pointer mt-5 bg-blue-600 text-white p-1.5 rounded-md hover:bg-white border-2 border-black border-black/10 hover:text-black  hover:broder-black/70"
                  >
                    Add task
                  </button>
                </div>
              </div>
            ) : null}

            <div
              className="bg-gray-100 h-screen w-100 m-5 ml-0 rounded-lg"
              name="interview"
            >

              {/* header/title of the tab  */}
              <div className="flex justify-between m-5 -ml-23 text-md font-medium">
                {board.column.map((col) => (
                  <div>
                    <p>{col.title3}</p>
                  </div>
                ))}
                <p>{interview?.tasks3.length ?? 0}</p>
              </div>

              <div>
                <div className="h-42 w-62 ml-4 bg-white rounded-lg">
                    {mockBoard.map((board) => (
                      <div>
                        {board.column.map((col) => (
                          <div>
                            {col.tasks3 &&
                              col.tasks3.map((tas) => (
                                <div>
                                  {tas._id1 && (
                                    <div>
                                      <p className="p-5 text-2xl">
                                        {tas.company}
                                      </p>
                                      <p className="p-5 pt-0 -mt-4 text-md opacity-50">
                                        {tas.title}
                                      </p>
                                      <p className="p-5 pt-0 -mt-4 pb-0">
                                        {tas.tags}
                                      </p>
                                      <p className="mt-0.5 ml-40 opacity-50 mb-1">
                                        {tas.dueDate}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              ))}
                          </div>
                        ))}
                      </div>
                    ))}
                    <button
                      onClick={() => handleremovetask(task._id, "applied")}
                      className=" bg-gray-200 pl-24 pr-24 cursor-pointer "
                    >
                      Delete
                    </button>
                  </div>
              </div>

              {
                newinterviewtask && newinterviewtask.map((newtask)=>(
                  <div className="h-42 w-62 ml-4 bg-white rounded-lg mt-5">
                    <p className="p-5 text-2xl">{newtask.company}</p>
                    <p className="p-5 pt-0 -mt-4 text-md opacity-50">
                      {newtask.Role}
                    </p>
                    <p className="p-5 pt-0 -mt-4 pb-0">{newtask.Tags}</p>
                    <p className="mt-0.5 ml-40 opacity-50 mb-1">
                      {newtask.Duedate}
                    </p>
                    <button
                      onClick={() => handleremovetask(newtask._id, "interview")}
                      className=" bg-gray-200 pl-24 pr-24 cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                ))
              }

              <button
                onClick={() => setaddinterviewtask(true)}
                className="bg-gray-200 pl-24 pr-24 ml-3.5 mr-1 mt-4 pt-1 pb-1 rounded-md cursor-pointer"
              >
                Add task
              </button>
            </div>

            {addinterviewtask ? (
              <div className=" h-105 w-140 bg-[#ffffff9c] shadow-lg absolute ml-120 mt-10 rounded-lg">
                <div className="flex flex-col m-5 pt-2">
                  <div className="flex justify-between">
                    <p className="text-2xl font-medium">Add task</p>

                    <button onClick={() => setaddinterviewtask(false)}>
                      <FaXmark className="text-2xl -mt-2 cursor-pointer"></FaXmark>
                    </button>
                  </div>
                  <label htmlFor="company" className="text-md mb-1 mt-2">
                    Company name
                  </label>
                  <input
                    type="text"
                    name="companyname"
                    placeholder="Your company name"
                    className="border-1 rounded-md p-1"
                    onChange={(e) => setcompanyname(e.target.value)}
                  />
                  <label htmlFor="role" className="text-md mb-1 mt-3">
                    Role
                  </label>
                  <input
                    type="text"
                    placeholder="Your role"
                    name="role"
                    className="border-1 rounded-md p-1"
                    onChange={(e) => setrole(e.target.value)}
                  />
                  <p className="mt-3">Tags</p>
                  <select
                    name="tags"
                    id=""
                    className="border-1 rounded-md mt-1 p-1"
                    onChange={(e) => settags(e.target.value)}
                  >
                    <option value="Dsa">DSA</option>
                    <option value="Web">Full stack developer</option>
                    <option value="Web">Backend developer</option>
                    <option value="Web">Frontend developer</option>
                    <option value="Web">Cloud developer</option>
                  </select>
                  <p className="mt-2 mb-1">Duedate</p>
                  <input
                    type="date"
                    name="duedate"
                    className="border-1 rounded-md p-1"
                    onChange={(e) => setduedate(e.target.value)}
                  />
                  <button
                    onClick={handleinterviewtask}
                    className=" cursor-pointer mt-5 bg-blue-600 text-white p-1.5 rounded-md hover:bg-white border-2 border-black border-black/10 hover:text-black  hover:broder-black/70"
                  >
                    Add task
                  </button>
                </div>
              </div>
            ) : null}

            <div
              className="bg-gray-100 h-screen w-100 m-5 ml-0 rounded-lg"
              name="offer"
            >

              {/* header/title of the tab */}
              <div className="flex justify-between m-5 -ml-70 text-md font-medium">
                {board.column.map((col) => (
                  <div>
                    <p>{col.title4}</p>
                  </div>
                ))}
                <p>{offer?.tasks4.length ?? 0}</p>
              </div>
  
                {/* existing offer task  */}
                <div>
                  <div className="h-42 w-62 ml-4 bg-white rounded-lg">
                    {mockBoard.map((board) => (
                      <div>
                        {board.column.map((col) => (
                          <div>
                            {col.tasks4 &&
                              col.tasks4.map((tas) => (
                                <div>
                                  {tas._id1 && (
                                    <div>
                                      <p className="p-5 text-2xl">
                                        {tas.company}
                                      </p>
                                      <p className="p-5 pt-0 -mt-4 text-md opacity-50">
                                        {tas.title}
                                      </p>
                                      <p className="p-5 pt-0 -mt-4 pb-0">
                                        {tas.tags}
                                      </p>
                                      <p className="mt-0.5 ml-40 opacity-50 mb-1">
                                        {tas.dueDate}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              ))}
                          </div>
                        ))}
                      </div>
                    ))}
                    <button
                      onClick={() => handleremovetask(task._id, "offer")}
                      className=" bg-gray-200 pl-24 pr-24 cursor-pointer "
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {
                  newoffertask && newoffertask.map((newtask)=>(
                    <div className="h-42 w-62 ml-4 bg-white rounded-lg mt-5">
                    <p className="p-5 text-2xl">{newtask.company}</p>
                    <p className="p-5 pt-0 -mt-4 text-md opacity-50">
                      {newtask.Role}
                    </p>
                    <p className="p-5 pt-0 -mt-4 pb-0">{newtask.Tags}</p>
                    <p className="mt-0.5 ml-40 opacity-50 mb-1">
                      {newtask.Duedate}
                    </p>
                    <button
                      onClick={() => handleremovetask(newtask._id, "offer")}
                      className=" bg-gray-200 pl-24 pr-24 cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                  ))
                }

              <button
                onClick={() => setaddoffertask(true)}
                className="bg-gray-200 pl-24 pr-24 ml-3.5 mr-1 mt-4 pt-1 pb-1 rounded-md cursor-pointer"
              >
                Add task
              </button>
            </div>

            {addoffertask ? (
              <div className=" h-105 w-140 bg-[#ffffff9c] shadow-lg absolute ml-120 mt-10 rounded-lg">
                <div className="flex flex-col m-5 pt-2">
                  <div className="flex justify-between">
                    <p className="text-2xl font-medium">Add task</p>

                    <button onClick={() => setaddoffertask(false)}>
                      <FaXmark className="text-2xl -mt-2 cursor-pointer"></FaXmark>
                    </button>
                  </div>
                  <label htmlFor="company" className="text-md mb-1 mt-2">
                    Company name
                  </label>
                  <input
                    type="text"
                    name="companyname"
                    placeholder="Your company name"
                    className="border-1 rounded-md p-1"
                    onChange={(e) => setcompanyname(e.target.value)}
                  />
                  <label htmlFor="role" className="text-md mb-1 mt-3">
                    Role
                  </label>
                  <input
                    type="text"
                    placeholder="Your role"
                    name="role"
                    className="border-1 rounded-md p-1"
                    onChange={(e) => setrole(e.target.value)}
                  />
                  <p className="mt-3">Tags</p>
                  <select
                    name="tags"
                    id=""
                    className="border-1 rounded-md mt-1 p-1"
                    onChange={(e) => settags(e.target.value)}
                  >
                    <option value="Dsa">DSA</option>
                    <option value="Web">Full stack developer</option>
                    <option value="Web">Backend developer</option>
                    <option value="Web">Frontend developer</option>
                    <option value="Web">Cloud developer</option>
                  </select>
                  <p className="mt-2 mb-1">Duedate</p>
                  <input
                    type="date"
                    name="duedate"
                    className="border-1 rounded-md p-1"
                    onChange={(e) => setduedate(e.target.value)}
                  />
                  <button
                    onClick={handleoffertask}
                    className=" cursor-pointer mt-5 bg-blue-600 text-white p-1.5 rounded-md hover:bg-white border-2 border-black border-black/10 hover:text-black  hover:broder-black/70"
                  >
                    Add task
                  </button>
                </div>
              </div>
            ) : null}

            <div
              className="bg-gray-100 h-screen w-100 m-5 ml-0 rounded-lg"
              name="reject"
            >
              {/* header/title of the tab  */}
              <div className="flex justify-between m-5 -ml-190 text-md font-medium">
                {board.column.map((col) => (
                  <div>
                    <p>{col.title5}</p>
                  </div>
                ))}
                <p>{reject?.tasks5.length ?? 0}</p>
              </div>

                <div>
                   <div className="h-42 w-62 ml-4 bg-white rounded-lg">
                    {mockBoard.map((board) => (
                      <div>
                        {board.column.map((col) => (
                          <div>
                            {col.tasks5 &&
                              col.tasks5.map((tas) => (
                                <div>
                                  {tas._id1 && (
                                    <div>
                                      <p className="p-5 text-2xl">
                                        {tas.company}
                                      </p>
                                      <p className="p-5 pt-0 -mt-4 text-md opacity-50">
                                        {tas.title}
                                      </p>
                                      <p className="p-5 pt-0 -mt-4 pb-0">
                                        {tas.tags}
                                      </p>
                                      <p className="mt-0.5 ml-40 opacity-50 mb-1">
                                        {tas.dueDate}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              ))}
                          </div>
                        ))}
                      </div>
                    ))}
                    <button
                      onClick={() => handleremovetask(task._id, "reject")}
                      className=" bg-gray-200 pl-24 pr-24 cursor-pointer "
                    >
                      Delete
                    </button>
                  </div>
                </div>
  
                    {
                      newrejecttask && newrejecttask.map((newtask)=>(
                         <div className="h-42 w-62 ml-4 bg-white rounded-lg mt-5">
                    <p className="p-5 text-2xl">{newtask.company}</p>
                    <p className="p-5 pt-0 -mt-4 text-md opacity-50">
                      {newtask.Role}
                    </p>
                    <p className="p-5 pt-0 -mt-4 pb-0">{newtask.Tags}</p>
                    <p className="mt-0.5 ml-40 opacity-50 mb-1">
                      {newtask.Duedate}
                    </p>
                    <button
                      onClick={() => handleremovetask(newtask._id, "reject")}
                      className=" bg-gray-200 pl-24 pr-24 cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                      ))
                    }

              <button
                onClick={() => setaddrejecttask(true)}
                className="bg-gray-200 pl-24 pr-24 ml-3.5 mr-1 mt-4 pt-1 pb-1 rounded-md cursor-pointer"
              >
                Add task
              </button>
            </div>

            {addrejecttask ? (
              <div className=" h-105 w-140 bg-[#ffffff9c] shadow-lg absolute ml-120 mt-10 rounded-lg">
                <div className="flex flex-col m-5 pt-2">
                  <div className="flex justify-between">
                    <p className="text-2xl font-medium">Add task</p>

                    <button onClick={() => setaddrejecttask(false)}>
                      <FaXmark className="text-2xl -mt-2 cursor-pointer"></FaXmark>
                    </button>
                  </div>
                  <label htmlFor="company" className="text-md mb-1 mt-2">
                    Company name
                  </label>
                  <input
                    type="text"
                    name="companyname"
                    placeholder="Your company name"
                    className="border-1 rounded-md p-1"
                    onChange={(e) => setcompanyname(e.target.value)}
                  />
                  <label htmlFor="role" className="text-md mb-1 mt-3">
                    Role
                  </label>
                  <input
                    type="text"
                    placeholder="Your role"
                    name="role"
                    className="border-1 rounded-md p-1"
                    onChange={(e) => setrole(e.target.value)}
                  />
                  <p className="mt-3">Tags</p>
                  <select
                    name="tags"
                    id=""
                    className="border-1 rounded-md mt-1 p-1"
                    onChange={(e) => settags(e.target.value)}
                  >
                    <option value="Dsa">DSA</option>
                    <option value="Web">Full stack developer</option>
                    <option value="Web">Backend developer</option>
                    <option value="Web">Frontend developer</option>
                    <option value="Web">Cloud developer</option>
                  </select>
                  <p className="mt-2 mb-1">Duedate</p>
                  <input
                    type="date"
                    name="duedate"
                    className="border-1 rounded-md p-1"
                    onChange={(e) => setduedate(e.target.value)}
                  />
                  <button
                    onClick={handlerejecttask}
                    className=" cursor-pointer mt-5 bg-blue-600 text-white p-1.5 rounded-md hover:bg-white border-2 border-black border-black/10 hover:text-black  hover:broder-black/70"
                  >
                    Add task
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </main>
      </div>
    </>
  );
};
export default Boardview;
