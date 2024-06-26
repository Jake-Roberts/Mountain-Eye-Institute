import mountain1 from "../../public/gallery/optometry.webp";
import Image, { StaticImageData } from "next/image";

const TwoColumn = ({
  header,
  headerText,
  side,
  image,
  body,
}: {
  header: boolean;
  headerText: string[];
  side: string;
  image: StaticImageData;
  body: string;
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
                <h1>{headerText[1]}</h1>
                <h2>{headerText[0]}</h2>
                <br />
                <strong>{body}</strong>
              </div>
            </>
          ) : (
            <>
              <div className='text'>
                <h1>{headerText[1]}</h1>
                <h2>{headerText[0]}</h2>
                <br />
                <strong>{body}</strong>
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
                {headerText[0]}
                <br />
                <br />
                {body}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className='text'>
              <p>
                {headerText[0]}
                <br />
                <br />
                {body}
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
