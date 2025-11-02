export default function Event() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-5">
      <h1 className="text-[100px] tracking-[10px] text-[#00A6F5]">Events</h1>
      <div className="bg-black w-100 h-0.5 mb-10"></div>
      <div className="flex flex-row gap-40 justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center p-5 gap-2">
          <div className="flex flex-row px-10 p-2 gap-4 border-3 border-gray-500 rounded-2xl align-middle justify-center items-center">
            <div className="bg-pink-400 p-4 rounded-full"></div>
            <p className="text-[30px] tracking-[10px]">LIVE</p>
          </div>
          <p className="text-lg tracking-widest">
            Tune in for onging live events
          </p>
        </div>
        <div className="w-0.5 h-70 bg-black"></div>
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="bg-gray-600 text-[#00A6F5] tracking-[5px] p-2 w-100 rounded-3xl">
            Upcomming Webinars
          </div>
          <div className="bg-gray-600 text-[#00A6F5] tracking-[5px] p-2 w-100 rounded-3xl">
            Upcomming Workshops
          </div>
          <div className="bg-gray-600 text-[#00A6F5] tracking-[5px] p-2 w-100 rounded-3xl">
            Upcomming Trainings
          </div>
        </div>
      </div>
    </div>
  );
}
