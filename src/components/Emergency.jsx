import React from "react";
import { emergencyImg } from "../utils";
import { useGSAP } from "@gsap/react";
import { animateWithGsapTo } from "../utils/animations";

const Emergency = () => {
  useGSAP(() => {
    animateWithGsapTo(".fadeInEmergency", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  });

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="relative">
          <img
            src={emergencyImg}
            alt="Emergency Image"
            className="w-full h-full object-cover"
          />
          <h2 className="text-4xl md:text-7xl font-semibold absolute top-20 left-32 max-lg:text-3xl max-md:text-2xl max-md:top-10 max-md:left-10">
            In an emergency, <br /> iPhone has your back.
          </h2>
        </div>

        <div className="hiw-text-container mt-14">
          <div className="flex justify-center items-start flex-1 gap-20">
            <p className="hiw-text g_fadeIn fadeInEmergency w-[330px]">
              New{" "}
              <span className="text-white">
                Roadside Assistance via satellite
                <sup className="underline">14</sup>
              </span>{" "}
              can get you help for things like a flat tire or a dead battery,
              even when you’re off the grid.
            </p>
            <br />
            <p className="hiw-text g_fadeIn fadeInEmergency w-[330px]">
              iPhone also has{" "}
              <span className="text-white">
                Emergency SOS via satellite14 and Crash Detection
                <sup className="underline">15</sup>
              </span>
              , two vital safety features that have helped save lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
