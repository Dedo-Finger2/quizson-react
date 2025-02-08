import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="px-28 flex flex-col gap-12">
        <Hero />
        <Features />
      </div>
    </div>
  );
}

export default App;
