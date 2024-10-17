import { Dot } from "lucide-react";
import Banner from "./components/home/banner";
import HowItsWorks from "./components/home/howitsworks";
import Pricing from "./components/home/pricing";
import BgGradient from "./components/common/bg-gradient";

export default function Home() {
  return (
    <main className="mx-auto w-full inset-0 h-full bg-[radial-gradient(#e5e7eb_1px), transparent_1px)] [background-size:16px_16px]">
      <div className="relative isolate">
       <BgGradient/>
      </div>

      <Banner />
      <div className="flex items-center justify-center">
        <Dot className="text-purple-400" />
        <Dot className="text-purple-400" />
        <Dot className="text-purple-400" />
      </div>

      <HowItsWorks />
      <div className="flex items-center justify-center">
        <Dot className="text-purple-400" />
        <Dot className="text-purple-400" />
        <Dot className="text-purple-400" />
      </div>
    
      <Pricing/>
      {/*  <Divider/>
      <Footer/> */}
    </main>
  );
}
