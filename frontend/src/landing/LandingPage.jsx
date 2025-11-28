import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Hero from "./components/layout/Hero";
import Section from "./components/layout/Section";
import SectionIntro from "./components/layout/SectionIntro";

export default function LandingPage() {
  return (
    <div className="h-screen selection:bg-accent">
      <Header />
      <Hero />
      <main className="flex flex-col items-center px-5">
        <SectionIntro />
        <Section />
      </main>
      <Footer />
    </div>
  );
}
