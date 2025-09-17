import Navbar from "@/components/layout/Navbar";
import Home from "@/components/pages/Home/page";
import Service from "@/components/pages/Service/page";

export default function page() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <SubNavbar /> */}
    </div>
  );
}