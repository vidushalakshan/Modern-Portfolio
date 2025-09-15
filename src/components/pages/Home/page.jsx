import Image from "next/image";
import { LuArrowDownRight } from "react-icons/lu";
import Images from "../../../constants/images";

const page = () => {
  return (
    <section className="text-black relative h-screen bg-[#e8e8e3]">
      <Image
        src={Images.homeImg}
        className="absolute right-0 bottom-0 object-cover w-[500] h-screen"
      />
      <div className="flex flex-col gap-5 absolute top-1/6 left-10">
        <h1 className="text-[150px] font-bold">VIDUSHA LAKSHAN</h1>
        <LuArrowDownRight />
        <span>
          Open to job opportunities world wide.Passionate about building
          polished,intuitive,and thoughtful digital experiences that leave
          amark.
        </span>
      </div>
    </section>
  );
};

export default page;
