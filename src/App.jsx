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
        <section className="transparentContainer">
          <About />
        </section>
        <section className="transparentContainer">
          <Projects />
        </section>
        <section className="transparentContainer">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
