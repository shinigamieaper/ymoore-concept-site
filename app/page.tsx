import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Band from "@/components/Band";
import Collection from "@/components/Collection";
import Categories from "@/components/Categories";
import Ways from "@/components/Ways";
import Rates from "@/components/Rates";
import DesignService from "@/components/DesignService";
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
        <Band />
        <Collection />
        <Categories />
        <Ways />
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
