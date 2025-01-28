import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./index.css";
import About from "./components/About";
import About2 from "./components/About2";
import Projects from "./components/Projects";
// import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="main">
        <Home />
        <About />
        <About2 />
        <Projects />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
};

export default App;
