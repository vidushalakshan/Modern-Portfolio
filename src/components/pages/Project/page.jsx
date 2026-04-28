"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  MdOutlineSecurity,
  Md3dRotation,
  MdShoppingCart,
  MdDirectionsCar,
  MdMenuBook,
  MdArrowOutward,
} from "react-icons/md";
import { FaGithub } from "react-icons/fa";

// Parallax Card Component for that GTA VI "Depth" feel
const ProjectCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative bg-[#0f0f0f] border border-white/10 p-8 rounded-none cursor-crosshair overflow-hidden"
    >
      {/* GLITCH OVERLAY: Visible on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,95,0,0.05),rgba(0,255,0,0.02),rgba(0,0,255,0.05))] bg-[length:100%_2px,3px_100%] animate-pulse" />
      </div>

      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div className="text-4xl text-[#FF5F00] group-hover:scale-110 group-hover:rotate-[10deg] transition-transform duration-500">
            {project.icon}
          </div>
          <span className="font-mono text-[10px] text-white/20 tracking-tighter uppercase italic">
            Ref_ID: {project.id}
          </span>
        </div>

        <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-4 leading-none">
          {project.title.split(" ").map((word, i) => (
            <span
              key={i}
              className="block group-hover:translate-x-2 transition-transform duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {word}
            </span>
          ))}
        </h3>

        <p className="text-gray-500 text-xs font-medium leading-relaxed mb-6 line-clamp-3 uppercase italic">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[9px] font-mono border border-white/5 px-2 py-1 text-white/40 uppercase group-hover:border-[#FF5F00]/50 group-hover:text-white transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] font-black italic uppercase text-white/40 hover:text-[#FF5F00] transition-colors"
          >
            <FaGithub size={14} /> Open_Source
          </a>
          <MdArrowOutward
            className="text-white/20 group-hover:text-[#FF5F00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
            size={20}
          />
        </div>
      </div>

      {/* AMBIENT ORANGE GLOW */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FF5F00]/20 blur-[100px] group-hover:bg-[#FF5F00]/40 transition-colors" />
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: "M-01",
      title: "Job Skill Platform",
      description:
        "Full-stack ecosystem with JWT security and secure email protocols.",
      tech: ["Spring Boot", "React", "JWT", "MySQL"],
      link: "https://github.com/vidushalakshan/JobAndSkillDevelopmentPlatForm",
      icon: <MdOutlineSecurity />,
    },
    {
      id: "M-02",
      title: "3DTech Store",
      description:
        "Interactive 3D viewer with real-time HUD and optimized preview modes.",
      tech: ["Next.js", "Three.js", "GSAP", "R3F"],
      link: "https://github.com/vidushalakshan/3D-Ecommerce",
      icon: <Md3dRotation />,
    },
    {
      id: "M-03",
      title: "MERN E-Commerce",
      description:
        "Scalable retail platform with Stripe integration and Redux state management.",
      tech: ["MongoDB", "Express", "React", "Node"],
      link: "https://github.com/vidushalakshan/E-Commerce-web",
      icon: <MdShoppingCart />,
    },
    {
      id: "M-04",
      title: "EcoRide Rental",
      description:
        "Spring-based management system with automated invoicing and tracking.",
      tech: ["Spring MVC", "MySQL", "Bootstrap"],
      link: "https://github.com/vidushalakshan/Car_Rental_System",
      icon: <MdDirectionsCar />,
    },
    {
      id: "M-05",
      title: "Book Management",
      description:
        "JavaFX desktop application with automated JasperReports logging.",
      tech: ["Java", "JavaFX", "MySQL", "Jasper"],
      link: "https://github.com/vidushalakshan/Book_Shop",
      icon: <MdMenuBook />,
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#0a0a0a] py-24 px-6 lg:px-16 overflow-hidden">
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="mb-20">
          <span className="text-[#FF5F00] font-mono text-[10px] tracking-[0.8em] uppercase block mb-4 animate-pulse">
            // Accessing_Archive_v2.6
          </span>
          <h2 className="text-7xl md:text-9xl font-black text-white italic uppercase tracking-tighter leading-none">
            MISSION <br />{" "}
            <span className="text-transparent stroke-text">RECORDS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Projects;
