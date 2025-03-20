import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./HomePage2.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomePage2 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const textUpperRef = useRef(null);
  const textLowerRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      let scrollDirection = window.scrollY > lastScroll ? -1 : 1;
      lastScroll = window.scrollY;

      gsap.to(textUpperRef.current, {
        x: `+=${scrollDirection * 20}`,
        duration: 0,
        ease: "none",
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, 
        },
      });

      gsap.to(textLowerRef.current, {
        x: `-=${scrollDirection * 20}`,
        duration: 0,
        ease: "none",
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, 
        },
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={marqueeRef} className="HomePage2Container">
      <div className="HomePage2Container">
        <p ref={textUpperRef} className="HomePage2TextUpper">
          PRASHANT KUMAR SINHA PRASHANT KUMAR SINHA PRASHANT KUMAR SINHA
        </p>
        <p ref={textLowerRef} className="HomePage2TextLower">
          PRASHANT KUMAR SINHA PRASHANT KUMAR SINHA PRASHANT KUMAR SINHA
        </p>
      </div>
    </div>
  );
};

export default HomePage2;
