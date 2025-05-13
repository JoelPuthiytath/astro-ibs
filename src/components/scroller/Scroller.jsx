"use client";
import React, { useEffect, useRef, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "../../styles/exp.css";
import { isMobile, isTablet } from "react-device-detect";
import Link from '../Link';

const lottieImageData = [
  { id: 0, image: "/images/lottie_img/Strategy.webp" },
  { id: 1, image: "/images/lottie_img/Design.webp" },
  { id: 2, image: "/images/lottie_img/technology.webp" },
  { id: 3, image: "/images/lottie_img/marketing.webp" },
  { id: 4, image: "/images/lottie_img/AI.webp" },
];

gsap.registerPlugin(ScrollTrigger);

const Accordion = memo(
  ({
    label,
    index,
    description,
    list1,
    list2,
    list3,
    list4,
    list5,
    accordionRef,
    listRef,
    labelRef,
    labelList,
    mobileLottieRef,
    slug,
  }) => (
    <div
      className="mt-4 desktopContentSection"
      style={index === 0 ? { marginBottom: "2vh" } : {}}
    >
      <div ref={accordionRef} className="accordion-container">
        <div className="relative sm:pe-4 lg:w-[40vw] lg:flex lg:flex-col justify-start cursor-pointer">
          <a href={`/${slug}`}>
            <h2 className="text-2xl legacy:text-3xl xl:text-4xl 2xl:text-4xl lg:mb-6 mb-3 w-full capitalize leading-normal font-extrabold text-[#001B94] border-0 border-[#D9D9D9]">
              {label}
            </h2>
          </a>
        </div>
        <div style={{ position: "relative" }}>
          {index === 0 && (
            <div
              ref={labelRef}
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              {labelList.map((label, i) => (
                <h2
                  key={i}
                  className="text-2xl legacy:text-3xl xl:text-4xl 2xl:text-4xl lg:mb-6 mb-3 w-full capitalize leading-normal font-extrabold text-[#001B94] border-0 border-[#D9D9D9]"
                >
                  {label}
                </h2>
              ))}
            </div>
          )}
          <div className="flex flex-col gap-2">
            <ul className="grid grid-cols-1 lg:grid-cols-1" ref={listRef}>
              {list1}
              {list2}
              {list3}
              {list4}
              {list5}
            </ul>
          </div>
        </div>
      </div>
      {isMobile && (
        <div
          className="flex flex-col items-start justify-start mt-10 mobile-lottie service-lottie"
          ref={mobileLottieRef}
        >
          <img
            src={lottieImageData[index].image}
            alt="lottie"
            width={100}
            height={100}
            priority={false}
          />
        </div>
      )}
    </div>
  )
);

const convertToAccordionData = (data) => {
  const accordionData = [];
  const MAX_SUBSERVICES_PER_ACCORDION = 5;

  const servicesByParent = data?.reduce((acc, { attributes: serviceData }) => {
    const parentData = serviceData.parent_service.data.attributes;
    const parentSlug = parentData.slug;

    let parentEntry = acc.find((entry) => entry.slug === parentSlug);

    if (!parentEntry) {
      parentEntry = {
        name: parentData.name,
        slug: parentData.slug,
        description: parentData.description,
        children: [],
      };
      acc.push(parentEntry);
    }

    parentEntry.children.push({
      name: serviceData.name,
      slug: serviceData.slug,
      description: serviceData.description,
    });

    return acc;
  }, []);

  servicesByParent.forEach((item, index) => {
    const title = item.name;
    const subServices = item.children.map((subItem) => ({
      title: subItem.name,
      slug: subItem.slug,
    }));
    const subServiceChunk = subServices.slice(0, MAX_SUBSERVICES_PER_ACCORDION);
    const slug = item.slug;

    const lists = subServiceChunk.map((subService, j) => (
      <Link
        href={`/${slug}/${subService.slug}`}
        className="font-[500] leading-[36px] legacy:leading-[28px] 2xl:leading-[36px] cursor-pointer capitalize service-list-item 2xl:text-[20px] text-[16px] legacy:text-[18px] xl:mb-4 lg:mb-2 mb-0 accordion-list-item"
        key={j}
      >
        {subService.title}
      </Link>
    ));

    const list1 = lists.slice(0, 1);
    const list2 = lists.slice(1, 2);
    const list3 = lists.slice(2, 3);
    const list4 = lists.slice(3, 4);
    const list5 = lists.slice(4, 5);

    const id = `${index}-0`;
    const description = item.description ? (
      <p className="text-[1em] font-[500] leading-[36px]">{item.description}</p>
    ) : null;

    accordionData.push({
      id,
      title,
      description,
      list1,
      list2,
      list3,
      list4,
      list5,
      slug,
    });
  });

  return accordionData;
};


export default function Scroller({ data }) {
//   console.log(accordionData, "accordin dataS");
 const accordionData = convertToAccordionData(data);
  


  const accordionRefs = useRef(accordionData.map(() => React.createRef()));
  const listRefs = useRef(accordionData.map(() => React.createRef()));
  const labelRefs = useRef(accordionData.map(() => React.createRef()));
  const mobileLottieRefs = useRef(accordionData.map(() => React.createRef()));

  const lenisRef = useRef(null);
  const rafHandleRef = useRef(null);

  useEffect(() => {
    gsap.utils.toArray(accordionRefs.current).forEach((ref, index) => {
      const nextRef = accordionRefs.current[index + 1]?.current;
      const currentRef = ref.current;
      const listRef = listRefs.current[index].current;
      const labelRef = labelRefs.current[index].current;
      const mobileLottieRef = mobileLottieRefs.current[index]?.current;

      const endValue = () => {
        if (nextRef) {
          const height = currentRef.clientHeight;
          const percentage = (height / window.innerHeight) * 100;
          const endHeight = percentage + 25;
          return `top ${endHeight.toFixed(2)}%`;
        }
        return "bottom 25%";
      };

      const top = isMobile ? (index === 0 ? "top 60%" : "top 80%") : "top 25%";

      ScrollTrigger.create({
        trigger: currentRef,
        start: top,
        endTrigger: nextRef,
        end: isMobile ? "bottom 90%" : endValue(),
        pin: !isMobile,
        scrub: 1,
        markers: false,
        reverse: false,
        onEnter: () =>
          animateAccordion(listRef, labelRef, mobileLottieRef, "enter"),
        onLeaveBack: () =>
          animateAccordion(listRef, labelRef, mobileLottieRef, "leaveBack"),
        snap: {
          snapTo: 0.05,
          duration: { min: 0.2, max: 0.5 },
          ease: "power2.inOut",
        },
      });

      function animateAccordion(
        listElement,
        labelElement,
        mobileLottieElement,
        action
      ) {
        const tl = gsap.timeline();

        if (action === "enter") {
          const listChildren = Array.from(listElement.children);
          if (labelElement && index === 0) {
            const labels = Array.from(labelElement.children);
            tl.to(labels, {
              opacity: 0,
              y: 20,
              stagger: 0.1,
              duration: 0.15,
              ease: "power1.out",
            });
          }
          tl.fromTo(
            listChildren,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              stagger: 0.1,
              duration: 0.25,
            }
          );
          if (mobileLottieElement) {
            tl.fromTo(
              mobileLottieElement,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.25,
                ease: "power1.out",
              },
              "-=0.15"
            );
          }
        } else if (action === "leaveBack") {
          const listChildren = Array.from(listElement.children).reverse();
          tl.fromTo(
            listChildren,
            { opacity: 1, x: 0 },
            {
              opacity: 0,
              x: -30,
              stagger: 0.15,
              duration: 0.25,
            }
          );
          if (index === 0) {
            const labels = Array.from(labelElement.children);
            tl.to(labels, {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.25,
              ease: "power1.out",
            });
          }
          if (mobileLottieElement) {
            tl.to(
              mobileLottieElement,
              {
                opacity: 0,
                y: 20,
                duration: 0.25,
                ease: "power1.out",
              },
              "-=0.15"
            );
          }
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [accordionData]);

  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis();
      const raf = (time) => {
        lenisRef.current?.raf(time);
        rafHandleRef.current = requestAnimationFrame(raf);
      };
      rafHandleRef.current = requestAnimationFrame(raf);
    }

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = undefined;
      }
      if (rafHandleRef.current) {
        cancelAnimationFrame(rafHandleRef.current);
        rafHandleRef.current = null;
      }
    };
  }, []);

  const labelList = accordionData.map((item) => item.title).slice(1);

  return (
    <div className="max-w-full py-6 mb-6">
      <div className="relative flex flex-col justify-start gap-y-3">
        {accordionData.map((item, i) => (
          <Accordion
            key={i}
            index={i}
            label={item.title}
            description={item.description}
            list1={item.list1}
            list2={item.list2}
            list3={item.list3}
            list4={item.list4}
            list5={item.list5}
            accordionRef={accordionRefs.current[i]}
            listRef={listRefs.current[i]}
            labelRef={labelRefs.current[i]}
            mobileLottieRef={mobileLottieRefs.current[i]}
            labelList={labelList}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  );
}
