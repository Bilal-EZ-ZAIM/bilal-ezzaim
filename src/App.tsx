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
import { Toaster } from 'react-hot-toast';
import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen w-full overflow-x-clip bg-background text-foreground">
        <Navbar />
        <main className="mx-auto flex w-full flex-col">
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
        <Toaster position="top-right" reverseOrder={false} />
      </div>

    </ThemeProvider>
  );
}

export default App;
