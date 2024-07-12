"use client";
import Image from "next/image";
import logo from "../../public/logo.webp";
import Link from "next/link";
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

const TopNav = () => {
  // const [viewportWidth, setViewportWidth] = useState<number>(useWindowSize());
  const viewportWidth = useWidth();

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setViewportWidth(window.innerWidth);
  //   });
  // }, []);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header>
      <div className='infobar'>
        <a href='tel:4355861131'>(435) 586-1131</a>
        {viewportWidth <= 900 ? (
          <a className='btn' href='https://goo.gl/maps/vW9DfknEoBU2'>
            Map
          </a>
        ) : (
          <a href='https://goo.gl/maps/vW9DfknEoBU2'>1811 W. Royal Hunte Dr.</a>
        )}
      </div>
      <div className='topnav'>
        <Link href='/' className='logolink'>
          <Image src={logo} alt='company logo' width={535} height={156} />
        </Link>
        {viewportWidth <= 900 ? (
          <>
            <nav className={`navlinks ${isOpen ? "open" : ""}`}>
              <ul>
                <li>
                  <a href='/treatments'>Treatments</a>
                </li>
                <li>
                  <a href='/about'>About</a>
                </li>
                <li>
                  <a href='/contact'>Contact</a>
                </li>
                <li>
                  <a
                    href='files/New-Patient-Form.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    New Patient Form
                  </a>
                </li>
              </ul>
            </nav>
            <button
              aria-label='navigation menu button'
              className={`hamburger ${isOpen ? "change" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </>
        ) : (
          <>
            <nav className='navlinks'>
              <a href='/treatments'>Treatments</a>
              <a href='/about'>About</a>
              <a href='/contact'>Contact</a>
              <a
                href='files/New-Patient-Form.pdf'
                target='_blank'
                rel='noopener noreferrer'
              >
                New Patient Form
              </a>
            </nav>
            <a
              className='contact-btn'
              href='http://www.mypatientvisit.com/'
              target='_blank'
            >
              Patient Portal
            </a>
          </>
        )}
      </div>
    </header>
  );
};

export default TopNav;
