import React from "react";
import { makeadifferenceImg } from "../utils";
import { useGSAP } from "@gsap/react";
import { animateWithGsapTo } from "../utils/animations";

const MakeADifference = () => {
  useGSAP(() => {
    animateWithGsapTo(".fadeInDifference", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  });

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <img src={makeadifferenceImg} alt="Make a Difference" />
        <h2 className="text-5xl lg:text-7xl font-semibold mb-20 self-start mt-5">
          Designed to <br /> make a difference.
        </h2>
        <hr className="opacity-40" />

        <div className="hiw-text-container mt-14">
          <div className="flex justify-center items-start flex-1 gap-20">
            <p className="hiw-text g_fadeIn fadeInDifference w-[330px]">
              <span className="text-white">
                What matters to you matters to Apple, too
              </span>
              . From privacy protections that give you more control over your
              data. To using more recycled materials that minimize environmental
              impact. To creating built‑in features that make iPhone accessible
              to all.
            </p>
            <br />
            <p className="hiw-text g_fadeIn fadeInDifference w-[330px]">
              The internal structural frame of iPhone 15 Pro has <br />
              <span className="text-5xl text-white">
                100% recycled aluminum
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeADifference;
