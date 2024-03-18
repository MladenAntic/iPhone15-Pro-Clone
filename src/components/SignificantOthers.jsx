import React, { useState } from "react";
import { accordionItems } from "../constants";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { appleAirPodsImg } from "../utils";

const SignificantOthers = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleAccordion = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  useGSAP(() => {
    gsap.to("#significantOthersTitle", { opacity: 1, y: 0 });
  }, []);

  return (
    <section className="common-padding mt-40">
      <div className="screen-max-width">
        <h1 id="significantOthersTitle" className="section-heading">
          Significant Others
        </h1>
        <div className="flex justify-between mt-40 max-md:flex-col max-md:gap-20 max-lg:gap-10">
          <div className="w-[450px] max-md:w-full">
            {accordionItems.map((item, index) => (
              <div key={index} className="border-b border-gray-600">
                <button
                  className={`w-full flex justify-between items-center py-4 px-6 focus:outline-none ${
                    index === activeItem
                      ? "pointer-events-none"
                      : "pointer-events-all"
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-3xl font-semibold max-lg:text-2xl">{item.title}</span>
                  <ChevronDownIcon
                    className={`w-6 h-6 transition-transform text-gray ${
                      index === activeItem ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {index === activeItem && (
                  <p className="text-gray m-6 transition-all duration-300">{item.content}</p>
                )}
              </div>
            ))}
          </div>
          <img src={appleAirPodsImg} alt="iPhone & Airpods" />
        </div>
      </div>
    </section>
  );
};

export default SignificantOthers;
