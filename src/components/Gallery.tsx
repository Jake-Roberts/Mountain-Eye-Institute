"use client";
import Image from "next/image";
import React, { useState } from "react";

interface GalleryProps {
  items: { image: string; title: string; description: string }[];
}

const Gallery = ({ items }: GalleryProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const setupQueue = items.map((item, index) => {
    return `${index}`;
  });
  const [classQueue, setClassQueue] = useState(setupQueue);

  const next = () => {
    setIsTransitioning(true);
    const tempArray = classQueue;
    const currentItem = tempArray[0];
    setTimeout(() => {
      tempArray.shift();
      tempArray.push(currentItem);
      setClassQueue(tempArray);
      setIsTransitioning(false);
    }); // Match the transition duration
  };

  return (
    <div className='galleryContainer'>
      <div className='thumbnails'>
        {items.map((item, index) => {
          return (
            <div key={index} className={`thumbnail index${classQueue[index]}`}>
              <Image
                src={item.image}
                alt='test image'
                height={1149}
                width={1920}
              />
            </div>
          );
        })}
      </div>
      <div className='next' onClick={() => next()}>
        Next
      </div>
    </div>
  );
};

export default Gallery;
