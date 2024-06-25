
import mountain1 from "../../public/gallery/optometry.webp";
import Image, { StaticImageData } from "next/image";

const TwoColumn = ({
  header,
  side,
  image,
}: {
  header: boolean;
  side: string;
  image: StaticImageData;
}) => {
  return (
    <section className='two-column component'>
      <div className='content'>
        {header ? (
          side === "left" ? (
            <>
              <div className='img-wrapper'>
                <Image src={image} alt='some mountain' />
              </div>
              <div className='text'>
                <h1>About Mountain Eye Institute</h1>
                <h2>
                  Mountain Eye Institute is where Southern Utah goes for Eye
                  Care!
                </h2>
                <br />
                <strong>
                  Regardless of how old you are, it’s important to have an
                  ophthalmologist in Cedar City, UT that you can rely on.
                  Ophthalmology specialists are integral for primary eye care
                  and surgical procedures for your eye health. If you are
                  looking for quality eye care, look to Mountain Eye Institute.
                  Our complete ophthalmology practice uses only the most
                  advanced practices and tools. Our board-certified
                  ophthalmologists provide each of our clients with a wide range
                  of optometrist services. Each person on our friendly and
                  skilled team is prepared to bring exceptional eye services to
                  those in Cedar City, UT.
                </strong>
              </div>
            </>
          ) : (
            <>
              <div className='text'>
                <h1>About Mountain Eye Institute</h1>
                <h2>
                  Mountain Eye Institute is where Southern Utah goes for Eye
                  Care!
                </h2>
                <br />
                <strong>
                  Regardless of how old you are, it’s important to have an
                  ophthalmologist in Cedar City, UT that you can rely on.
                  Ophthalmology specialists are integral for primary eye care
                  and surgical procedures for your eye health. If you are
                  looking for quality eye care, look to Mountain Eye Institute.
                  Our complete ophthalmology practice uses only the most
                  advanced practices and tools. Our board-certified
                  ophthalmologists provide each of our clients with a wide range
                  of optometrist services. Each person on our friendly and
                  skilled team is prepared to bring exceptional eye services to
                  those in Cedar City, UT.
                </strong>
              </div>
              <div className='img-wrapper'>
                <Image src={image} alt='some mountain' />
              </div>
            </>
          )
        ) : side === "left" ? (
          <>
            <div className='img-wrapper'>
              <Image src={image} alt='some mountain' />
            </div>
            <div className='text'>
              <p>
                Mountain Eye Institute is where Southern Utah goes for Eye Care!
                <br />
                <br />
                Regardless of how old you are, it’s important to have an
                ophthalmologist in Cedar City, UT that you can rely on.
                Ophthalmology specialists are integral for primary eye care and
                surgical procedures for your eye health. If you are looking for
                quality eye care, look to Mountain Eye Institute. Our complete
                ophthalmology practice uses only the most advanced practices and
                tools. Our board-certified ophthalmologists provide each of our
                clients with a wide range of optometrist services. Each person
                on our friendly and skilled team is prepared to bring
                exceptional eye services to those in Cedar City, UT.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className='text'>
              <p>
                Mountain Eye Institute is where Southern Utah goes for Eye Care!
                <br />
                <br />
                Regardless of how old you are, it’s important to have an
                ophthalmologist in Cedar City, UT that you can rely on.
                Ophthalmology specialists are integral for primary eye care and
                surgical procedures for your eye health. If you are looking for
                quality eye care, look to Mountain Eye Institute. Our complete
                ophthalmology practice uses only the most advanced practices and
                tools. Our board-certified ophthalmologists provide each of our
                clients with a wide range of optometrist services. Each person
                on our friendly and skilled team is prepared to bring
                exceptional eye services to those in Cedar City, UT.
              </p>
            </div>
            <div className='img-wrapper'>
              <Image src={image} alt='some mountain' />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TwoColumn;
