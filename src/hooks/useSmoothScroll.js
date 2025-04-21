// // src/hooks/useSmoothScroll.js
// import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";

// const useSmoothScroll = () => {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease-out curve
//       direction: "vertical",
//       gestureDirection: "vertical",
//       smooth: true,
//       mouseMultiplier: 1,
//       smoothTouch: false,
//       touchMultiplier: 2,
//       infinite: false,
//     });

//     const raf = (time) => {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     };

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);
// };

// export default useSmoothScroll;

// src/hooks/useSmoothScroll.js
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const useSmoothScroll = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element && lenisRef.current) {
      const offset = element.offsetTop;
      lenisRef.current.scrollTo(offset, { duration: 1.5 });
    }
  };

  return { scrollToId };
};

export default useSmoothScroll;
