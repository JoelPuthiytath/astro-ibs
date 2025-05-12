import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useTextAnimation = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      gsap.from(elementRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return elementRef;
};


export const useLongTextAnimation =(animationTrigger)=>{
    const elementRef = useRef(null);

    useEffect(() => {
      if (elementRef.current) {
        gsap.from(elementRef.current, {
            y: "40",
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: animationTrigger,
              start: "top 70%",
            },
          });
      }
    }, []);
  
    return elementRef;

}


export const usePageLoadAnimation =()=>{
    
}