"use client";
import React, { ReactElement } from "react";
import Image from "next/image";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "../../public/chevron-down.svg";
import amsler from "../../public/amsler_grid.webp";
import { cataracts, dr, glaucoma, lasik, md } from "../../public/eyes/eyes";
import Link from "next/link";

// Accordion package from https://szhsin.github.io/react-accordion/
const AccordionSzhsin = () => {
  const items = [
    {
      header: (
        <div className='btn-header'>
          <Image
            src={dr}
            alt='icon representing Diabetic Retinopathy'
            width={50}
            height={50}
          />
          <strong>Treatment for Diabetic Retinopathy</strong>
        </div>
      ),
      content: (
        <div className='btn-details'>
          <strong>What Is Diabetic Retinopathy?</strong>
          <br />
          There are two types of Diabetic Retinopathy: Nonproliferative Diabetic
          Retinopathy (NPDR) and Proliferative Diabetic Retinopathy (PDR). NPDR,
          commonly known as “Background Retinopathy,” is an early stage of
          Diabetic Retinopathy. In this stage, tiny blood vessels within the
          retina leak blood or fluid. The leaking fluid causes the retina to
          swell or to form deposits called exudates. Many people with diabetes
          have mild NPDR, which usually does not affect their vision. When
          vision is affected it is the result of Macular Edema and/or Macular
          Ischemia.
          <br />
          <br />
          Macular Edema is swelling, or thickening, of the macula, a small area
          in the center of the retina that allows us to see fine details
          clearly. The swelling is caused by fluid leaking from retinal blood
          vessels. It is the most common case of visual loss in diabetes. Vision
          loss may be mild to severe, but even in the worst cases, peripheral
          vision continue to function.
          <br />
          <br />
          Macular Ischemia occurs when small blood vessels (capillaries) close.
          Vision blurs because the macula no longer receives sufficient blood
          supply to work properly.
          <br />
          <br />
          PDR is present when abnormal new vessels (neovascularization) begin
          growing on the surface of the retina or optic nerve. The main cause of
          PDR is widespread closure of retinal blood vessels, preventing
          adequate blood flow. The retina responds by growing new blood vessels
          in an attempt to supply blood to the area where the original vessels
          closed. Unfortunately, the new, abnormal blood vessels do not resupply
          the retina with normal blood flow. The new vessels are often
          accompanied by scar tissue that may cause wrinkling or detachment of
          the retina. PDR may cause more sever vision loss than NPDR because it
          can affect both central and peripheral vision. Proliferative Diabetic
          Retinopathy causes visual loss in the following ways: Vitreous
          Hemorrhage: The fragile new vessels may bleed into the vitreous, a
          clear jelly-like substance that fills the center of the eye. If the
          Vitreous Hemorrhage is small, a person might see only a few new dark
          floaters. A very large hemorrhage might block out all vision. Vitreous
          Hemorrhage alone does not cause permanent vision loss. When the blood
          clears, visual acuity may return to its former level unless the macula
          is damaged. Traction Retinal Detachment: When PDR is present, scar
          tissue associated with neocavascularization can shrink, wrinkling and
          pulling the retina from its normal position. Macular wrinkling can
          cause visual distortion. More severe vision loss can occur if the
          macula or large areas of the retina are detached. Neovascular
          Glaucoma: Occasionally, extensive retinal vessel closure will cause
          new, abnormal blood vessels to grow on the iris (colored part of the
          eye) and block the normal flow of fluid out of the eye. Pressure in
          the eye builds up, resulting in Neovascular Glaucoma, a sever eye
          disease that causes damage to the optic nerve.
          <br />
          <br />
          <strong>How Is Diabetic Retinopathy Treated?</strong>
          <br />
          The best treatment is to prevent the development or retinopathy as
          much as possible. Strict control of your blood sugar will
          significantly reduce the long-term risk of vision loss from Diabetic
          Retinopathy. If high blood pressure and kidney problems are present,
          they need to be treated. Laser surgery is often recommended for people
          with Macular Edema, PDR and Neovascular Glaucoma.
        </div>
      ),
    },
    {
      header: (
        <div className='btn-header'>
          <Image
            src={glaucoma}
            alt='icon representing Glaucoma'
            width={50}
            height={50}
          />
          <strong>Treatment for Glaucoma</strong>
        </div>
      ),
      content: (
        <div className='btn-details'>
          <strong>What Is Glaucoma?</strong>
          <br />
          Glaucoma is a leading cause of blindness in the United States,
          especially for older people. But loss of sight from Glaucoma is often
          preventable if you get treatment early enough. Glaucoma is a disease
          of the optic nerve, The optic nerve carries the images we see to the
          brain. Many people know that Glaucoma has something to do with
          pressure inside the eye. The higher the pressure inside the eye.The
          greater chance of damage to the optic nerve. The optic nerve is made
          up of a huge number of nerve fibers, like an electric cable containing
          a huge number of wires. Glaucoma can damage nerve fibers, causing
          blind spots to develop. Usually people do not notice these blind areas
          until much optic nerve damage has already occurred. If the entire
          nerve is destroyed, blindness results.
          <br />
          <br />
          <strong>How Is Glaucoma Treated?</strong>
          <br />
          As a rule, damage caused by Glaucoma cannot be reversed. Eye drops,
          pills, and laser and surgical operation are used to prevent or slow
          further damage from occurring.
        </div>
      ),
    },
    {
      header: (
        <div className='btn-header'>
          <Image
            src={md}
            alt='icon representing Macular Degeneration'
            width={50}
            height={50}
          />
          <strong>Treatment for Macular Degeneration</strong>
        </div>
      ),
      content: (
        <div className='btn-details'>
          <strong>What Is Macular Degeneration?</strong>
          <br />
          Macular Degeneration is damage or breakdown of the macula. The macula
          is a small area at the back of the eye that allows us to see fine
          details clearly. When the macula doesn’t function correctly, we
          experience blurriness or darkness in the center of our vision. Macular
          Degeneration affects both distance and close vision, and can make some
          activities-like threading a needle or reading- difficult or
          impossible.
          <br />
          <br />
          Although Macular Degeneration reduces vision in the central part of
          the retina, it does not affect the eye’s side, or peripheral, vision.
          For example, you could see the outline of a clock bit not be able to
          tell what time it is. Macular Degeneration alone does not result in
          total blindness. People continue to have some useful vision and are
          able to take care of themselves.
          <br />
          <br />
          <strong>What Causes Macular Degeneration?</strong>
          <br />
          Many older people develop Macular Degeneration as part of the
          body&apos;s natural aging process.
          <br />
          <br />
          The two most common types of age-related Macular Degeneration are
          “dry” (atrophic) and “wet” (exudative).
          <br />
          <br />
          <strong>“Dry” Macular Degeneration (Atrophic)</strong>
          <br />
          Most people have “dry” Macular Degeneration. It is caused by aging and
          thinning of the tissues of the macula. Vision loss is usually gradual.
          <br />
          <br />
          <strong>“Wet” Macular Degeneration (Exudative)</strong>
          <br />
          “Wet” Macular Degeneration accounts for about 10% of all cases. It
          results when abnormal blood vessels from at the back of the eye. These
          new blood vessels leak fluid or blood and blur central vision. Vision
          loss may be rapid and severe.
          <br />
          <br />
          <strong>What Are The Symptoms Of Macular Degeneration?</strong>
          <br />
          Macular Degeneration can cause different symptoms in different people.
          The condition may be hardly noticeable in its early stages.. Sometimes
          only one eye loses vision while the other eye continues to see well
          for many years. But when both eyes are affected, the loss of central
          vision may be noticed more quickly.
          <strong>
            Following are some common ways vision loss is detected:
          </strong>
          <ul>
            <li>Words on a page look blurred</li>
            <li>A dark or empty area appears in the center of vision</li>
            <li>Straight lines look distorted as in the following diagram</li>
          </ul>
          <br />
          <strong>How Is Macular Degeneration Treated?</strong>
          <br />
          Despite ongoing medical research, there is no cure yet for “dry”
          Macular Degeneration. Some doctors believe that nutritional
          supplements may slow Macular Degeneration, although this has not yet
          been proven, Treatment of this condition focuses on helping a person
          find ways to cope with visual impairment.
          <br />
          <br />
          In its early stages “wet” Macular Degeneration can be treated with
          laser surgery, a brief and usually painless outpatient procedure.
          Laser surgery uses a highly focused beam of light to seal the leaking
          blood vessels that damage the macula. Although a small, permanently
          dark “blind spot” is left at the point of laser contact, the procedure
          can preserve more sight overall. Despite advanced medical treatment,
          many people with Macular Degeneration still experience some vision
          loss. Dr. Anderson can prescribe optical devises or refer you to a
          low-vision specialist or center . A wide range of support services and
          rehabilitation programs are also available to help people with Macular
          Degeneration maintain a satisfying lifestyle. Often, people can
          continue with many of their favorite activities by using low-vision
          optical devices such as magnifying devices, closed-circuit television,
          large-print reading materials, and talking or computerized devices.
          <br />
          <br />
          <strong>Testing Your Vision With The Amsler Grid</strong>
          <br />
          You can check you vision daily by using the Amsler grid like the one
          pictured below. You may find changes in your vision you wouldn&apos;t
          notice otherwise. Putting the grid on the front of your refrigerator
          is a good way to remember to look at it each day.
          <br />
          <br />
          <strong>To use the grid:</strong>
          <br />
          <ul>
            <li>
              Wear your reading glasses and hold this grid at 12-15 inches in
              good light.
            </li>
            <li>Cover one eye.</li>
            <li>Look directly at the center dot.</li>
            <li>
              While looking directly at the center dot, note whether all lines
              of the grid are straight or if any areas are distorted, blurred or
              dark.
            </li>
            <li>Repeat this procedure with the other eye.</li>
          </ul>
          <br />
          If any area of the grid looks wavy,{" "}
          <Link href='/contact'>contact Dr. Anderson immediately</Link>.
          <br />
          <br />
          <Image src={amsler} alt='Amsler grid' />
        </div>
      ),
    },
    {
      header: (
        <div className='btn-header'>
          <Image
            src={cataracts}
            alt='icon representing Cataracts'
            width={50}
            height={50}
          />
          <strong>&apos;No Stitch&apos; Cataract Surgery</strong>
        </div>
      ),
      content: (
        <div className='btn-details'>
          <strong>What Is A Cataract?</strong>
          <br />
          A Cataract is a clouding of the normally clear lens of the eye. The
          lens focuses light rays on the retina at the back of the eye to
          produce a sharp image of what we see. When the lens becomes cloudy,
          the light rays cannot pass easily through it, and the image becomes
          blurry. Cataracts usually develop as part of the aging process, but
          can also come from:
          <br />
          <br />
          <ul>
            <li>Eye Injuries</li>
            <li>Certain Diseases</li>
            <li>Medications</li>
            <li>Genetic Inheritance</li>
          </ul>
          <br />
          <strong>How Can A Cataract Be Treated?</strong>
          <br />
          The Cataract may need no treatment at all if the vision is only a
          little blurry. A change in your eyeglass prescription may improve
          vision for a while. There are no medication, eye drops, exercises or
          glasses that will cause Cataracts to disappear once they have formed.
          When you are not able to see well enough to do the things you like to
          do, Cataract surgery should be considered. Surgery is the only way to
          remove them. Cataracts cannot be removed with a laser, only through a
          surgical incision. In Cataract surgery, the cloudy lens is restored by
          replacing it with a permanent intraocular lens implant.
        </div>
      ),
    },
    {
      header: (
        <div className='btn-header'>
          <Image
            src={lasik}
            alt='icon representing LASIK surgery'
            width={50}
            height={50}
          />
          <strong>LASIK</strong>
        </div>
      ),
      content: (
        <div className='btn-details'>
          Regardless of how old you are, it&apos;s important to have an
          ophthalmologist in Cedar City, UT that you can rely on. Ophthalmology
          specialists are integral for primary eye care and surgical procedures
          for your eye health.
          <br />
          <br />
          If you are looking for quality LASIK, look to Mountain Eye Institute.
          Our complete surgery center uses only the most advanced practices and
          tools. Each person on our friendly and skilled team is prepared to
          bring exceptional eye services to those in Cedar City, UT.
          <br />
          <br />
          <strong>What is LASIK?</strong>
          <br />
          LASIK surgery is a routine surgery to fix vision. It uses a
          femtosecond laser to cut a small flap on the cornea so the doctor can
          access the tissue, which is underneath the cornea. The tissue is
          shaped again using an Excimer laser and the corneal flap is laid back.
          LASIK is a very safe and common practice. First successfully performed
          in 1989, LASIK stands for Laser Assisted in-Situ Keratomileusis, which
          when translated means to “shape inside the cornea with a laser.” It is
          used to treat a wide range of visual distortion. Before conducting the
          LASIK procedure, numbing drops are administered to the eyes and, while
          the patient is awake, a microkeratome is used to fold back a thin flap
          of the cornea. An Excimer laser is then used to vaporize a small
          amount of tissue from inside the cornea. The amount removed is
          determined by each person&apos;s prescription, but is typically far
          less than the thickness of a human hair. The flap of tissue is then
          folded back into place where it acts as a natural bandage. After the
          procedure, drops may be used to prevent infection. The patient is then
          sent home to relax before going back to work the next day. Reasonable
          normal vision can be expected within 24 hours, but the full effects of
          the procedure may not be achieved for two to four weeks. Call Dr.
          Christian today at <Link href='tel:4355861131'>
            (435) 586-1131
          </Link>{" "}
          to set up a free screening to see if you are a candidate for LASIK.
        </div>
      ),
    },
  ];

  const AccordionItem = ({
    header,
    ...rest
  }: {
    children: ReactElement;
    header: ReactElement;
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
    <section className='accordion-szhsin component'>
      <Accordion>
        {items.map(({ header, content }, i) => (
          <AccordionItem header={header} key={i}>
            {content}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default AccordionSzhsin;
