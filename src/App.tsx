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
    </div>
  );
}
