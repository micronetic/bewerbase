import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Hero from "./components/layout/Hero";
import Section from "./components/layout/Section";

export default function LandingPage() {
  return (
    <div className="h-screen">
      <Header />
      <Hero />
      <Section />
      <Footer />
    </div>
  );
}
