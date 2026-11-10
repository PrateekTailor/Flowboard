import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../Api/client";
const Login=()=>{
    const navigate = useNavigate();
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [error,seterror] = useState("");
    const [loading,setloading] = useState(false);
    const handlesubmit = async(e) =>{
        e.preventDefault();
        seterror("");
        setloading(true);

        try {
            await login(email,password);
            navigate("/boards");
        } catch (error) {
            seterror(error.message);
        } finally{
            setloading(false);
        }
    }
    return(
        <>
        <div>
        <div className="m-5">
          <span className="text-2xl font-semibold">FlowBoard</span>
        </div>
        <hr className="bg-gray-300 text-2xl opacity-20 ml-5 mr-5" />
        <div className="bg-[#ebe6e747] h-110 w-120 m-20 ml-140 rounded-2xl shadow-xs p-10">
            <span className="text-3xl font-medium ">Log in</span>
            <form onSubmit={handlesubmit} className="flex flex-col mt-5">
                <label htmlFor="email" className="mb-1 mt- text-lg" >Email</label>
                <input onChange={(e)=>setemail(e.target.value)} type="text" name="email" id="email" className="text-lg h-10-w-10 border-2 rounded-md p-1 border-black/10" placeholder=" You@emaple.com" />
                <label htmlFor="password" className="mb-1 mt-5 text-lg">Password</label>
                <input onChange={(e)=>setpassword(e.target.value)} type="password" name="password" id="password" className="text-lg h-10-w-10 border-2 rounded-md p-1 border-black/10" placeholder=" At least 6 characters" />
                {error && <p className="mt-3 text-red-600" >{error}</p> }
                <button type="submit" disabled={loading} className="mt-8 rounded-lg text-amber-50/90 hover:bg-gray-100 border-2 hover:border-black/20 hover:text-black/60  font-medium text-xl bg-blue-700 flex justify-center pl-5 pt-2 pb-2">{loading ? "Logging... ":"Log in"}</button>
                <div className="flex ">
                <p className="mt-9 ml-1">New user?</p>
                 <NavLink to="/reg" className="font-sans antialiased text-blue-700 mr-4 mt-9 ml-2 text-md">Create account</NavLink>
                </div>
            </form>
        </div>
      </div>
        </>
    )
}
export default Login;