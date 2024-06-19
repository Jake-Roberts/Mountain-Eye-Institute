"use client";
import React from "react";
import Image from "next/image";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "../../public/chevron-down.svg";

// Accordion package from https://szhsin.github.io/react-accordion/
const AccordionSzhsin = () => {
  const items = [
    {
      header: "Treatment for Diabetic Retinopathy",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
    },
    {
      header: "Treatment for Glaucoma",
      content: "Quisque eget luctus mi, vehicula mollis lorem...",
    },
    {
      header: "Treatment for Macular Degeneration",
      content: "Quisque eget luctus mi, vehicula mollis lorem...",
    },
    {
      header: `'No Stitch' Cataract Surgery`,
      content: "Quisque eget luctus mi, vehicula mollis lorem...",
    },
    {
      header: "LASIK",
      content: "Suspendisse massa risus, pretium id interdum in...",
    },
  ];

  const AccordionItem = ({
    header,
    ...rest
  }: {
    children: string;
    header: string;
    key: number;
  }) => (
    <Item
      {...rest}
      header={
        <>
          {header}
          <Image
            className='chevron-down'
            src={chevronDown}
            alt='Chevron Down'
          />
        </>
      }
    />
  );

  return (
    <>
      <h1>Treatments</h1>
      <p>Learn more about the treatments offered at Mountain Eye Institute</p>
      <Accordion>
        {items.map(({ header, content }, i) => (
          <AccordionItem header={header} key={i}>
            {content}
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default AccordionSzhsin;
