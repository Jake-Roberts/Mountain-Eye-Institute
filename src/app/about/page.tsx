"use client";
import ContactCTA from "@/components/ContactCTA";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import TwoColumn from "@/components/TwoColumn";
import headerImage from "../../../public/gallery/lasik.webp";
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

  const headerText = [
    "Mountain Eye Institute is where Southern Utah goes for Eye Care!",
    "About Mountain Eye Institute",
  ];
  const bodyText =
    "Regardless of how old you are, it's important to have an ophthalmologist in Cedar City, UT that you can rely on. Ophthalmology specialists are integral for primary eye care and surgical procedures for your eye health. If you are looking for quality eye care, look to Mountain Eye Institute. Our complete ophthalmology practice uses only the most advanced practices and tools. Our board-certified ophthalmologists provide each of our clients with a wide range of optometrist services. Each person on our friendly and skilled team is prepared to bring exceptional eye services to those in Cedar City, UT.";

  return (
    <>
      <TopNav viewportWidth={viewportWidth} />
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
