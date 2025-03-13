import React from "react";

import Process from "@/components/Process";
import Video from "@/components/Video";
import Hero from "@/components/Hero";
import Prices from "@/components/Prices";
import Newsletter from "@/components/Newsletter";
import Sponsors from "@/components/Sponsors";

const Home = () => {

return (
<div className="bg-slate-900 w-full h-auto  relative overflow-hidden items-center justify-center   ">
{/* Hero */}
 <Hero/>
 <Process/>
 <Video/>
 <Prices/>
 <Sponsors/>
 <Newsletter/>


 </div>

  );
};



export default Home;
