// import React, { useState } from "react";

// type SkillCategory = {
//   name: string;
//   skills: string[];
// };

// const technicalSkillSections: SkillCategory[] = [
//   {
//     name: "Programming Languages",
//     skills: ["JavaScript", "TypeScript", "Python", "C++"],
//   },
//   {
//     name: "Frontend Frameworks",
//     skills: ["React",  "Vite"],
//   },
//   {
//     name: "Version Control",
//     skills: ["Git", "GitHub"],
//   },
//   {
//     name: "Databases",
//     skills: ["MySQL", "Firebase"],
//   },
//   {
//     name: "Styling & UI Libraries",
//     skills: ["Tailwind CSS","Material UI"],
//   },
// ];

// const professionalSkills: string[] = [
//   "Communication",
//   "Team Collaboration",
//   "Problem Solving",
//   "Time Management",
//   "Adaptability",
// ];

// const Skill: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<"technical" | "professional">("technical");
//   const [openCategory, setOpenCategory] = useState<string | null>(null);

//   const handleCategoryClick = (name: string) => {
//     setOpenCategory((prev) => (prev === name ? null : name));
//   };

//   return (
//     <section className="px-4 py-20 max-w-screen-xl mx-auto text-white text-center">
//       <h1 className="text-4xl font-bold mb-4 text-purple-500">My Skills</h1>
//       <h2 className="text-2xl font-semibold mb-12 text-purple-400">Technical & Professional Skills</h2>

//       {/* Tabs */}
//       <div className="flex justify-center gap-4 mb-10">
//         <button
//           onClick={() => setActiveTab("technical")}
//           className={`px-4 py-2 rounded-full transition ${
//             activeTab === "technical" ? "bg-purple-500 text-black" : "bg-gray-700 hover:bg-purple-500"
//           }`}
//         >
//           Technical Skills
//         </button>
//         <button
//           onClick={() => setActiveTab("professional")}
//           className={`px-4 py-2 rounded-full transition ${
//             activeTab === "professional" ? "bg-purple-500 text-black" : "bg-gray-700 hover:bg-purple-500"
//           }`}
//         >
//           Professional Skills
//         </button>
//       </div>

//       {/* Tab Content */}
//       {activeTab === "technical" ? (
//         <div className="grid gap-6 max-w-3xl mx-auto text-left">
//           {technicalSkillSections.map((category, index) => (
//             <div key={index} className="bg-gray-800 rounded-lg shadow-md">
//               <button
//                 className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
//                 onClick={() => handleCategoryClick(category.name)}
//               >
//                 <span className="text-lg font-semibold text-purple-400">{category.name}</span>
//                 <span className="text-purple-400 text-xl">
//                   {openCategory === category.name ? "−" : "+"}
//                 </span>
//               </button>
//               {openCategory === category.name && (
//                 <ul className="px-6 pb-4 space-y-2">
//                   {category.skills.map((skill, idx) => (
//                     <li key={idx} className="text-gray-300 pl-4 list-disc">
//                       {skill}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="grid gap-4 max-w-xl mx-auto text-left">
//           {professionalSkills.map((skill, idx) => (
//             <div
//               key={idx}
//               className="bg-gray-800 px-6 py-4 rounded-lg shadow-md text-gray-300 font-medium"
//             >
//               {skill}
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Skill;




// import React, { useState } from "react";
// import {
//   FaReact,
//   FaGit,
//   FaDatabase,
//   FaCss3Alt,
//   FaPalette,
// } from "react-icons/fa";
// import {
//   SiTypescript,
//   SiVite,
//   SiMysql,
//   SiFirebase,
//   SiTailwindcss,
// } from "react-icons/si";
// import Progress from "react-circle-progress-bar";

// type SkillItem = {
//   name: string;
//   icon: JSX.Element;
//   progress: number;
// };

// type SkillCategory = {
//   name: string;
//   skills: SkillItem[];
// };

