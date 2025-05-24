// App.tsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// Import baaki pages if needed

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <Home />
      {/* Add more pages below if needed */}
    </div>
  );
}

export default App;
