import Image from "next/image";
import { addressicon, hoursicon, phoneicon } from "../../public/icons/icons";

const ThreeColumnInfo = ({ tall }: { tall: boolean }) => {
  if (tall === true) {
    return (
      <div className='three-column-info tall component'>
        <a href='https://maps.app.goo.gl/vdE1YAZiXVk8CWom9' className='address'>
          <Image src={addressicon} alt='map pin icon' />
          <strong>Address</strong>
          <div className='content'>
            <p>
              1811 W. Royal Hunte Dr., Suite 1<br />
              Cedar City, UT 84720
            </p>
          </div>
        </a>
        <div className='hours'>
          <Image src={hoursicon} alt='clock icon' />
          <strong>Hours</strong>
          <div className='content'>
            <p>
              <strong>Mon - Fri:</strong>
              <span> 8:00 AM - 5:00 PM</span>
            </p>
            <p>
              <strong>Sat - Sun:</strong>
              <span> Closed</span>
            </p>
          </div>
        </div>
        <a href='tel:4355861131' className='phone'>
          <Image src={phoneicon} alt='phone icon' />
          <strong>Phone</strong>
          <div className='content'>
            <p>(435) 586-1131</p>
          </div>
        </a>
      </div>
    );
  } else
    return (
      <div className='three-column-info component'>
        <a href='https://maps.app.goo.gl/vdE1YAZiXVk8CWom9' className='address'>
          <Image src={addressicon} alt='map pin icon' />
          <strong>Address</strong>
          <div className='content'>
            <p>
              1811 W. Royal Hunte Dr., Suite 1<br />
              Cedar City, UT 84720
            </p>
          </div>
        </a>
        <div className='hours'>
          <Image src={hoursicon} alt='clock icon' />
          <strong>Hours</strong>
          <div className='content'>
            <p>
              <strong>Mon - Fri:</strong>
              <span> 8:00 AM - 5:00 PM</span>
            </p>
            <p>
              <strong>Sat - Sun:</strong>
              <span> Closed</span>
            </p>
          </div>
        </div>
        <a href='tel:4355861131' className='phone'>
          <Image src={phoneicon} alt='phone icon' />
          <strong>Phone</strong>
          <div className='content'>
            <p>(435) 586-1131</p>
          </div>
        </a>
      </div>
    );
};

export default ThreeColumnInfo;
