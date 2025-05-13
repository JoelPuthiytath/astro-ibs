"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Scroller from "../scroller/Scroller.jsx";
import "../../styles/exp.css";


export default function Expertise({ title, image, servicesByParent }) {
  const containerRef = useRef(null);
  const galleryRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !galleryRef.current) return;

    let ctx;
    let mm;

    // Dynamically load ScrollTrigger only in browser
    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Pinning logic
        const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");
        gsap.set(photos, { yPercent: 101 });

        mm = gsap.matchMedia();
        mm.add("(min-width: 600px)", () => {
          ScrollTrigger.create({
            trigger: galleryRef.current,
            start: "top top",
            end: "bottom bottom",
            pin: galleryRef.current.querySelector(".right"),
            pinSpacing: false,
          });
        });
      }, containerRef);
    });

    // Cleanup
    return () => {
      if (ctx) ctx.revert();
      if (mm) mm.revert();
    };
  }, []);

   const creative = image?.data?.attributes;

  return (
    <div ref={containerRef}>
      <div
        ref={galleryRef}
        className="container mx-auto overflow-hidden w-full flex scroll-smooth px-8 lg:px-0"
      >
        <div className="left lg:w-1/2">
          <div className="desktopContent">
            <h2 className="text-black text-2xl uppercase font-semibold my-16">
              {title}
            </h2>
            <Scroller data={servicesByParent} />
          </div>
        </div>

        <div className="right lg:w-1/2 lg:flex lg:flex-col lg:justify-start">
          <div className="mobileContent">
            <h2 className="text-black text-2xl uppercase font-semibold mt-16">
              {title}
            </h2>
            <Scroller data={servicesByParent} />
          </div>

          <div className="desktopPhotos">
            <div className="desktopPhoto red">
              <img
                src={creative?.url}
                alt={
                  creative?.alternativeText
                    ? creative?.alternativeText
                    : "our-expertise-image"
                }
                width={creative?.width}
                height={creative?.height}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
