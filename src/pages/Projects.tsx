import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// ✅ Import actual image files (these will be URLs after build)
import RecipeImage from "../assets/RecipeGenerator.png";
import SkyHopperImage from "../assets/SkyHopper.png";
import MoviePageImage from "../assets/MoviePage.png";

type Project = {
  title: string;
  image: string; // This is fine even if it's an imported asset
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    title: "Recipe Generator",
    image: RecipeImage, // ✅ Use imported variable, not string
    techStack: ["React", "Firebase", "Local Storage", "Bootstrap"],
    githubUrl: "https://github.com/Chhaya-Verma/Recipe-Generator",
    liveUrl: "https://recipe-generator-gamma.vercel.app/",
  },
  {
    title: "Sky Hopper",
    image: SkyHopperImage,
    techStack: ["React"],
    githubUrl: "https://github.com/Chhaya-Verma/Sky_Hopper",
    liveUrl: "https://glowing-tapioca-346421.netlify.app/",
  },
  {
    title: "Movie App",
    image: MoviePageImage,
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Chhaya-Verma/Moviepage",
    liveUrl: "https://chhaya-verma.github.io/Moviepage/",
  },
];

const Project: React.FC = () => {
  return (
    <section className="px-4 py-20 max-w-screen-xl mx-auto text-white text-center">
      <h1 className="text-4xl font-bold mb-4 text-purple-500">My Projects</h1>
      <h2 className="text-2xl font-semibold mb-12 text-purple-400">
        Some of my recent work
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-700 text-xs text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-purple-400 text-lg">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
