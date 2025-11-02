import Backanimation from "./../components/Backanimation";
import About from "./../components/About";
import Event from "../components/Event";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Backanimation />
      <About />
      <Event />
    </div>
  );
}
