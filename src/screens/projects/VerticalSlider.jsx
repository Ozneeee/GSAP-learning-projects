import React, { useEffect } from "react";
import gsap from "gsap";

export default function VerticalSlider() {
  const launchAnim = () => {
    const gsapTL = gsap.timeline();

    gsapTL
      .to("p", { autoAlpha: 1, y: -10, stagger: 1 })
      .to("p", { autoAlpha: 0, y: -100, stagger: 1 }, 1);
  };

  useEffect(() => {
    launchAnim();
  }, []);

  return (
    <div className="w-full h-screen bg-zinc-900 relative flex flex-row items-center justify-center overflow-hidden">
      <p className="text-white text-6xl absolute opacity-0 translate-y-20 invisible">
        3 🔴
      </p>
      <p className="text-white text-6xl absolute opacity-0 translate-y-20 invisible">
        2 🟠
      </p>
      <p className="text-white text-6xl absolute opacity-0 translate-y-20 invisible">
        1 🟢
      </p>
      <p className="letsGoTxt text-white text-6xl absolute opacity-0 translate-y-20 invisible">
        💥 LETS GO 💥
      </p>
    </div>
  );
}
