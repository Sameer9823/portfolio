import Image from "next/image";
import App from "./components/Navbar";
import { FlipWordsDemo } from "./components/Main";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-t from-pink-500 via-blue-500 to-yellow-500">
      <App />
      <FlipWordsDemo />
      <About />
      <Project />
      <Contact />
    </div>
  );
}
