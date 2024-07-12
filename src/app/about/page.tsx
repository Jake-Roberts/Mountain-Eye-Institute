import ContactCTA from "@/components/ContactCTA";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import TwoColumn from "@/components/TwoColumn";
import headerImage from "../../../public/gallery/lasik.webp";

const Contact = () => {
  const headerText = [
    "Mountain Eye Institute is where Southern Utah goes for Eye Care!",
    "About Mountain Eye Institute",
  ];
  const bodyText =
    "Regardless of how old you are, it's important to have an ophthalmologist in Cedar City, UT that you can rely on. Ophthalmology specialists are integral for primary eye care and surgical procedures for your eye health. If you are looking for quality eye care, look to Mountain Eye Institute. Our complete ophthalmology practice uses only the most advanced practices and tools. Our board-certified ophthalmologists provide each of our clients with a wide range of optometrist services. Each person on our friendly and skilled team is prepared to bring exceptional eye services to those in Cedar City, UT.";

  return (
    <>
      <TopNav/>
      <main className='main'>
        <TwoColumn
          header={true}
          headerText={headerText}
          side={"right"}
          image={headerImage}
          body={bodyText}
        />
        <ContactCTA />
      </main>
      <Footer contact={true} tall={true} />
    </>
  );
};

export default Contact;
