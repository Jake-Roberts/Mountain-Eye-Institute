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

  const activeIndex = classQueue.indexOf("0")

  return (
    <div className='galleryContainer'>
      <div className="activeText">
        <h2>{items[activeIndex].title}</h2>
        <p>{items[activeIndex].description}</p>
      </div>
      <div className='thumbnails'>
        {items.map((item, index) => {
          const isActive = classQueue[index] === "0";
          return (
            <div key={index} className={`thumbnail index${classQueue[index]}`}>
              <Image
                src={item.image}
                alt='test image'
                height={1149}
                width={1920}
              />
              <div className={`thumbnailTitle ${isActive ? "hide" : ""}`}>{item.title}</div>
            </div>
          );
        })}
      </div>
      <div className="navigation">
        <div className="dots">
          {items.map((_, index) => (
            <div key={index} className={`dot ${index === activeIndex ? "active" : ""}`}></div>
          ))}
        </div>
        <div className="arrow" onClick={() => next()}>
          ➔
        </div>
      </div>
    </div>
  );
};

export default Gallery;
