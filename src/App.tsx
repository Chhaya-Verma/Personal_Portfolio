import React, { useState } from 'react';
import {
  Moon,
  Sun,
  Home,
  User,
  Briefcase,
  Phone,
  Layers,
  Code,
} from 'lucide-react';

const navItems = [
  { icon: <Home />, label: 'Home' },
  { icon: <User />, label: 'About' },
  { icon: <Briefcase />, label: 'Work' },
  { icon: <Layers />, label: 'Services' },
  { icon: <Code />, label: 'Technologies' },
  { icon: <Phone />, label: 'Contact' },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'about' | 'education'>('about');

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
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


      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-4 py-20 min-h-[70vh] mt-30 max-w-screen-xl mx-auto">
  <div className="text-left space-y-4 max-w-xl">
    <h2 className="text-6xl font-bold">I am Chhaya Verma</h2>
    <p className="text-lg">
      A passionate web developer crafting beautiful and responsive websites.
    </p>
    <div className="flex gap-4">
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Let's Talk</button>
      <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">Download CV</button>
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
    </div>
  );
}
