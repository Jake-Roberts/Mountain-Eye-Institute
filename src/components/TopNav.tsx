"use client";
import Image from "next/image";
import logo from "../../public/logo.webp";
import Link from "next/link";
import { useState } from "react";

const TopNav = ({ viewportWidth }: { viewportWidth: number }) => {
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
