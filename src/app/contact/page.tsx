import ContactUs from "@/components/ContactForm";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";

const Contact = () => {
  const props = {
    apiKey: process.env.GOOGLE_MAPS_API_KEY,
    mapId: process.env.MAP_ID
  };
  
  return (
    <>
      <TopNav/>
      <main className='main'>
        <div className='map-and-review'>
          <GoogleMap {...props} />
          <div className='reviews'>
            <div className='visit-us'>
              <h1>Visit Us!</h1>
              <p>
                Our world-class team has the skills and experience to help you
                with anything - big or small. Come see us today!
              </p>
              <div
                className='elfsight-app-c9466ce4-2659-4ed0-b373-94a53d49d867'
                data-elfsight-app-lazy
              ></div>
            </div>
          </div>
        </div>
        <ContactUs />
      </main>
      <Footer contact={false} tall={false} />
    </>
  );
};

export default Contact;
