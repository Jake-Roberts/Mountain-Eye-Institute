import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import AccordionSzhsin from "@/components/AccordionSzhsin";
import BannerList from "@/components/BannerList";

const Contact = () => {
  const listItems = [
    {
      header: "Routine Optometry Exams",
      content:
        "Our practice offers complete, general eye exams for each of our optometry patients. A range of exams will be performed, like looking at visual acuity, refraction and looking for potential diseases.",
      image: undefined,
      alttext: "",
    },
    {
      header: "Corneal Transplant",
      content:
        "When a person's cornea gets milky or misshapen, we perform a transplant of the cornea. A traditional corneal transplant includes replacing the whole harmed cornea with a healthy one from a donor. Our doctors can also swap just the impaired area of the cornea.",
      image: undefined,
      alttext: "",
    },
    {
      header: "Corneal Abrasions",
      content:
        "There are many things that can lead to cornea abrasions (scrapes or scratches on the cornea). The common instances include foreign objects entering the eye such as dirt, insects, or other debris. Fingernails and contact lenses that aren't properly fitted or taken care of can also lead to cornea abrasions. Treatment is straightforward but it will depend on how severe the condition is.",
      image: undefined,
      alttext: "",
    },
  ];

  return (
    <>
      <TopNav />
      <main className='main treatments'>
        <h1>Treatments</h1>
        <strong>
          Learn more about the treatments offered at Mountain Eye Institute
        </strong>
        <AccordionSzhsin />
        <h2>Services At Our Ophthalmology Clinic</h2>
        <strong>
          Some of the common services we provide include, but aren&apos;t
          limited to:
        </strong>
        <BannerList items={listItems} />
        <ContactCTA />
      </main>
      <Footer contact={true} />
    </>
  );
};

export default Contact;
