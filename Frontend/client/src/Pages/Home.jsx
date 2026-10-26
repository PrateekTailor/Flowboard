import Navbar from "../Components/Navbar";

const Homepage = () => {
  return (
    <>
    <Navbar />
      <div className="w-full bg-gradient-to-b from-[#ffffff] via-[#f4f7fc] via-[#e1ebf7] to-[#c7dcfa] text-[#1d1d1f] font-sans antialiased selection:bg-blue-500 selection:text-white min-h-screen">       
        <div className="flex flex-col justify-center mt-40">
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
                  <span className="text-lg mt-3 flex justify-center font-serif [text-shadow:0_4px_12px_rgba(0,0,0,0.3)]">Built for placement season.</span>
            </div>
            <div>
                <span className="flex justify-center font-serif text-lg [text-shadow:0_4px_12px_rgba(0,0,0,0.3)]">Track your placement applications on one board.</span>
            </div>
        </div>
        <div className="ml-30 mt-20 pr-40">
            <span className="text-4xl font-medium ">Know where you stand, every day</span> <br />
            <span>Each stage stays visible, so no deadline gets lost in the pile.</span>
            <div className="h-100 w-320 bg-[#ffffff6e] mt-10 rounded-2xl flex ">
                <div className="h-90 w-75 bg-blue-50 m-5 rounded-2xl ">
                    <div className="flex justify-between">
                    <span className="pl-5">Applied</span>
                    <span className="pr-5">2</span>
                    </div>
                </div>
                <div className="h-90 w-75 bg-blue-50 m-5 rounded-2xl">
                    <div className="flex justify-between">
                    <span className="pl-5">OA</span>
                    <span className="pr-5">1</span>
                    </div>
                </div>
                <div className="h-90 w-75 bg-blue-50 m-5 rounded-2xl ">
                    <div className="flex justify-between">
                    <span className="pl-5">Interview</span>
                    <span className="pr-5">1</span>
                    </div>
                </div>
                <div className="h-90 w-75 bg-blue-50 m-5 rounded-2xl ">
                    <div className="flex justify-between">
                    <span className="pl-5">Offer</span>
                    <span className="pr-5">1</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="bg-amber-600 h-10 "> 

      </div>
    </>
  );
};
export default Homepage;
