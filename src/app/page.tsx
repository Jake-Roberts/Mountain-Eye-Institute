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
      image: "/gallery/mountain6.webp",
      title: "Mountain",
      description: "A mountain for sure",
    },
    {
      image: "/gallery/mountain5.webp",
      title: "Mountain",
      description: "A mountain for sure",
    },
    {
      image: "/gallery/mountain4.webp",
      title: "Mountain",
      description: "A very nice mountain",
    },
    {
      image: "/gallery/mountain3.webp",
      title: "Mountain",
      description: "Close up of a blue eye",
    },
    {
      image: "/gallery/mountain2.webp",
      title: "Mountain",
      description: "View of Mountain",
    },
    {
      image: "/gallery/mountain1.webp",
      title: "Mountain",
      description: "View of zion",
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
