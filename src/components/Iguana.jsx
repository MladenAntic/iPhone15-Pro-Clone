import { useGSAP } from "@gsap/react";
import React from "react";
import { animateWithGsapTo, animateWithGsapFrom } from "../utils/animations";
import { iguanaImg } from "../utils";

const Iguana = () => {
  useGSAP(() => {
    animateWithGsapTo("#iguana_title", {
      y: 0,
      opacity: 1,
    });

    animateWithGsapFrom(
      "#iguana_img",
      {
        scale: 1.5,
        opacity: 1,
        ease: "power1",
      },
      {
        scrub: 0.5,
      }
    );
  }, []);

  return (
    <section className="common-padding mt-40">
      <div className="screen-max-width">
        <h2
          id="iguana_title"
          className="text-5xl lg:text-7xl font-semibold opacity-0 translate-y-20 relative z-10"
        >
          A camera that captures your wildest imagination.
        </h2>
        <p className="text-gray font-semibold text-xl md:text-3xl py-10 relative z-10 mb-20">
          From dramatic framing flexibility to next-generation portraits, see
          what you can do with our most powerful iPhone camera system.
        </p>
        <img id="iguana_img" src={iguanaImg} alt="Green Iguana" />
        <p className="hiw-text relative z-10">
          A green iguana, captured by the 48MP Main camera
        </p>
      </div>
    </section>
  );
};

export default Iguana;
