import Image from "next/image";
import { addressicon, hoursicon, phoneicon } from "../../public/icons/icons";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <a href="https://maps.app.goo.gl/vdE1YAZiXVk8CWom9" className="address">
          <Image src={addressicon} alt="map pin icon" />
          <strong>Address</strong>
          <div className="content">
            <p>1811 W. Royal Hunte Dr., Suite 1<br/>
            Cedar City, UT 84720</p>
          </div>
        </a>
        <div className="hours">
          <Image src={hoursicon} alt="clock icon" />
          <strong>Hours</strong>
          <div className="content">
            <p><strong>Monday:</strong> 8:00 AM - 5:00 PM </p>
            <p><strong>Tuesday:</strong> 8:00 AM - 5:00 PM </p>
            <p><strong>Wednesday:</strong> 8:00 AM - 5:00 PM </p>
            <p><strong>Thursday:</strong> 8:00 AM - 5:00 PM </p>
            <p><strong>Friday:</strong> 8:00 AM - 5:00 PM </p>
            <p><strong>Saturday:</strong> Closed</p>
            <p><strong>Sunday:</strong> Closed</p>
          </div>
        </div>
        <a href="tel:4355861131" className="phone">
          <Image src={phoneicon} alt="phone icon" />
          <strong>Phone</strong>
          <div className="content">
            <p>(435) 586-1131</p>
          </div>
        </a>
      </div>
      <div className="attribution">
        <p className='copyright'>Copyright ©2024 Mountain Eye Institute</p>
        <p>|</p>
        <a href='www.nextleveltech.com'>Created by Next Level Technologies</a>
      </div>
    </footer>
  );
};

export default Footer;
