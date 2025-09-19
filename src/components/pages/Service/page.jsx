import React from "react";

const Page = () => {
  return (
    <section className="mt-20 px-6 sm:px-12 relative">
      {/* Left side heading */}
      <h1 className="uppercase text-[clamp(3rem,10vw,8rem)] font-bold text-[#e8e8e3] leading-tight">
        What I Do /
      </h1>

      {/* Right side content */}
      <div className="mt-20 flex sm:absolute sm:right-42 sm:top-24 max-w-[700px] gap-6">
        <span className="uppercase text-[16px] mt-2 text-gray-400">
          (Services)
        </span>
        <p className="text-[#e8e8e3] text-[23px] leading-relaxed">
          I specialize in building full-stack web applications that are fast,
          reliable, and user-friendly. With a solid foundation in both frontend
          and backend technologies, I help bring ideas to life whether it’s for
          a business, a startup, or a product team.
        </p>
      </div>
    </section>
  );
};

export default Page;
