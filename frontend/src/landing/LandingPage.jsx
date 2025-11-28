import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Hero from "./components/layout/Hero";
import Section from "./components/layout/Section";

export default function LandingPage() {
  return (
    <div className="h-screen selection:bg-accent">
      <Header />
      <Hero />
      <main className="w-full flex justify-center">
        <Section />
      </main>
      <Footer />
    </div>
  );
}
