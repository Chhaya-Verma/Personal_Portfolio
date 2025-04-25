import React, { useState } from "react";
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
  } from 'react-icons/fa';
  
const navItems = [
  { icon: <Home />, label: "Home" },
  { icon: <User />, label: "About" },
  { icon: <Briefcase />, label: "Work" },
  { icon: <Layers />, label: "Services" },
  { icon: <Code />, label: "Technologies" },
  { icon: <Phone />, label: "Contact" },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"about" | "education">("about");

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <nav className="flex items-center justify-between px-8 py-4 shadow-md">
        {/* navbar section */}
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

        {/* Right (Buttons) */}
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

      {/* hero section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-4 py-20 min-h-[70vh] mt-30 max-w-screen-xl mx-auto">
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
            src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBjb2Rpbmd8ZW58MHx8MHx8fDA%3D"
            alt="Chhaya Verma"
            className="w-96 h-96 rounded-full object-cover shadow-lg"
          />
        </div>
      </section>

{/* About Section */}
      <section className="px-4 py-20 max-w-screen-xl mx-auto text-center">
  <h1 className='text-4xl font-bold mb-4'>About Me</h1>
  <h2 className="text-3xl font-bold mb-4">Explore The Creativity & More</h2>
  <p className="max-w-3xl mx-auto mb-6">
    Welcome to my digital space! I am <span className="text-green-400 font-semibold">Chhaya Verma</span>, a Computer Programming student passionate about web development and coding. I’m always open to opportunities, collaborations, and discussions. Let’s create something extraordinary together!
  </p>

  <div className="flex justify-center gap-4 mb-10">
    <button
      className={`px-4 py-2 rounded ${activeTab === 'about' ? 'bg-green-400 text-black' : 'bg-gray-700'}`}
      onClick={() => setActiveTab('about')}
    >
      About
    </button>
    <button
      className={`px-4 py-2 rounded ${activeTab === 'education' ? 'bg-green-400 text-black' : 'bg-gray-700'}`}
      onClick={() => setActiveTab('education')}
    >
      Education
    </button>
  </div>

  {activeTab === 'about' && (
    <div className="flex flex-col md:flex-row gap-6 items-center justify-center bg-gray-800 p-6 rounded-lg max-w-screen-xl mx-auto">
      <img
        src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBjb2Rpbmd8ZW58MHx8MHx8fDA%3D"
        alt="Chhaya Verma"
        className="w-60 h-60 rounded-lg object-cover"
      />
      <div className="text-left">
        <h3 className="text-xl font-semibold mb-2">Personal Info</h3>
        <p className="mb-4">
          I’m a dedicated student currently learning full-stack development. I enjoy building interactive and meaningful web experiences.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p><strong>Email:</strong> chhayaverma.official@gmail.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> Raipur, Chhattisgarh</p>
          <div className="flex items-center gap-4 col-span-2">
            <strong>Follow:</strong>
            <a href="#" className="text-white hover:text-green-400"><FaFacebook /></a>
            <a href="#" className="text-white hover:text-green-400"><FaTwitter /></a>
            <a href="#" className="text-white hover:text-green-400"><FaLinkedin /></a>
            <a href="#" className="text-white hover:text-green-400"><FaGithub /></a>
          </div>
        </div>
      </div>
    </div>
  )}

  {activeTab === 'education' && (
    <div className="bg-gray-800 p-6 rounded-lg max-w-screen-xl mx-auto text-left">
      <h3 className="text-xl font-semibold mb-4">EDUCATION</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Computer Programming Course, NavGurukul, Raipur</strong><br />
          Aug 2023 – Present<br />
          <em>(A residential program for girls run in partnership with Raipur District Administration)</em>
        </li>
        <li>
          <strong>Bachelor of Science, Pt. Ravishankar Shukla University, Raipur</strong><br />
          Jan 2024 – Present
        </li>
        <li>
          <strong>Industrial Training Institute (ITI), COPA</strong><br />
          Sep 2022 – Aug 2023<br />
          Dau Chandrabhan Singh Sirmour Govt. ITI, Raipur – <strong>88.16%</strong>
        </li>
        <li>
          <strong>12th Grade, Govt. Higher Secondary School, Raipur</strong><br />
          Jun 2021 – May 2022 – <strong>70.60%</strong>
        </li>
        <li>
          <strong>10th Grade, Govt. High School, Raipur</strong><br />
          Jun 2019 – May 2020 – <strong>92.30%</strong>
        </li>
      </ul>
    </div>
  )}
</section>
    </div>
  );
}




