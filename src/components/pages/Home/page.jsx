import Image from "next/image";
import { LuArrowDownRight } from "react-icons/lu";
import Images from "../../../constants/images";

const page = () => {
  return (
    <section className="text-black relative h-screen bg-[#e8e8e3]">
      <Image
        src={Images.homeImg}
        className="absolute right-0 bottom-0 object-cover rounded-t-full w-[350]"
      />
      <div className="flex flex-col absolute top-1/6 left-10">
        <h1 className="text-[150px] font-bold">VIDUSHA LAKSHAN</h1>
        <LuArrowDownRight size={50} className="relative" color="#b6b6b0"/>
        <span className="text-[25px] mt-5 w-[600px]">
          Open to job opportunities world wide.Passionate about building
          polished,intuitive,and thoughtful digital experiences that leave
          amark.
        </span>
      </div>
    </section>
  );
};

export default page;
