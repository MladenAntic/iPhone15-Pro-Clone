import React from "react";
import { styles } from "../constants";
import { animateWithGsapTo } from "../utils/animations";
import { useGSAP } from "@gsap/react";

const Card = ({ image, span, text }) => {
  useGSAP(() => {
    animateWithGsapTo(".image", {
      opacity: 1,
      y: 0,
      duration: 1.5,
    });

    animateWithGsapTo(".fadeInStyles", {
      opacity: 1,
      y: 0,
    });
  }, []);

  return (
    <div className="w-[250px]">
      <img
        src={image}
        alt="Style Image"
        className="image block mb-12 opacity-0"
      />
      <p className="hiw-text w-fit g_fadeIn fadeInStyles">
        <span className="text-white">{span}</span> {text}
      </p>
    </div>
  );
};

const StyleItOut = () => {
  return (
    <section className="common-padding mt-40">
      <div className="screen-max-width">
        <h2 className="text-5xl lg:text-7xl font-semibold self-start text-gray max-md:text-3xl">
          iOS17.
        </h2>
        <h2 className="text-5xl lg:text-7xl my-3 font-semibold self-start max-md:text-3xl">
          Style it out. Swap it over.
        </h2>
        <h2 className="text-5xl lg:text-7xl font-semibold self-start max-md:text-3xl">
          Sticker it up.
        </h2>

        <div className="flex justify-center gap-10 mt-28 max-md:flex-col max-md:flex-center">
          {styles.map((style, index) => (
            <Card key={index} {...style} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StyleItOut;
