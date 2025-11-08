export default function AdminNewsletter() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-15">
      <h1 className="font-bold text-5xl text-[#00A6F5]">
        Admin Newsletter Page
      </h1>
      <p className="text-lg">
        Welcome to the admin Newsletter dashboard. Here you can manage the
        Newsletter.
      </p>
      <div className="flex flex-row gap-30 p-10 flex-wrap justify-center items-center">
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() => navigate("/admin/newsletters/create")}
        >
          Add Newsletter
        </div>
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() => navigate("/admin/newsletters/delete")}
        >
          Delete Newsletter
        </div>
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() => navigate("/admin/newsletters/update")}
        >
          Update Newsletter
        </div>
        <div
          className="bg-[#00A6F5] text-white py-3 px-7 text-4xl font-bold rounded-2xl tracking-widest w-fit hover:bg-[#0b81cb] cursor-pointer"
          onClick={() => navigate("/admin/newsletters/view")}
        >
          View Newsletter
        </div>
      </div>
    </div>
  );
}
