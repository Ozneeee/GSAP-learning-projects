import React, { useEffect } from "react";
import gsap from "gsap";

export default function Restaurant() {
  const launchAnim = () => {
    const gsapTL = gsap.timeline();

    gsapTL
      .to(".boxImg", { height: 208, delay: 0.2 })
      .to(".boxText", { height: 48 })
      .to(".boxText p", { autoAlpha: 1 }, "-=0.5")
      .to(".boxText", { width: 0, delay: 1 })
      .to(".boxText p", { autoAlpha: 0 }, "=-1")
      .to(".boxImg", { height: 0 })
      .to(".loadContainer", { height: 0 })
      .to(".RestaurantBackground", { filter: "brightness(50%)" }, "=-1")
      .to(".title", { y: 50 })
      .to(".textBooking", { bottom: 50 }, "=-0.5");
  };

  useEffect(() => {
    launchAnim();
  }, []);

  return (
    <div>
      <div className="loadContainer w-full h-screen bg-red-200 flex flex-col items-center justify-center">
        <div className="boxImg w-52 h-0 bg-red-500 relative">
          <div className="boxText w-40 h-0 bg-red-300 absolute -bottom-4 -left-10 flex flex-col items-center justify-center">
            <p className=" opacity-5 font-thin text-xl">Enzo's Diner</p>
          </div>
        </div>
      </div>
      <div className="w-full h-screen RestaurantBackground brightness-100 absolute"></div>
      <div className="absolute w-full h-screen overflow-hidden">
        <h1 className="title text-white text-6xl text-center -translate-y-24">
          Bienvenue chez Enzo's Diner
        </h1>
        <p className="textBooking  text-white text-4xl text-center absolute -bottom-10 left-[50%] -translate-x-[50%] cursor-pointer underline">
          Réserver une table.
        </p>
      </div>
    </div>
  );
}
