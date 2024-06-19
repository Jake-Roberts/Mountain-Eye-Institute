import ContactCTA from "@/components/ContactCTA";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";

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
        <ContactCTA />
      </main>
      <Footer contact={true} />
    </>
  );
};

export default Contact;
