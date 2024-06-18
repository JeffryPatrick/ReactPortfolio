import { useState } from "react";
import "./App.css";
import MainSection from "./components/MainSection/MainSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [activeSection, setActiveSection] = useState();

  if (activeSection === undefined) {
    setActiveSection("profile");
  }

  return (
    <>
      <Navbar activeSection={activeSection} />
      <MainSection setActiveSection={setActiveSection} />
    </>
  );
}

export default App;
