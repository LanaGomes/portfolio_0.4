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
        <div className="containerView700">
          <section className="transparentContainer">
            <About />
          </section>
          <section className="transparentContainer contactView700Contact">
            <Contact />
          </section>
        </div>

        <section className="transparentContainer containerView700Projects">
          <Projects />
        </section>
        <section className="transparentContainer contactView600Contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
