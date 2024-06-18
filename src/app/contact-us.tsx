import ContactUs from "@/components/ContactForm";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";

const Contact = () => {
  // only files in app have access to server-side environment variables
  // for that reason we must pass the .env.local keys as props from here
  const props = {
    apiKey: process.env.GOOGLE_MAPS_API_KEY,
    mapId: process.env.MAP_ID,
  };

  return (
    <main className='main'>
      <TopNav />
      <GoogleMap {...props} />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Contact;