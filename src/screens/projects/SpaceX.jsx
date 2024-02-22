import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SpaceX() {
  const launchAnim = () => {
    gsap.to(".titleSpaceX", { scale: 1.5, autoAlpha: 1, delay: 0.2 });
    gsap.to(".scrollText", { scale: 1, autoAlpha: 1, delay: 0.2 });
  };

  const launchSecondAnim = () => {
    gsap.to(".b1Rocket", {
      y: -400,
      scrollTrigger: {
        trigger: ".b1Rocket ",
        start: "top-=100px center",
        scrub: true,
        onEnter: () => {
          gsap.to(".b1Rocket  p", { autoAlpha: 1, scale: 1 });
        },
        onLeaveBack: () => {
          gsap.to(".b1Rocket  p", { autoAlpha: 0, scale: 0 });
        },
      },
    });

    gsap.to(".b2Rocket ", {
      y: -300,
      scrollTrigger: {
        trigger: ".b2Rocket ",
        start: "top-=100px center",
        scrub: true,
        onEnter: () => {
          gsap.to(".b2Rocket  p", { autoAlpha: 1, scale: 1 });
          gsap.to(".b3Rocket  p", { autoAlpha: 1, scale: 1 }, "+=0.1");
        },
        onLeaveBack: () => {
          gsap.to(".b2Rocket  p", { autoAlpha: 0, scale: 0 });
          gsap.to(".b3Rocket  p", { autoAlpha: 0, scale: 0 });
        },
      },
    });

    gsap.to(".b3Rocket ", {
      y: -400,
      scrollTrigger: {
        trigger: ".b3Rocket ",
        start: "top-=100px center",
        scrub: true,
        onEnter: () => {
          gsap.to(".b3Rocket  p", { autoAlpha: 1, scale: 1 });
        },
        onLeaveBack: () => {
          gsap.to(".b3Rocket  p", { autoAlpha: 0, scale: 0 });
        },
      },
    });
  };

  useEffect(() => {
    launchAnim();
    launchSecondAnim();
  }, []);

  return (
    <div>
      <div className="w-full h-screen bg-blue-300 flex flex-col items-center justify-center overflow-hidden">
        <h1 className="titleSpaceX text-6xl font-bold uppercase opacity-0 scale-0 mb-32">
          SPACE X ROCKET
        </h1>
        <p className="scrollText opacity-0 scale-0">scroll down</p>
      </div>
      <div className="scrollContainer w-full h-screen bg-zinc-800 relative">
        <div className="absolute bottom-0 left-[50%] -translate-x-[50%]">
          <div className="block b1Rocket w-32 h-16">
            <p className="text-white text-lg absolute left-48 w-full opacity-0 scale-0">
              - Top Rocket
            </p>
          </div>
          <div className="block b2Rocket w-32 h-40">
            <p className="text-white text-lg absolute left-48 w-full opacity-0 scale-0">
              - Main Engine
            </p>
          </div>
          <div className="block b3Rocket w-[118px] h-40">
            <p className="text-white text-lg absolute left-48 w-full opacity-0 scale-0">
              - Second Engine
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
