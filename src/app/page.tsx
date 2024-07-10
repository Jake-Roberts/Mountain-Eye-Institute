"use client";
import Gallery from "@/components/Gallery";
import DOP from "@/components/DOP";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import TwoColumn from "@/components/TwoColumn";
import BannerList from "@/components/BannerList";
import { cataracts, dr, glaucoma, lasik, md } from "../../public/eyes/eyes.js";
import {
  anderson,
  christian,
  duncan,
  godwin,
  olson,
} from "../../public/dop/dop";
import { StaticImageData } from "next/image";
import twoColumnImage from "../../public/gallery/lasik.webp";
import { useEffect, useState } from "react";

// function useWindowSize() {
//   // Initialize state with undefined width/height so server and client renders match
//   // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
//   const [windowSize, setWindowSize] = useState<{
//     width: number | undefined;
//     height: number | undefined;
//   }>({
//     width: undefined,
//     height: undefined,
//   });

//   useEffect(() => {
//     // only execute all the code below in client side
//     // Handler to call on window resize
//     function handleResize() {
//       // Set window width/height to state
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }

//     // Add event listener
//     window.addEventListener("resize", handleResize);

//     // Call handler right away so state gets updated with initial window size
//     handleResize();

//     // Remove event listener on cleanup
//     return () => window.removeEventListener("resize", handleResize);
//   }, []); // Empty array ensures that effect is only run on mount
//   // if (typeof windowSize.width === "number") {
//   //   return windowSize.width;
//   // } else return windowSize.width;
//   return windowSize.width;
// }

const useWidth = () => {
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};

