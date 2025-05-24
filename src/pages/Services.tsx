import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaFigma,
} from "react-icons/fa";

type Service = {
  title: string;
  icon: JSX.Element;
  description: string;
};

const services: Service[] = [
  {
    title: "Responsive Web Design",
    icon: <FaLaptopCode className="text-4xl text-purple-500" />,
    description:
      "I build responsive and accessible interfaces that look great on all devices using HTML, CSS, and Tailwind CSS.",
  },
  {
    title: "Modern Frontend Development",
    icon: <FaCode className="text-4xl text-purple-500" />,
    description:
      "Expert in React, TypeScript, and modern JavaScript frameworks to create high-performance web apps.",
  },
  {
    title: "Mobile-First Design",
    icon: <FaMobileAlt className="text-4xl text-purple-500" />,
    description:
      "Designs tailored with a mobile-first approach ensuring a seamless experience on phones and tablets.",
  },
  {
    title: "UI/UX Prototyping",
    icon: <FaFigma className="text-4xl text-purple-500" />,
    description:
      "Wireframes and UI prototypes created using Figma before moving into development, ensuring design alignment.",
  },
  {
    title: "Custom Component Design",
    icon: <FaPaintBrush className="text-4xl text-purple-500" />,
    description:
      "Reusable and scalable component design using React, Tailwind, and best frontend practices.",
  },
];

const Services: React.FC = () => {
  return (
    <section className="px-4 py-20 max-w-screen-xl mx-auto text-white text-center">
      <h1 className="text-4xl font-bold mb-4 text-purple-500">My Services</h1>
      <h2 className="text-2xl font-semibold mb-12 text-purple-400">What I Can Do For You</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-purple-300">{service.title}</h3>
            <p className="text-gray-300 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
