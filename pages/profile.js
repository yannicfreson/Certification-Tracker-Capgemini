import Image from "next/image";
import Nav from "../components/Nav";
import TopBar from "../components/TopBar";

export default function Home() {
  return (
    <div>
      <div className="absolute top-o left-0 w-full px-4">
        <TopBar />
        <div className="w-full bg-slate-200 h-[0.1rem] mt-4 rounded-sm"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full mb-4 px-4">
        <div className="w-full bg-slate-200 h-[0.1rem] mb-4 rounded-sm"></div>
        <Nav />
      </div>
    </div>
  );
}
