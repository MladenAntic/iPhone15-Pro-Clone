import React from "react";
import { rightImg } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { emblaSlides2} from "../constants";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";

const ShopAndSave = () => {
  useGSAP(() => {
    gsap.to("#shopTitle", { opacity: 1, y: 0 });
    gsap.to(".shopLink", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <section className="common-padding mt-40">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="shopTitle" className="section-heading">
            Ways to shop and save at Apple.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link shopLink">
              Shop iPhone
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <div className="overflow-hidden mt-20 max-lg:ml-0" ref={emblaRef}>
          <div className="flex gap-5 w-[370px]">
            {emblaSlides2.map((slide, index) => (
              <div
                className="embla__slide w-[370px] h-[340px] bg-[#242426] relative rounded-2xl pt-12 px-6"
                key={index}
              >
                <img src={slide.icon} alt={slide.title} />
                <h3 className="my-5 text-2xl font-bold">{slide.title}</h3>
                <p className="text-lg">{slide.content}</p>

                <button className="w-[35px] h-[35px] rounded-full flex-center bg-white text-gray-700 absolute bottom-5 right-5">
                  <PlusIcon className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute right-0 bottom-[-100px] flex items-center gap-2">
          <button
            className={`w-[35px] h-[35px] rounded-full flex-center ${
              currentSlide < 1 ? "bg-none text-gray" : "bg-[#333336]"
            }`}
            onClick={scrollPrev}
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            className={`w-[35px] h-[35px] rounded-full flex-center ${
              currentSlide > 5 ? "bg-none text-gray" : "bg-[#333336]"
            }`}
            onClick={scrollNext}
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShopAndSave;
