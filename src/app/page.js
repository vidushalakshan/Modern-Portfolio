import Navbar from "@/components/layout/Navbar";
import About from "@/components/pages/About/page";
import Home from "@/components/pages/Home/page";
import Service from "@/components/pages/Service/page";
import Work from "@/components/pages/Work/page";
import Project from "@/components/pages/Project/page";
import Footer from "@/components/pages/Footer/page";

export default function page() {
  return (
    <main className="relative bg-[#0a0a0a] ">
      <Navbar/>
      
      {/* Home Section - Now Sticky */}
      <div className="sticky top-0 h-screen z-0">
        <Home />
      </div>

      {/* Service Section - Slides OVER Home */}
      <div className="relative z-10">
        <Service />
      </div>
      
      {/* Other sections follow normally */}
      <div className="relative z-20 bg-[#0a0a0a]">
          <Work />
      </div>

      <div className="relative z-20 bg-[#0a0a0a]">
          <About />
      </div>

      <div className="relative z-20 bg-[#0a0a0a]">
          <Project />
      </div>

      <div className="relative z-20 bg-[#0a0a0a]">
          <Footer />
      </div>
    </main>
  );
}