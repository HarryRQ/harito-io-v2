import "./App.css";

import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Intro />
      <AboutMe />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
