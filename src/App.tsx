import React, { useState, ReactNode } from "react";
import {
  Moon,
  Sun,
  Home,
  User,
  Briefcase,
  Phone,
  Layers,
  Code,
} from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

type TabType = "about" | "education";

interface NavItem {
  icon: ReactNode;
  label: string;
}

const navItems: NavItem[] = [
  { icon: <Home />, label: "Home" },
  { icon: <User />, label: "About" },
  { icon: <Briefcase />, label: "Work" },
  { icon: <Layers />, label: "Services" },
  { icon: <Code />, label: "Technologies" },
  { icon: <Phone />, label: "Contact" },
];

interface Education {
  title: string;
  date: string;
  desc?: string;
}

const educationData: Education[] = [
  {
    title: "Computer Programming Course, NavGurukul",
    date: "Aug 2023 – Present",
    desc: "(A residential program for girls run in partnership with Raipur District Administration)",
  },
  {
    title: "Bachelor of Science, Pt. Ravishankar Shukla University",
    date: "Jan 2024 – Present",
  },
  {
    title: "Industrial Training Institute (ITI), COPA",
    date: "Sep 2022 – Aug 2023",
    desc: "Dau Chandrabhan Singh Sirmour Govt. ITI, Raipur – 88.16%",
  },
  {
    title: "12th Grade, Govt. Higher Secondary School",
    date: "Jun 2021 – May 2022",
    desc: "70.60%",
  },
  {
    title: "10th Grade, Govt. High School",
    date: "Jun 2019 – May 2020",
    desc: "92.30%",
  },
];

export default function App(): JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>("about");

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 shadow-md">
        <div className="flex-1 flex justify-center">
          <ul className="flex gap-10 items-center">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative flex flex-col items-center cursor-pointer"
                onMouseEnter={() => setHovered(item.label)}
                onMouseLeave={() => setHovered(null)}
              >
                {item.icon}
                {hovered === item.label && (
                  <span className="text-sm absolute top-8 bg-gray-800 text-white rounded px-2 py-1">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-700"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Let's Talk
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-4 py-20 min-h-[70vh] max-w-screen-xl mx-auto">
        <div className="text-left space-y-4 max-w-xl">
          <h2 className="text-6xl font-bold">I am Chhaya Verma</h2>
          <p className="text-lg">
            A passionate web developer crafting beautiful and responsive
            websites.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Let's Talk
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
              Download CV
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a"
            alt="Chhaya Verma"
            className="w-96 h-96 rounded-full object-cover shadow-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-20 max-w-screen-xl mx-auto text-center text-white">
        <h1 className="text-4xl font-bold mb-4 text-purple-500">About Me</h1>
        <h2 className="text-3xl font-bold mb-4 text-purple-400">Explore The Creativity & More</h2>
        <p className="max-w-3xl mx-auto mb-6 text-gray-300">
          Welcome to my digital space! I am <span className="text-purple-500 font-semibold">Chhaya Verma</span>, a Computer Programming student passionate about web development and coding.
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
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center bg-gray-800 p-6 rounded-lg max-w-screen-xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a"
              alt="Chhaya Verma"
              className="w-60 h-60 rounded-lg object-cover shadow-md"
            />
            <div className="text-left w-full">
              <h3 className="text-xl font-semibold mb-4 text-purple-500">Personal Info</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-900 p-4 rounded-lg shadow hover:bg-gray-700 transition">
                  <strong>Email:</strong>
                  <p>chhayaverma.official@gmail.com</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg shadow hover:bg-gray-700 transition">
                  <strong>Phone:</strong>
                  <p>+91 98765 43210</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg shadow hover:bg-gray-700 transition">
                  <strong>Address:</strong>
                  <p>Raipur, Chhattisgarh</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg shadow hover:bg-gray-700 transition">
                  <strong>Follow:</strong>
                  <div className="flex gap-3 mt-2 text-xl">
                    <a href="#" className="hover:text-purple-500"><FaFacebook /></a>
                    <a href="#" className="hover:text-purple-500"><FaTwitter /></a>
                    <a href="#" className="hover:text-purple-500"><FaLinkedin /></a>
                    <a href="#" className="hover:text-purple-500"><FaGithub /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gray-800 p-6 rounded-lg max-w-screen-xl mx-auto text-left grid gap-6 md:grid-cols-2">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="bg-gray-900 p-5 rounded-lg shadow-md hover:shadow-purple-500/50 hover:scale-105 transition duration-300"
              >
                <h4 className="text-lg font-bold mb-1 text-purple-500">{edu.title}</h4>
                <p className="text-sm text-purple-400 mb-1">{edu.date}</p>
                {edu.desc && <p className="text-sm text-gray-300">{edu.desc}</p>}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
