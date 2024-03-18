import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  iPhoneBlackImg,
  iPhonePinkImg,
  iconA16Img,
  iconA17Img,
  iconBatteryImg,
  iconDualCameraImg,
  iconTripleCameraImg,
  rightImg,
} from "../utils";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const ProductCard = ({ image, title, price, btnText, product }) => {
  return (
    <div className="text-center">
      <img src={image} alt="iPhone" />
      <div className="flex-center gap-2 my-7">
        {product === "iPhone 15 Pro" && (
          <>
            <div className="w-3 h-3 rounded-full bg-[#8f8a81] cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-[#202630] cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-[#c9c8c3] cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-[#242526] cursor-pointer"></div>
          </>
        )}
        {product === "iPhone 15" && (
          <>
            <div className="w-3 h-3 rounded-full bg-[#e3c8ca] cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-[#e5e0c1] cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-[#cad4c5] cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-[#ced5d9] cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-[#35393b] cursor-pointer"></div>
          </>
        )}
      </div>
      <small className="text-[#e76e18] font-semibold">New</small>
      <h4 className="my-4 text-3xl font-semibold">{title}</h4>
      <span className="font-semibold text-lg">{price}</span>

      <div className="flex-center gap-5 mt-10">
        {product === "iPhone 15 Pro" && (
          <button className="text-gray text-lg">Currently Learning</button>
        )}
        {product === "iPhone 15" && (
          <button className="text-white text-lg bg-[#0071e3] py-2 px-5 rounded-full">
            Learn More
          </button>
        )}
        <button className="flex-center text-[#0071e3] font-semibold">
          Buy <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="flex-center flex-col">
      <img src={image} alt="Feature Icon" className="block mb-5" />
      <h3 className="text-3xl w-[250px] text-center font-semibold mb-2">
        {title}
      </h3>
      <p className="text-xs w-[205px] text-center">{description}</p>
    </div>
  );
};

const KeepExploring = () => {
  useGSAP(() => {
    gsap.to("#titleExplore", { opacity: 1, y: 0 });
    gsap.to(".linkExplore", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="titleExplore" className="section-heading">
            Keep exploring iPhone.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link linkExplore">
              Explore all iPhone
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <div className="flex-center gap-20 mt-40 max-md:flex-col max-md:gap-10">
          <ProductCard
            image={iPhoneBlackImg}
            title="iPhone 15 Pro"
            price="From $999 or $41.62/mo. for 24 mo.1"
            product="iPhone 15 Pro"
          />
          <ProductCard
            image={iPhonePinkImg}
            title="iPhone 15"
            price="From $799 or $33.29/mo. for 24 mo.1"
            product="iPhone 15"
          />
        </div>

        <hr className="my-20 opacity-40" />

        <div className="flex-col mx-auto w-fit">
          <div className="flex justify-between gap-32 max-md:flex-col max-md:flex-center max-md:gap-10">
            <FeatureCard
              image={iconA17Img}
              title="A17 Pro chip with 6-core GPU"
            />
            <FeatureCard
              image={iconA16Img}
              title="A16 Bionic chip with 5-core GPU"
            />
          </div>
          <div className="flex justify-between my-10 gap-32 max-md:flex-col max-md:flex-center max-md:gap-10">
            <FeatureCard
              image={iconTripleCameraImg}
              title="Pro camera system"
              description="Our most advanced 48MP Main camera
              3x or 5x Telephoto camera
              Ultra Wide camera"
            />
            <FeatureCard
              image={iconDualCameraImg}
              title="Advanced dual-camera system"
              description="8MP Main camera 2x Telephoto Ultra Wide camera
              "
            />
          </div>
          <div className="flex justify-between gap-32 max-md:flex-col max-md:flex-center max-md:gap-10">
            <FeatureCard
              image={iconBatteryImg}
              title="Up to 29 hours video playback24"
            />
            <FeatureCard
              image={iconBatteryImg}
              title="Up to 26 hours video playback24"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeepExploring;
