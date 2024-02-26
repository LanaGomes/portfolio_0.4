import Contact from "./Components/Contact";

import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <main className="mainContainer">
        <About />

        <Contact />

        <Projects />

        <Contact />
      </main>
    </>
  );
}

export default App;
