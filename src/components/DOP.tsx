"use client";
import Image, { StaticImageData } from "next/image";
import { useState, useRef, useEffect, LegacyRef } from "react";
import React from "react";

interface People {
  image: StaticImageData;
  alt: string;
  fname: string;
  lname: string;
  title: string;
  bio: React.JSX.Element;
}

const DOP = ({ type, people }: { type: string; people: People[] }) => {
  const [open, setOpen] = useState("modal");
  const [modalPerson, setModalPerson] = useState(0);
  const modalRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === "Escape") {
        setOpen("modal");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpen("modal");
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const openModal = (index: number) => {
    setModalPerson(index);
    setOpen("modal active");
  };

  return (
    <section className='dop component'>
      <div className='directory'>
        {type === "round"
          ? people.length &&
            people.map((person, index) => {
              return (
                <div
                  className='person round'
                  key={index}
                  onClick={() => openModal(index)}
                >
                  <div className='image-wrapper'>
                    <Image
                      src={person.image}
                      alt={person.alt}
                      width={212}
                      height={265}
                    />
                  </div>
                  <p>
                    {person.fname} {person.lname},
                  </p>
                  <p>{person.title}</p>
                  <p className='info'>i</p>
                </div>
              );
            })
          : people.length &&
            people.map((person, index) => {
              return (
                <div
                  className='person square'
                  key={index}
                  onClick={() => openModal(index)}
                >
                  <div className='image-wrapper'>
                    <Image
                      src={person.image}
                      alt={person.alt}
                      width={212}
                      height={265}
                    />
                  </div>
                  <div className='details'>
                    <div className='name-and-title'>
                      <p>
                        {person.fname} {person.lname},
                      </p>
                      <p>{person.title}</p>
                    </div>
                    <p className='info'>i</p>
                  </div>
                </div>
              );
            })}
        <div className={open} ref={modalRef as LegacyRef<HTMLDivElement>}>
          <div className='modal-content'>
            <div className='person'>
              <Image
                src={people[modalPerson].image}
                alt={people[modalPerson].alt}
                width={212}
                height={265}
              />
              <div className='name-and-title'>
                <p>
                  {people[modalPerson].fname} {people[modalPerson].lname},
                </p>
                <p>{people[modalPerson].title}</p>
              </div>
            </div>
            {people[modalPerson].bio}
          </div>
          <a id='close' onClick={() => setOpen("modal")}></a>
        </div>
      </div>
    </section>
  );
};

export default DOP;
