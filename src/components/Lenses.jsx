import { useGSAP } from "@gsap/react";
import { animateWithGsapTo } from "../utils/animations";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { emblaSlides } from "../constants";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const Lenses = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useGSAP(() => {
    animateWithGsapTo(".fadeInLenses", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <p className="hiw-text w-[330px] ml-[180px] g_fadeIn fadeInLenses max-lg:ml-0">
          With iPhone 15 Pro, you have multiple focal lengths to work with. It’s
          like having{" "}
          <span className="text-white">seven pro lenses in your pocket</span>,
          everywhere you go.
        </p>

        <div
          className="overflow-hidden mt-20 ml-[180px] max-lg:ml-0"
          ref={emblaRef}
        >
          <div className="flex w-[675px]">
            {emblaSlides.map((slide, index) => (
              <div
                className={`embla__slide ${
                  index === currentSlide + 1 ? "next-slide" : ""
                }`}
                key={index}
              >
                <img src={slide.image} alt={slide.text} />
                <p className="hiw-text mt-7">
                  <span className="text-white">{slide.span}</span> {slide.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute right-0 flex items-center gap-2">
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

export default Lenses;
