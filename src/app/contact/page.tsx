import ContactUs from "@/components/ContactForm";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import GReviewCarousel from "@/components/GReviewCarousel";
import Image from "next/image";
import logo from "../../../public/logo.webp";

const Contact = () => {
  // only files in app have access to server-side environment variables
  // for that reason we must pass the .env.local keys as props from here
  const props = {
    apiKey: process.env.GOOGLE_MAPS_API_KEY,
    mapId: process.env.MAP_ID,
  };

  return (
    <>
      <TopNav />
      <main className='main'>
        <div className='map-and-review'>
          <GoogleMap {...props} />
          <div className='reviews'>
            <h1>Visit Us!</h1>
            <GReviewCarousel />
          </div>
        </div>
        <ContactUs />
      </main>
      <Footer contact={false} />
    </>
  );
};

export default Contact;
