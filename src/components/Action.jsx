import React from "react";
import { actions } from "../constants";
import { silentVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import { animateWithGsapTo } from "../utils/animations";

const Action = () => {
  useGSAP(() => {
    animateWithGsapTo(".fadeInAction", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  });

  return (
    <section className="common-padding mt-40">
      <div className="screen-max-width flex flex-col flex-center">
        <h2 className="text-5xl lg:text-7xl font-semibold mb-20 self-start max-sm:self-center">
          Get in on the <br /> Action button.
        </h2>

        <div className="flex-center gap-40 max-md:flex-col max-lg:gap-5">
          <div>
            <p className="hiw-text w-[330px] mb-28">
              The all‑new Action button is a{" "}
              <span className="text-white">
                fast track to your favorite feature
              </span>
              . Once you set the one you want, just press and hold to launch the
              action.
            </p>

            <ul className="flex flex-col gap-4 ml-[50px]">
              {actions.map((action, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-3 cursor-pointer w-fit rounded-full py-1 px-2 ${
                    action.active ? "border border-white" : ""
                  }`}
                >
                  {action.icon}
                  <span
                    className={`text-gray font-semibold ${
                      action.active ? "text-white" : ""
                    }`}
                  >
                    {action.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <video
            className="pointer-events-none"
            playsInline
            preload="none"
            muted
            autoPlay
            // ref={videoRef}
          >
            <source src={silentVideo} type="video/mp4" />
          </video>
        </div>

        <div className="hiw-text-container mt-14">
          <div className="flex flex-1 gap-20 max-md:flex-col max-md:gap-5">
            <p className="hiw-text g_fadeIn fadeInAction w-[330px]">
              By default, the{" "}
              <span className="text-white">
                Action button is set to toggle between Ring and Silent modes
              </span>
              . If you choose a different action, you can use Control Center to
              mute or use Focus filters to automatically set your iPhone to
              silent.
            </p>
            <br />
            <p className="hiw-text g_fadeIn fadeInAction w-[330px]">
              Whatever you’re doing, the Action button is at the ready. Launch
              Camera to catch a spontaneous selfie. Record an instant voice
              memo. You can even{" "}
              <span className="text-white">
                select Shortcut to open an app or run a series of tasks
              </span>{" "}
              like switching on the lights in your living room and playing
              music.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Action;
