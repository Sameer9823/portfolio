import Image from "next/image";
import App from "./components/Navbar";
import { FlipWordsDemo } from "./components/Main";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { NoiseDemo } from "./components/Cursor";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black">
      <App />
      <FlipWordsDemo />
      <About />
      <Project />
      <Contact />
      <NoiseDemo/>
    </div>
  );
}
