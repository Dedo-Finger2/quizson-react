import Navbar from "./../components/Navbar";
import Hero from "./../components/Hero";
import Features from "./../components/Features";

import About from "./../components/About";
import Footer from "./../components/Footer";
import JSONFormat from "../components/JSONFormat";

function HomePage() {
  return (
    <div className="mb-12">
      <Navbar />
      <div className="items-center justify-center flex flex-col gap-12 px-6 sm:px-12">
        <Hero />
        <Features />
        <JSONFormat />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