// const technicalSkillSections: SkillCategory[] = [
//   {
//     name: "Programming Languages",
//     skills: [
//       { name: "JavaScript", icon: <FaReact />, progress: 90 },
//       { name: "TypeScript", icon: <SiTypescript />, progress: 85 },
//       { name: "Python", icon: <FaReact />, progress: 70 },
//       { name: "C++", icon: <FaReact />, progress: 60 },
//     ],
//   },
//   {
//     name: "Frontend Frameworks",
//     skills: [
//       { name: "React", icon: <FaReact />, progress: 95 },
//       { name: "Vite", icon: <SiVite />, progress: 80 },
//     ],
//   },
//   {
//     name: "Version Control",
//     skills: [
//       { name: "Git", icon: <FaGit />, progress: 90 },
//       { name: "GitHub", icon: <FaGit />, progress: 85 },
//     ],
//   },
//   {
//     name: "Databases",
//     skills: [
//       { name: "MySQL", icon: <SiMysql />, progress: 75 },
//       { name: "Firebase", icon: <SiFirebase />, progress: 80 },
//     ],
//   },
//   {
//     name: "Styling & UI Libraries",
//     skills: [
//       { name: "Tailwind CSS", icon: <SiTailwindcss />, progress: 90 },
//       { name: "Material UI", icon: <FaPalette />, progress: 85 }, // ✅ Fixed here
//     ],
//   },
// ];

// const professionalSkills: string[] = [
//   "Communication",
//   "Team Collaboration",
//   "Problem Solving",
//   "Time Management",
//   "Adaptability",
// ];

// const Skill: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<"technical" | "professional">("technical");
//   const [openCategory, setOpenCategory] = useState<string | null>(null);

//   const handleCategoryClick = (name: string) => {
//     setOpenCategory((prev) => (prev === name ? null : name));
//   };

//   return (
//     <section className="px-4 py-20 max-w-screen-xl mx-auto text-white text-center">
//       <h1 className="text-4xl font-bold mb-4 text-purple-500">My Skills</h1>
//       <h2 className="text-2xl font-semibold mb-12 text-purple-400">Technical & Professional Skills</h2>

//       {/* Tabs */}
//       <div className="flex justify-center gap-4 mb-10">
//         <button
//           onClick={() => setActiveTab("technical")}
//           className={`px-4 py-2 rounded-full transition ${
//             activeTab === "technical" ? "bg-purple-500 text-black" : "bg-gray-700 hover:bg-purple-500"
//           }`}
//         >
//           Technical Skills
//         </button>
//         <button
//           onClick={() => setActiveTab("professional")}
//           className={`px-4 py-2 rounded-full transition ${
//             activeTab === "professional" ? "bg-purple-500 text-black" : "bg-gray-700 hover:bg-purple-500"
//           }`}
//         >
//           Professional Skills
//         </button>
//       </div>

//       {/* Tab Content */}
//       {activeTab === "technical" ? (
//         <div className="grid gap-6 max-w-3xl mx-auto text-left">
//           {technicalSkillSections.map((category, index) => (
//             <div key={index} className="bg-gray-800 rounded-lg shadow-md">
//               <button
//                 className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
//                 onClick={() => handleCategoryClick(category.name)}
//               >
//                 <span className="text-lg font-semibold text-purple-400">{category.name}</span>
//                 <span className="text-purple-400 text-xl">
//                   {openCategory === category.name ? "▼" : "▶"}
//                 </span>
//               </button>
//               {openCategory === category.name && (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 pb-4">
//                   {category.skills.map((skill, idx) => (
//                     <div key={idx} className="flex items-center gap-4">
//                       <div className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full text-xl text-purple-400">
//                         {skill.icon}
//                       </div>
//                       <div className="flex-1">
//                         <p className="text-lg font-semibold text-purple-300 mb-1">{skill.name}</p>
//                         <Progress
//                           progress={skill.progress}
//                           strokeWidth={6}
//                           ballStrokeWidth={8}
//                           reduction={0.25}
//                           transitionDuration={0.5}
//                           transitionTimingFunction="ease"
//                           background="#2d2d2d"
//                           hideBall={false}
//                           hideValue={false}
//                           subtitle={`${skill.progress}%`}
//                           style={{ width: "70px", height: "70px" }}
//                           gradient={[
//                             { stop: 0.0, color: "#7c3aed" },
//                             { stop: 1, color: "#a855f7" },
//                           ]}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="grid gap-4 max-w-xl mx-auto text-left">
//           {professionalSkills.map((skill, idx) => (
//             <div
//               key={idx}
//               className="bg-gray-800 px-6 py-4 rounded-lg shadow-md text-gray-300 font-medium"
//             >
//               {skill}
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Skill;






