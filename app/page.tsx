import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Categories from "@/components/Categories";
import Collection from "@/components/Collection";
import DesignService from "@/components/DesignService";
import Rates from "@/components/Rates";
import Process from "@/components/Process";
import Proof from "@/components/Proof";
import Reviews from "@/components/Reviews";
import Enquiry from "@/components/Enquiry";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Categories />
        <Collection />
        <DesignService />
        <Rates />
        <Process />
        <Proof />
        <Reviews />
        <Enquiry />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
