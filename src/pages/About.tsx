import React, { useState } from "react";

type EducationItem = {
  title: string;
  date: string;
  desc?: string;
};

const educationData: EducationItem[] = [
  {
    title: "B.Tech in Computer Science",
    date: "2019 - 2023",
    desc: "Graduated with Honors from XYZ University.",
  },
  {
    title: "High School",
    date: "2017 - 2019",
    desc: "Completed with Science Stream from ABC School.",
  },
];

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"about" | "education">("about");

  return (
    <section className="px-4 py-20 max-w-screen-xl mx-auto text-center text-white">
      <h1 className="text-4xl font-bold mb-4 text-purple-500">About Me</h1>
      <h2 className="text-3xl font-bold mb-4 text-purple-400">Explore The Creativity & More</h2>
      <p className="max-w-3xl mx-auto mb-6 text-gray-300">
        Welcome to my digital space! I am{" "}
        <span className="text-purple-500 font-semibold">Chhaya Verma</span>.
      </p>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          className={`px-4 py-2 rounded-full transition ${
            activeTab === "about" ? "bg-purple-500 text-black" : "bg-gray-700 hover:bg-purple-500"
          }`}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button
          className={`px-4 py-2 rounded-full transition ${
            activeTab === "education" ? "bg-purple-500 text-black" : "bg-gray-700 hover:bg-purple-500"
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "about" ? (
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center bg-gray-800 p-6 rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a"
            alt="Chhaya Verma"
            className="w-60 h-60 rounded-lg object-cover shadow-md"
          />
          <div className="text-left w-full">
            <h3 className="text-xl font-semibold mb-4 text-purple-500">Personal Info</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-900 p-4 rounded shadow">
                <p className="text-sm text-gray-400 font-semibold">Email</p>
                <p className="text-white">chhaya@example.com</p>
              </div>
              <div className="bg-gray-900 p-4 rounded shadow">
                <p className="text-sm text-gray-400 font-semibold">Phone</p>
                <p className="text-white">+91 9876543210</p>
              </div>
              <div className="bg-gray-900 p-4 rounded shadow">
                <p className="text-sm text-gray-400 font-semibold">Location</p>
                <p className="text-white">Delhi, India</p>
              </div>
              <div className="bg-gray-900 p-4 rounded shadow">
                <p className="text-sm text-gray-400 font-semibold">LinkedIn</p>
                <p className="text-white">linkedin.com/in/chhaya</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-800 p-6 rounded-lg grid gap-6 md:grid-cols-2">
          {educationData.map((edu, idx) => (
            <div key={idx} className="bg-gray-900 p-5 rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-purple-500">{edu.title}</h4>
              <p className="text-sm text-purple-400">{edu.date}</p>
              {edu.desc && <p className="text-sm text-gray-300">{edu.desc}</p>}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AboutSection;
