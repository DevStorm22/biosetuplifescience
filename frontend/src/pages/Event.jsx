export default function Event() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 text-center p-5">
      <div className="bg-white shadow-2xl rounded-3xl p-7">
        <div className="bg-[#00A6F5] px-7 py-15 flex flex-col justify-center items-center gap-5 rounded-2xl">
          <h1 className="text-[100px] font-bold text-white">Events</h1>
          <div className="flex flex-col gap-2 justify-center items-center p-3 bg-white/40 rounded-xl">
            <div className="px-6 py-3 bg-pink-100 rounded-lg flex flex-row justify-center items-center gap-5">
              <div className="p-4 rounded-full bg-pink-400"></div>
              <h2 className="text-5xl tracking-[10px]">LIVE</h2>
            </div>
            <div className="bg-yellow-300 rounded-4xl">
              <h2 className="text-xl font-semibold px-4 py-2">Join Us</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
          <div className="flex flex-col justify-center gap-5 bg-white p-5 shadow-2xl rounded-3xl -translate-y-5">
            <h1 className="text-2xl font-semibold">Upcomming Webinar</h1>
            <h2 className="text-start text-xl font-bold">Title</h2>
            <p className="text-start text-lg">20 Sept 2PM - 4PM</p>
            <p className="text-start text-lg">
              We can writer description content here
            </p>
            <div className="bg-black p-2 rounded-4xl text-white w-fit">
              LEARN MORE
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5 bg-white p-5 shadow-2xl rounded-3xl -translate-y-5">
            <h1 className="text-2xl font-semibold">Upcomming Workshops</h1>
            <h2 className="text-start text-xl font-bold">Title</h2>
            <p className="text-start text-lg">20 Sept 2PM - 4PM</p>
            <p className="text-start text-lg">
              We can writer description content here
            </p>
            <div className="bg-black p-2 rounded-4xl text-white w-fit">
              LEARN MORE
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5 bg-white p-5 shadow-2xl rounded-3xl -translate-y-5">
            <h1 className="text-2xl font-semibold">Upcomming Training</h1>
            <h2 className="text-start text-xl font-bold">Title</h2>
            <p className="text-start text-lg">20 Sept 2PM - 4PM</p>
            <p className="text-start text-lg">
              We can writer description content here
            </p>
            <div className="bg-black p-2 rounded-4xl text-white w-fit">
              LEARN MORE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
