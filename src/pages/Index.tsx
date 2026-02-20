import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import Partnerships from "@/components/Partnerships";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Differentials />
      <Partnerships />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
