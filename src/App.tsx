import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { Education } from "./components/sections/Education";
import { Services } from "./components/sections/Services";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="w-full min-h-screen  bg-background text-foreground overflow-hidden ">
        <Navbar />
        <main className="flex flex-col justify-center  mx-auto w-full items-center">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
