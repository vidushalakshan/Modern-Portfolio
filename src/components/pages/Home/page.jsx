import Image from "next/image";
import { LuArrowDownRight } from "react-icons/lu";
import Images from "../../../constants/images"

const page = () => {
  return (
    <section className="text-white relative h-screen">
      <Image src={Images.homeImg} className="absolute right-0 bottom-0 object-cover w-[500] h-screen"/>
      <div>
        <h1>VIDUSHA LAKSHAN</h1>
      </div>
      <div>
        <LuArrowDownRight />
      </div>
      <div>
        <span>Open to job opportunities world wide.Passionate about building polished,intuitive,and thoughtful digital experiences that leave amark.</span>
      </div>
    </section>
  );
};

export default page;
