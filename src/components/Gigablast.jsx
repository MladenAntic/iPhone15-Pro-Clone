import { useGSAP } from "@gsap/react";
import { gigabitsImg } from "../utils";
import { animateWithGsapTo } from "../utils/animations";

const Gigablast = () => {
  useGSAP(() => {
    animateWithGsapTo(".fadeInGigablast", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h2 className="text-5xl lg:text-7xl font-semibold mb-28 self-start">
          Gigablast <br /> your gigabits.
        </h2>
        <img src={gigabitsImg} alt="Gigablast Your Gigabits" />

        <div className="hiw-text-container">
          <div className="flex flex-1 flex-center flex-col">
            <p className="hiw-text g_fadeIn fadeInGigablast w-[330px]">
              iPhone 15 Pro is the first iPhone to support USB 3,5 for a{" "}
              <span className="text-white">
                huge leap in data transfer speeds
              </span>{" "}
              and faster pro workflows than ever before.
            </p>
            <br />
            <p className="hiw-text g_fadeIn fadeInGigablast w-[330px]">
              The new USB‑C connector lets you{" "}
              <span className="text-white">
                charge your Mac or iPad with the same cable you use to charge
                iPhone 15 Pro
              </span>
              . Bye‑bye, cable clutter.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn fadeInGigablast">
            <p className="hiw-text">Up to</p>
            <p className="hiw-bigtext">20x faster</p>
            <p className="hiw-text">file transfers</p>
            <br />
            <p className="hiw-text g_fadeIn fadeInGigablast w-[330px]">
              And with all‑new Wi‑Fi 6E6 you'll get{" "}
              <span className="text-white">
                two times faster wireless speeds
              </span>
              . So you can upload, download, and transfer files in a flash.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gigablast;
