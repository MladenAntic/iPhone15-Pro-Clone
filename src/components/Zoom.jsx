import { useGSAP } from "@gsap/react";
import { zoomVideo } from "../utils";
import { ArrowPathIcon, PauseIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import { animateWithGsapTo } from "../utils/animations";

const Zoom = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const replay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  useGSAP(() => {
    animateWithGsapTo(".fadeInZoom", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  });

  return (
    <section className="common-padding mt-40">
      <div className="screen-max-width flex flex-col flex-center">
        <h2 className="text-5xl lg:text-7xl font-semibold text-center mb-20">
          120 mm of <br /> pure Pro zoom.
        </h2>
        <video
          autoPlay
          muted
          playsInline={true}
          key={zoomVideo}
          ref={videoRef}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={handleVideoEnded}
        >
          <source src={zoomVideo} type="video/mp4" />
        </video>
        <span
          onClick={replay}
          className="text-gray font-semibold flex items-center gap-2 mt-5 cursor-pointer"
        >
          {isPlaying ? "Pause" : "Replay"}
          {isPlaying ? (
            <PauseIcon className="w-5 h-5" />
          ) : (
            <ArrowPathIcon className="w-5 h-5" />
          )}
        </span>

        <div className="hiw-text-container mt-14">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn fadeInZoom w-[330px]">
              For iPhone 15 Pro Max, we designed a 5x Telephoto camera with{" "}
              <span className="text-white">
                the longest optical zoom of any iPhone ever
              </span>{" "}
              to fit in our compact Pro camera system.
            </p>
            <br />
            <p className="hiw-text g_fadeIn fadeInZoom w-[330px]">
              Now you can{" "}
              <span className="text-white">
                take sharper close‑ups from farther away
              </span>{" "}
              — like a phenomenal photo of your friend or a goal in your kid’s
              soccer match.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn fadeInZoom">
            <p className="hiw-bigtext">5x optical zoom</p>
            <p className="hiw-text">with the 120 mm lens</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Zoom;
