import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

import "./App.css";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <div className="xl:200 lg:px-140 md:px-20 items-center justify-center flex flex-col gap-12">
        <Hero />
        <Features />
        <About />
      </div>
    </div>
  );
}

export default App;
