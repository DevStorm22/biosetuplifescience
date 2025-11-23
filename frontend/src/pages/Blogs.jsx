import Blog from "../components/Blog";
export default function Blogs() {
  return (
    <div className="flex flex-col p-5 gap-5 justify-center items-center">
      <h1 className="text-6xl font-bold text-[#00A6F5]">Blog Page</h1>
      <div className="flex flex-row flex-wrap gap-8 p-5 items-center justify-center">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
}
