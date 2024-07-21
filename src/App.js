import { useEffect, useState } from "react";
import "./App.css";
import MainSection from "./components/MainSection/MainSection";
import Navbar from "./components/Navbar/Navbar";
import PreLoader from "./components/PreLoader/PreLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1769); 

    // cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const [activeSection, setActiveSection] = useState();

  if (activeSection === undefined) {
    setActiveSection("profile");
  }

  return (
    <>
      {loading && <PreLoader />}
      <Navbar activeSection={activeSection} />
      <MainSection setActiveSection={setActiveSection} />
    </>
  );
}

export default App;
