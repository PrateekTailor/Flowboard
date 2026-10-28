import { NavLink } from "react-router-dom";
const Login=()=>{
    return(
        <>
        <div>
        <div className="m-5">
          <span className="text-2xl font-semibold">FlowBoard</span>
        </div>
        <hr className="bg-gray-300 text-2xl opacity-20 ml-5 mr-5" />
        <div className="bg-[#ebe6e747] h-110 w-120 m-20 ml-140 rounded-2xl shadow-xs p-10">
            <span className="text-3xl font-medium ">Log in</span>
            <div className="flex flex-col mt-5">
                <label htmlFor="email" className="mb-1 mt- text-lg">Email</label>
                <input type="text" name="email" id="email" className="text-lg h-10-w-10 border-2 rounded-md p-1 border-black/10" placeholder=" You@emaple.com" />
                <label htmlFor="password" className="mb-1 mt-5 text-lg">Password</label>
                <input type="password" name="password" id="password" className="text-lg h-10-w-10 border-2 rounded-md p-1 border-black/10" placeholder=" At least 6 characters" />
                <NavLink to="/board" className="mt-8 rounded-lg text-amber-50/90 hover:bg-gray-100 border-2 hover:border-black/20 hover:text-black/60  font-medium text-xl bg-blue-700 flex justify-center pl-5 pt-2 pb-2">Log in</NavLink>
                <div className="flex ">
                <p className="mt-9 ml-1">New user?</p>
                 <NavLink to="/reg" className="font-sans antialiased text-blue-700 mr-4 mt-9 ml-2 text-md">Create account</NavLink>
                </div>
            </div>
        </div>
      </div>
        </>
    )
}
export default Login;