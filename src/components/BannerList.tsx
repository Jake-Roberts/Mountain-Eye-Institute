import Image, { StaticImageData } from "next/image";

const BannerList = ({
  items,
}: {
  items: {
    header: string;
    content: string;
    image: StaticImageData | undefined;
    alttext: string;
  }[];
}) => {
  return (
    <section className='bannerlist component'>
      <ul>
        {items.map(({ header, content, image, alttext }, index) => {
          return (
            <li className='card' key={index}>
              {image && (
                <div className='icon'>
                  <Image src={image} alt={alttext} width={80} height={80} />
                </div>
              )}
              <div className='info'>
                <h3 className='title'>{header}</h3>
                <p className='details'>{content}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BannerList;
