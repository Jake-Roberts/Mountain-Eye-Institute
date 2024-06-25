import Gallery from "@/components/Gallery";
import DOP from "@/components/DOP";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import TwoColumn from "@/components/TwoColumn";
import BannerList from "@/components/BannerList";
import { cataracts, dr, glaucoma, lasik, md } from "../../public/eyes/eyes.js";

const Home = () => {
  const galleryItems = [
    {
      image: "/gallery/MEI-office.webp",
      sneakpeak: "Welcome",
      title: "Welcome to Mountain Eye Institute",
      description:
        "Mountain Eye Institute is a comprehensive Ophthalmology practice providing a full range of treatment for eye diseases and specializes in LASIK & other surgical eye care.",
    },
    {
      image: "/gallery/opticalcenter.webp",
      sneakpeak: "Optical Center",
      title: "Optical Center",
      description:
        "Our Certified Optician, Dr. Joseph Godwin, has the expertise to provide you with the correct prescription and the correct frames for all ages.",
    },
    {
      image: "/gallery/lasik.webp",
      sneakpeak: "LASIK",
      title: "LASIK - Laser-Assisted In Situ Keratomileusis",
      description:
        "First successfully performed in 1989, LASIK stands for Laser Assisted in-Situ Keratomileusis, which when translated means to “shape inside the cornea with a laser.” It is used to treat a wide range of visual distortion.",
    },
    {
      image: "/gallery/surgery-center1.webp",
      sneakpeak: "Cedar Surgical Associates",
      title: "Cedar Surgical Associates",
      description:
        "Our Southern Utah Surgical Center is located in Cedar City. We specialize in LASIK Surgery and other Surgical Eye Care. Come in for a consultation.",
    },
    {
      image: "/gallery/optometry.webp",
      sneakpeak: "Glaucoma",
      title: "Glaucoma",
      description:
        "Glaucoma is a leading cause of blindness in the United States, especially for older people. ",
    },
    {
      image: "/gallery/surgery-center2.webp",
      sneakpeak: "Treatments",
      title: "Treatments",
      description:
        "Our treatments include, Lasik, Glaucoma, Macular Degeneration, Diabetic Retinopathy, and 'No Stitch' Cataract Surgery. If you would like to learn more about any of these treatments click the button below!",
    },
  ];

  const bannerlistItems = [
    {
      header: "Treatment of Diabetic Retinopathy",
      content:
        "Diabetic Retinopathy's two types can cause retinal swelling, severe vision loss through abnormal blood vessels and complications like hemorrhage and retinal detachment.",
      image: dr,
      alttext: "icon of an eye with diabetic retinopathy",
    },
    {
      header: "Treatment of Glaucoma",
      content:
        " Glaucoma, a leading cause of blindness, damages the optic nerve due to high eye pressure, but early treatment can prevent vision loss.",
      image: glaucoma,
      alttext: "icon of an eye with glaucoma",
    },
    {
      header: "Treatment of Macular Degeneration",
      content:
        "Macular Degeneration damages the macula, causing central vision blurriness or darkness, affecting both distance and close vision.",
      image: md,
      alttext: "icon of an eye with macular degeneration",
    },
    {
      header: "'No Stitch' Cataract Surgery",
      content:
        "A cataract is a clouding of the eye's lens, leading to blurry vision, often due to aging, injuries, diseases, medications, or genetics.",
      image: cataracts,
      alttext: "icon of an eye with cataracts",
    },
    {
      header: "LASIK",
      content:
        "LASIK is a safe, routine vision correction surgery using lasers to reshape the cornea.",
      image: lasik,
      alttext: "icon of lasik surgery",
    },
  ];

  return (
    <>
      <TopNav />
      <main className='main'>
        <Gallery items={galleryItems} />
        <div className='heading'>
          <h1>Mountain Eye Institute</h1>
          <h2>
            Cedar City&apos;s Ophthalmology, LASIK Surgery, & Optical Center
          </h2>
        </div>
        <TwoColumn />
        <h2>Treatments</h2>
        <BannerList items={bannerlistItems} />
        <a className='btn btn-light' href='/treatments'>
          Learn More
        </a>
        <DOP type={"round"} />
        <ContactCTA />
      </main>
      <Footer contact={true} />
    </>
  );
};

export default Home;
