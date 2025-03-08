"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

// Import images correctly
import image from "../../../ASSETS/lms.png";
import img from "../../../ASSETS/music.png";
import img1 from "../../../ASSETS/aisaas.png";
import ing3 from "../../../ASSETS/blog.jpeg";

// Data for projects
const projects = [
  {
    title: "Learning Management System",
    image: image,
    techStack: ["React.js", "MongoDB", "Express.js", "Node.js"],
    link: "https://github.com/Sameer9823/Learning-Management-System",
  },
  {
    title: "Blog Application",
    image: ing3,
    techStack: ["React.js", "Tailwind CSS", "Appwrite"],
    link: "https://everydayvibes.netlify.app/",
  },
  {
    title: "Master the Art Of Music",
    image: img,
    techStack: ["Next.js", "Aceternity.ui"],
    link: "https://github.com/Sameer9823/Music-School-Application",
  },
  {
    title: "AI Integrated SaaS",
    image: img1,
    techStack: ["Next.js", "Cloudinary AI", "Prisma", "NEONDB"],
    link: "https://github.com/Sameer9823/Cloudinary-SaaS",
  },
];

export function ProjectShowcase() {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-800 dark:bg-gray-700 shadow-lg rounded-xl p-6 w-[20rem] sm:w-[25rem] hover:scale-105 transition-transform"
        >
          {/* Project Title */}
          <h2 className="text-2xl font-bold text-white text-center">{project.title}</h2>

          {/* Project Image */}
          <div className="mt-4">
            <Image
              src={project.image}
              height={500}
              width={500}
              className="h-52 w-full object-cover rounded-xl shadow-lg"
              alt={project.title}
            />
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="bg-black dark:bg-white dark:text-black text-white px-3 py-1 rounded-full text-xs font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Link */}
          <div className="flex justify-center mt-6">
            <Link href={project.link} target="_blank">
              <Button color="primary" variant="solid" className="bg-white text-black px-6 py-2 rounded-lg font-bold">
                View Project
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
