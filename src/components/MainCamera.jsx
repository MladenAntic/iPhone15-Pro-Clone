import React from "react";
import { mainCamImg } from "../utils";
import { useGSAP } from "@gsap/react";
import { animateWithGsapTo } from "../utils/animations";

const MainCamera = () => {
  useGSAP(() => {
    animateWithGsapTo("#mainCam", {
      opacity: 1,
      y: 0,
    });

    animateWithGsapTo(".fadeInMainCam", {
      opacity: 1,
      y: 0,
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width flex-center gap-20 max-sm:flex-col">
        <img
          id="mainCam"
          src={mainCamImg}
          alt="48MP Main Camera"
          className="opacity-0"
        />
        <p className="hiw-text g_fadeIn fadeInMainCam w-[330px]">
          The 48MP Main camera is more advanced than ever, capturing
          super‑high‑resolution photos with a{" "}
          <span className="text-white">new level of detail and color</span>.
          <br />
          <br />
          You’ll see the improvements in your portraits. And now you no longer
          have to switch to Portrait mode. If your subject is a person, dog, or
          cat, iPhone automatically captures depth information. So you can
          choose to instantly{" "}
          <span className="text-white">see your photo as a portrait</span>, with
          an artful blur effect. Or later in the Photos app.
        </p>
      </div>
      <hr className="text-gray my-40 screen-max-width opacity-40" />
      <h2 className="text-2xl lg:text-4xl font-semibold text-center">
        Shoot magical spatial videos, <br /> then relive them on Apple Vision Pro
      </h2>
    </section>
  );
};

export default MainCamera;
