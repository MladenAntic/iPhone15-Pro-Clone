import React, { useRef } from "react";
import {
  chipImg,
  foundationImg,
  frameImg,
  frameVideo,
  playbackImg,
} from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsapTo } from "../utils/animations";

const BatteryLife = () => {
  const videoRef = useRef();

  useGSAP(() => {
    animateWithGsapTo(".fadeInBattery", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding mt-40">
      <div className="screen-max-width flex flex-col flex-center">
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            Battery life that’s <br /> positively Pro.
          </h2>

          <p className="hiw-subtitle">
            Even with so many advanced new features, iPhone 15 Pro still <br />{" "}
            gives you amazing all‑day battery life.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <img src={foundationImg} alt="Foundation Image" />
            </div>
          </div>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 flex-col">
            <div className="flex-1 flex justify-center flex-col g_fadeIn fadeInBattery">
              <p className="hiw-text">Up to</p>
              <p className="hiw-bigtext">29 hrs</p>
              <p className="hiw-text">
                video playback on <br /> iPhone 15 Pro Max
                <sup className="underline">12</sup>
              </p>
            </div>
            <br />
            <div className="flex-1 flex justify-center flex-col g_fadeIn fadeInBattery">
              <p className="hiw-text">Up to</p>
              <p className="hiw-bigtext">23 hrs</p>
              <p className="hiw-text">
                video playback on <br /> iPhone 15 Pro
                <sup className="underline">12</sup>
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="hiw-text g_fadeIn fadeInBattery w-[330px]">
              Add a MagSafe Charger for{" "}
              <span className="text-white">
                fast, efficient wireless charging
              </span>
              <sup className="underline">13</sup>
            </p>
            <hr className="mt-20 opacity-40 mb-5 g_fadeIn fadeInBattery" />

            <div className="flex items-start gap-10 g_fadeIn fadeInBattery">
              <img src={playbackImg} alt="Playback Img" />
              <p className="hiw-text w-[330px]">
                iPhone 15 Pro Max has up to 9 more hours video playback than
                iPhone 12 Pro Max <br /> <br />
                iPhone 15 Pro has up to 6 more hours video playback than iPhone
                12 Pro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatteryLife;
