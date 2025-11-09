import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Section from "./components/layout/Section";

export default function LandingPage() {
  return (
    <div className="h-screen md:bg-radial-[at_50%_-30%] from-accent to-dark-primary to-70%">
      <Header />
      <Hero />
      <Section />
      <Footer />
    </div>
  );
}