import React, { useState } from "react";
import {
  FaReact,
  FaGit,
  FaDatabase,
  FaCss3Alt,
  FaPalette,
} from "react-icons/fa";
import {
  SiTypescript,
  SiVite,
  SiMysql,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";
import { FiArrowRightCircle } from "react-icons/fi";

import Progress from "react-circle-progress-bar";

type SkillItem = {
  name: string;
  icon: JSX.Element;
  progress: number;
};

type SkillCategory = {
  name: string;
  skills: SkillItem[];
};

const technicalSkillSections: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: <FaReact />, progress: 90 },
      { name: "TypeScript", icon: <SiTypescript />, progress: 85 },
      { name: "Python", icon: <FaReact />, progress: 70 },
      { name: "C++", icon: <FaReact />, progress: 60 },
    ],
  },
  {
    name: "Frontend Frameworks",
    skills: [
      { name: "React", icon: <FaReact />, progress: 95 },
      { name: "Vite", icon: <SiVite />, progress: 80 },
    ],
  },
  {
    name: "Version Control",
    skills: [
      { name: "Git", icon: <FaGit />, progress: 90 },
      { name: "GitHub", icon: <FaGit />, progress: 85 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql />, progress: 75 },
      { name: "Firebase", icon: <SiFirebase />, progress: 80 },
    ],
  },
  {
    name: "Styling & UI Libraries",
    skills: [
      { name: "Tailwind CSS", icon: <SiTailwindcss />, progress: 90 },
      { name: "Material UI", icon: <FaPalette />, progress: 85 },
    ],
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
      <h2 className="text-2xl font-semibold mb-12 text-purple-400">
        Technical & Professional Skills
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveTab("technical")}
          className={`px-4 py-2 rounded-full transition ${
            activeTab === "technical"
              ? "bg-purple-500 text-black"
              : "bg-gray-700 hover:bg-purple-500"
          }`}
        >
          Technical Skills
        </button>
        <button
          onClick={() => setActiveTab("professional")}
          className={`px-4 py-2 rounded-full transition ${
            activeTab === "professional"
              ? "bg-purple-500 text-black"
              : "bg-gray-700 hover:bg-purple-500"
          }`}
        >
          Professional Skills
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "technical" ? (
        <div className="grid gap-6 max-w-5xl mx-auto text-left">
          {technicalSkillSections.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => handleCategoryClick(category.name)}
              >
                <span className="text-lg font-semibold text-purple-400">{category.name}</span>
                <span
                  className={`text-purple-400 text-2xl transition-transform ${
                    openCategory === category.name ? "rotate-45" : ""
                  }`}
                >
                 <FiArrowRightCircle />

                </span>
              </button>
              {openCategory === category.name && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 pb-6 transition-all">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center gap-4 bg-gray-700 rounded-lg p-4 shadow-inner hover:shadow-xl transition"
                    >
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-purple-300 text-3xl text-white">
                        {skill.icon}
                      </div>
                      <p className="text-lg font-semibold text-purple-200">{skill.name}</p>
                      <Progress
                        progress={skill.progress}
                        strokeWidth={8}
                        ballStrokeWidth={10}
                        reduction={0.2}
                        transitionDuration={0.7}
                        transitionTimingFunction="ease-in-out"
                        background="#1f1f1f"
                        hideBall={false}
                        hideValue={false}
                        subtitle={`${skill.progress}%`}
                        style={{ width: "100px", height: "100px" }}
                        gradient={[
                          { stop: 0.0, color: "#9333ea" },
                          { stop: 1, color: "#c084fc" },
                        ]}
                      />
                    </div>
                  ))}
                </div>
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
