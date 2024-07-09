"use client";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import AccordionSzhsin from "@/components/AccordionSzhsin";
import BannerList from "@/components/BannerList";
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

const Contact = () => {
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
      <TopNav viewportWidth={viewportWidth} />
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
      <Footer contact={true} tall={true} />
    </>
  );
};

export default Contact;
