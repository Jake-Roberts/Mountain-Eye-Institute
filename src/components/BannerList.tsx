import Image from "next/image";
import { cataracts, dr, glaucoma, lasik, md } from "../../public/eyes/eyes.js";

const BannerList = () => {
  return (
    <section className='bannerlist component'>
      <h2>Treatments</h2>
      <ul>
        <li className='card'>
          <div className='icon'>
            <Image
              src={dr}
              alt='icon of an eye with diabetic retinopathy'
              width={80}
              height={80}
            />
          </div>
          <div className='info'>
            <h3 className='title'>Treatment of Diabetic Retinopathy</h3>
            <p className='details'>
              Diabetic Retinopathy&apos;s two types can cause retinal swelling,
              severe vision loss through abnormal blood vessels and
              complications like hemorrhage and retinal detachment.
            </p>
          </div>
        </li>
        <li className='card'>
          <div className='icon'>
            <Image
              src={glaucoma}
              alt='icon of an eye with glaucoma'
              width={80}
              height={80}
            />
          </div>
          <div className='info'>
            <h3 className='title'>Treatment of Glaucoma</h3>
            <p className='details'>
              Glaucoma, a leading cause of blindness, damages the optic nerve
              due to high eye pressure, but early treatment can prevent vision
              loss.
            </p>
          </div>
        </li>
        <li className='card'>
          <div className='icon'>
            <Image
              src={md}
              alt='icon of an eye with macular degeneration'
              width={80}
              height={80}
            />
          </div>
          <div className='info'>
            <h3 className='title'>Treatment of Macular Degeneration</h3>
            <p className='details'>
              Macular Degeneration damages the macula, causing central vision
              blurriness or darkness, affecting both distance and close vision.
            </p>
          </div>
        </li>
        <li className='card'>
          <div className='icon'>
            <Image
              src={cataracts}
              alt='icon of an eye with cataracts'
              width={80}
              height={80}
            />
          </div>
          <div className='info'>
            <h3 className='title'>&apos;No Stitch&apos; Cataract Surgery</h3>
            <p className='details'>
              A cataract is a clouding of the eye&apos;s lens, leading to blurry
              vision, often due to aging, injuries, diseases, medications, or
              genetics.
            </p>
          </div>
        </li>
        <li className='card'>
          <div className='icon'>
            <Image
              src={lasik}
              alt='icon of lasik surgery'
              width={80}
              height={80}
            />
          </div>
          <div className='info'>
            <h3 className='title'>LASIK</h3>
            <p className='details'>
              LASIK is a safe, routine vision correction surgery using lasers to
              reshape the cornea.
            </p>
          </div>
        </li>
      </ul>
      <a className='btn btn-light' href='/treatments'>
        Learn More
      </a>
    </section>
  );
};

export default BannerList;
