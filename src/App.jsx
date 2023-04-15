import About from "./components/About";
import Blog from "./components/Blog";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OpenAI from "./components/OpenAI";

export default function App() {
  return (
    <div className="bg-customBlack-800 font-manrope text-white text-center leading-relaxed lg:text-left">
      <div className="mx-auto px-6 md:max-w-4xl lg:max-w-6xl lg:px-0">
        <Navbar />
        <Header />
        <About />
        <OpenAI />
        <Blog />
      </div>
      <div className="bg-customBlack-400">
        <div className="mx-auto px-6 md:max-w-4xl lg:max-w-6xl">
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}