const Home = () => {
  // const [viewportWidth, setViewportWidth] = useState<number>(useWindowSize());
  const viewportWidth = useWidth();

  useEffect(() => {
    console.log(viewportWidth);
  }, [viewportWidth]);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setViewportWidth(window.innerWidth);
  //   });
  // }, []);

  const headerText = [
    "Mountain Eye Institute is where Southern Utah goes for Eye Care!",
  ];

  const bodyText = `Regardless of how old you are, it's important to have an ophthalmologist in Cedar City, UT that you can rely on. Ophthalmology specialists are integral for primary eye care and surgical procedures for your eye health. If you are looking for quality eye care, look to Mountain Eye Institute. Our complete ophthalmology practice uses only the most advanced practices and tools. Our board-certified ophthalmologists provide each of our clients with a wide range of optometrist services. Each person on our friendly and skilled team is prepared to bring exceptional eye services to those in Cedar City, UT.`;

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
        "Our Certified Optician, Joseph Godwin, has the expertise to provide you with the correct prescription and the correct frames for all ages.",
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

  interface People {
    image: StaticImageData;
    alt: string;
    fname: string;
    lname: string;
    title: string;
    bio: React.JSX.Element;
  }

  const people: People[] = [
    {
      image: anderson,
      alt: "Dr. Anderson",
      fname: "Chad W.",
      lname: "Anderson",
      title: "M.D., FAAO",
      bio: (
        <p className='bio'>
          Dr. Anderson is a leading eye surgeon with expertise in the latest
          surgical and medical <a href='/treatments'>treatments</a> for eye
          disease including treatment for: Cataracts, Glaucoma, Macular
          Degeneration and Diabetes. After graduating Magna Cum Laude from
          Southern Utah University, Dr. Anderson received his medical degree
          from Loma Linda University school of Medicine in California where he
          received the Macpherson Society Research Fellowship Award. He then
          completed a Research Fellowship in Ophthalmic Pathology at the
          University of Utah Medical Center. During his surgical residency in
          Ophthalmology at the University of Kentucky, he received the
          Outstanding Resident Teaching Award, The Outstanding Resident Research
          Award, and served as Chief Resident. In 1995 he established Mountain
          Eye Clinic in Cedar City and serves as Medical Director. Since joining
          the medical staff of Valley View Medical Center, Dr. Anderson has
          served as Chief of Surgery (97-98), Chief of Staff (98-99), and is
          currently serving as Credentials Committee chairman and delegate to
          the Utah Medical Association. Dr. Anderson is Board Certified as a
          member of the American Academy of Ophthalmology. In his free time he
          enjoys his family, scuba diving, skiing and cycling.`
        </p>
      ),
    },
    {
      image: christian,
      alt: "Dr. Christian",
      fname: "Rory J.",
      lname: "Christian",
      title: "O.D.",
      bio: (
        <p className='bio'>
          Dr. Duncan practices surgical and medical ophthalmology in our
          practice. With expertise in the latest medical and surgical{" "}
          <a href='/treatments'>treatments</a> for eye diseases including:
          Cataracts, Glaucoma, Macular Degeneration, Diabetes and Pediatric
          Strabismus surgery. After graduating Summa Cum Laude from Southern
          Utah University, Dr. Duncan received his medical degree from
          Pennsylvania State University College of Medicine where he received
          the Dr. Irwin L. Baird Memorial Award and The Berman Memorial
          Scholarship in Ophthalmology. He served his residency at University of
          Texas health Center at San Antonio Department of Ophthalmology. Where
          he was chief of Staff before joining Mountain Eye Institute.
        </p>
      ),
    },
    {
      image: duncan,
      alt: "Dr. Duncan",
      fname: "Clinton",
      lname: "Duncan",
      title: "M.D.",
      bio: (
        <p className='bio'>
          Dr. Duncan practices surgical and medical ophthalmology in our
          practice. With expertise in the latest medical and surgical{" "}
          <a href='/treatments'>treatments</a> for eye diseases including:
          Cataracts, Glaucoma, Macular Degeneration, Diabetes and Pediatric
          Strabismus surgery. After graduating Summa Cum Laude from Southern
          Utah University, Dr. Duncan received his medical degree from
          Pennsylvania State University College of Medicine where he received
          the Dr. Irwin L. Baird Memorial Award and The Berman Memorial
          Scholarship in Ophthalmology. He served his residency at University of
          Texas health Center at San Antonio Department of Ophthalmology. Where
          he was chief of Staff before joining Mountain Eye Institute.
        </p>
      ),
    },
    {
      image: godwin,
      alt: "Joseph Godwin",
      fname: "Joseph",
      lname: "Godwin",
      title: "ABOC",
      bio: (
        <p className='bio'>
          Joseph L. Godwin has been certified by the American Board of Opticians
          since 1988. He began pursuing his career in the Optical industry after
          enlisting in the US Army in 1983. In 1986 He began eye wear
          manufacturing for Lens Crafters in Brea, Ca. He supervised an optical
          retail store: “Eyes on Laguna” in Laguna Beach, Ca. till 1990 and
          optical manufacturing for Drs Cohen and Cohen in Downey, Ca. until
          1994. He relocated to beautiful Southern Utah for employment with
          Ronald L. Snow M.D. in St George, Utah in 1994. He has been the
          optical manager for Chad W Anderson M.D. since 2008. Joseph is a
          Certified Optician with an expertise in providing you with the correct
          prescription and the correct frames for all ages. He is a Certified
          Optician with an expertise in providing you with the correct
          prescription and the correct frames for all ages.
        </p>
      ),
    },
    {
      image: olson,
      alt: "Dr. Olson",
      fname: "C. Kelly",
      lname: "Olson",
      title: "O.D., MBA",
      bio: (
        <p className='bio'>
          `Dr. Olson retired from the U.S. Army after a 30-year distinguished
          career, achieving the rank of Colonel. He and his wife, Valarie, have
          returned to their roots by coming home to Southern Utah. Originally
          from Fillmore, Dr. Olson graduated Summa Cum Laude from Southern Utah
          University where he earned the R. Kenneth Benson Award, SUU&apos;s
          highest student award. He earned his optometry degree at Southern
          California College of Optometry and then completed an MBA and
          Optometric residency at Northeastern State University. Dr. Olson is
          excited to serve our practice using his advanced training and vast
          experience with specialty contact lenses including scleral lenses. Dr.
          Olson enjoys doing a variety of activities with his family in
          beautiful Southern Utah. Some of these include camping, backpacking,
          fishing, woodworking, pickleball and just being together.
        </p>
      ),
    },
  ];

  return (
    <>
      <TopNav viewportWidth={viewportWidth} />
      <main className='main'>
        {viewportWidth > 900 && <Gallery items={galleryItems} />}
        <div className='heading'>
          <h1>Mountain Eye Institute</h1>
          <h2>
            Cedar City&apos;s Ophthalmology, LASIK Surgery, & Optical Center
          </h2>
        </div>
        <TwoColumn
          header={false}
          headerText={headerText}
          side={"left"}
          image={twoColumnImage}
          body={bodyText}
        />
        <h2 className='treatments-heading'>Treatments</h2>
        <BannerList items={bannerlistItems} />
        <a className='btn btn-light' href='/treatments'>
          Learn More
        </a>
        <h2>Meet the Doctors</h2>
        <h3>The Best in Southern Utah</h3>
        <DOP type={"round"} people={people} />
        <ContactCTA />
      </main>
      <Footer contact={true} tall={true} />
    </>
  );
};

export default Home;
