import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div>
        <div className="m-5">
          <span className="text-2xl font-semibold">FlowBoard</span>
        </div>
        <hr className="bg-gray-300 text-2xl opacity-20 ml-5 mr-5" />
        <div className="bg-[#ebe6e747] h-140 w-120 m-20 ml-140 rounded-2xl shadow-xs p-10">
            <span className="text-3xl font-medium ">Create account</span>
            <div className="flex flex-col mt-5">
                <label htmlFor="name" className="mb-1 text-lg">Name</label>
                <input type="text" name="name" id="name" className="text-lg h-10-w-10 border-2 rounded-md p-1 border-black/10" placeholder=" Your name" />
                <label htmlFor="email" className="mb-1 mt-5 text-lg">Email</label>
                <input type="text" name="email" id="email" className="text-lg h-10-w-10 border-2 rounded-md p-1 border-black/10" placeholder=" You@emaple.com" />
                <label htmlFor="password" className="mb-1 mt-5 text-lg">Password</label>
                <input type="password" name="password" id="password" className="text-lg h-10-w-10 border-2 rounded-md p-1 border-black/10" placeholder=" At least 6 characters" />
                <NavLink to="/board" className="mt-8 rounded-lg text-amber-50/90 hover:bg-gray-100 border-2 hover:border-black/20 hover:text-black/60  font-medium text-xl bg-blue-700 flex justify-center pl-5 pt-2 pb-2">Create account</NavLink>
                <div className="flex ">
                <p className="mt-10 ml-1">Already have and account?</p>
                 <NavLink to="/signin" className="font-sans antialiased text-blue-700 mr-4 mt-10 ml-2 text-md">Sign in</NavLink>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};
export default Register;
