import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function HorizontalSlider() {
  const container = document.querySelector(".container");
  const allSlides = Array.from(document.querySelectorAll(".slide"));
  const indexIndic = document.querySelector(".counter span:nth-child(1)");

  const [index, setIndex] = useState(0);

  function animRight() {
    const TLRight = gsap.timeline();

    TLRight.to(allSlides[index], { duration: 0.6, x: 0 });
  }

  function animLeft() {
    const TLLeft = gsap.timeline();

    TLLeft.to(allSlides[index], { duration: 0.6, x: "-100%" });
  }

  const negation = gsap.to(container, {
    paused: true,
    keyframes: [
      { duration: 0.1, x: -4 },
      { duration: 0.1, x: 4 },
      { duration: 0.1, x: -4 },
      { duration: 0.1, x: 0 },
    ],
  });

  function handleDirection(direction) {
    if (direction === "next") {
      if (index === 3) {
        negation.seek(0);
        negation.play();
        return;
      }

      setIndex(index + 1);
      animRight();
    } else if (direction === "prev") {
      if (index === 0) {
        negation.seek(0);
        negation.play();
        return;
      }

      animLeft();
      setIndex(index - 1);
    }
  }
  return (
    <div className="w-full h-screen flex flex-row items-center justify-center bg-zinc-900">
      <div className="counter absolute left-[50%] -translate-x-[50%] top-10 w-20 h-8 bg-white text-black flex flex-row items-center justify-center rounded-tr-sm rounded-tl-sm text-2xl">
        <span>{index}</span> /<span>3</span>
      </div>
      <div className="container relative h-[400px] max-w-[900px]">
        <div className="slider-container w-full h-full relative overflow-hidden">
          <div className="slide s1 w-full h-full bg-cover bg-center bg-no-repeat absolute text-white -translate-x-[0%]">
            <h2 className="text-4xl pt-[300px] uppercase pl-5">
              Changez d'air .1
            </h2>
            <hr className=" border-none w-[200px] h-[1px] bg-white my-[10px] ml-5 block" />
            <p className=" text-xl pl-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              iusto!
            </p>
          </div>
          <div className="slide s2 w-full h-full bg-cover bg-center bg-no-repeat absolute text-white -translate-x-[100%]">
            <h2 className="text-4xl pt-[300px] uppercase pl-5">
              Retrouvez la liberté .2
            </h2>
            <hr className=" border-none w-[200px] h-[1px] bg-white my-[10px] ml-5 block" />
            <p className=" text-xl pl-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              iusto!
            </p>
          </div>
          <div className="slide s3 w-full h-full bg-cover bg-center bg-no-repeat absolute text-white -translate-x-[100%]">
            <h2 className="text-4xl pt-[300px] uppercase pl-5">
              Explorez, vivez .3
            </h2>
            <hr className=" border-none w-[200px] h-[1px] bg-white my-[10px] ml-5 block" />
            <p className=" text-xl pl-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              iusto!
            </p>
          </div>
        </div>
      </div>
      <div className="container-btns absolute bottom-0 z-40 pl-5 pb-[50px]">
        <button
          onClick={() => handleDirection("prev")}
          className="btn-prev py-[10px] px-[12px] rounded-md border-2 border-white bg-transparent text-white outline-none cursor-pointer mr-6"
        >
          <IoIosArrowBack size={28} />
        </button>
        <button
          onClick={() => handleDirection("next")}
          className="btn-next py-[10px] px-[12px] rounded-md border-2 border-white bg-transparent text-white outline-none cursor-pointer"
        >
          <IoIosArrowForward size={28} />
        </button>
      </div>
    </div>
  );
}
