import About from "../components/About";
import Experience from "../components/Experience";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function Home() {

  return (
    <div className="bg-white mx-auto">
      <Navbar />
      <Main />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
