
import Header from "./components/Header";
import Home from "./components/Home";
import Biography from "./components/Biography";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUpArrow";



function App() {

  return (
    // ==================== MAIN ====================
    <div>
      <main className="main">
        <Header />
        <Home />
        <Biography />
        <Skills />
        <Qualification />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
      <ScrollUp />
    </div>
  );
}

export default App;
