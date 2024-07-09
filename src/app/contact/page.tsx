"use client";
import ContactUs from "@/components/ContactForm";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import GReviewCarousel from "@/components/GReviewCarousel";
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

  // only files in app have access to server-side environment variables
  // for that reason we must pass the .env.local keys as props from here
  const props = {
    apiKey: process.env.GOOGLE_MAPS_API_KEY,
    mapId: process.env.MAP_ID,
  };

  return (
    <>
      <TopNav viewportWidth={viewportWidth} />
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
            </div>
            <GReviewCarousel />
          </div>
        </div>
        <ContactUs />
      </main>
      <Footer contact={false} tall={false} />
    </>
  );
};

export default Contact;
