import About from "@/components/About";
import Booking from "@/components/Booking";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Review from "@/components/Review";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <Project />
      <About />
      <Review />
      <Faq />
      <Booking />
      <Footer />
    </>
  );
}
