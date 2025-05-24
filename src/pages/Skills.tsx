import React, { useState } from "react";

type SkillCategory = {
  name: string;
  skills: string[];
};

const technicalSkillSections: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    name: "Frontend Frameworks",
    skills: ["React", "Next.js", "Vite"],
  },
  {
    name: "Version Control",
    skills: ["Git", "GitHub", "GitLab"],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "Firebase", "MySQL"],
  },
  {
    name: "Styling & UI Libraries",
    skills: ["Tailwind CSS", "CSS3", "SASS", "Material UI"],
  },
];

const professionalSkills: string[] = [
  "Communication",
  "Team Collaboration",
  "Problem Solving",
  "Time Management",
  "Adaptability",
];

const Skill: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"technical" | "professional">("technical");
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const handleCategoryClick = (name: string) => {
    setOpenCategory((prev) => (prev === name ? null : name));
  };

  return (
    <section className="px-4 py-20 max-w-screen-xl mx-auto text-white text-center">
      <h1 className="text-4xl font-bold mb-4 text-purple-500">My Skills</h1>
      <h2 className="text-2xl font-semibold mb-12 text-purple-400">Technical & Professional Skills</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveTab("technical")}
          className={`px-4 py-2 rounded-full transition ${
            activeTab === "technical" ? "bg-purple-500 text-black" : "bg-gray-700 hover:bg-purple-500"
          }`}
        >
          Technical Skills
        </button>
        <button
          onClick={() => setActiveTab("professional")}
          className={`px-4 py-2 rounded-full transition ${
            activeTab === "professional" ? "bg-purple-500 text-black" : "bg-gray-700 hover:bg-purple-500"
          }`}
        >
          Professional Skills
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "technical" ? (
        <div className="grid gap-6 max-w-3xl mx-auto text-left">
          {technicalSkillSections.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => handleCategoryClick(category.name)}
              >
                <span className="text-lg font-semibold text-purple-400">{category.name}</span>
                <span className="text-purple-400 text-xl">
                  {openCategory === category.name ? "−" : "+"}
                </span>
              </button>
              {openCategory === category.name && (
                <ul className="px-6 pb-4 space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-gray-300 pl-4 list-disc">
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-4 max-w-xl mx-auto text-left">
          {professionalSkills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-gray-800 px-6 py-4 rounded-lg shadow-md text-gray-300 font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Skill;
