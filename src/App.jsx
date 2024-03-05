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
        <section className="transparentContainer1 ">
          <About />
        </section>

        <section className="transparentContainer2  contactView700Contact">
          <Contact />
        </section>
        <section className="transparentContainer3">
          <Projects />
        </section>
        <section className="transparentContainer2 contactView600Contact ">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
