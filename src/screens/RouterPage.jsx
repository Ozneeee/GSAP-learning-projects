import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

import {
  AnimatedLanding,
  Restaurant,
  VertivalSlider,
  HorizontalSlider,
  MultipleScroll,
  HistoricFrieze,
  SpaceX,
} from "./projects/";

const AllProjects = [
  { id: "AnimatedLanding", name: "Animated Landing Page" },
  { id: "Restaurant", name: "Restaurant" },
  { id: "VerticalSlider", name: "Vertical Slider" },
  { id: "HorizontalSlider", name: "Horizontal Slider" },
  { id: "MultipleScroll", name: "Multiple Scroll" },
  { id: "HistoricFrieze", name: "Historical Frieze" },
  { id: "SpaceX", name: "SpaceX Rocket Parallax" },
];

export default function RouterPage() {
  const navigation = useNavigate();

  const launchAnim = () => {
    const mainTL = gsap.timeline();

    mainTL.to(".title", { y: 0, autoAlpha: 1, delay: 0.2 });
    mainTL.to(".projects", { scale: 1, autoAlpha: 1, stagger: 0.2 });
    mainTL.to(".star", { y: 0, autoAlpha: 1, delay: 0.2 });
  };

  useEffect(() => {
    launchAnim();
  }, []);

  return (
    <div className="w-full min-h-screen max-h-max bg-gray-900 p-10 select-none flex flex-col justify-between overflow-hidden">
      <h1 className="title -translate-y-[200px] optacity-0 text-4xl font-bold text-white text-center">
        Seven projects to learn GSAP.
      </h1>
      <div className="w-full h-auto flex flex-row flex-wrap">
        {AllProjects.map((i) => {
          return (
            <div
              className="projects scale-0 opacity-0 cursor-pointer bg-slate-300 px-10 py-3 rounded-xl mr-10 mt-8"
              key={i.id}
              onClick={() => navigation(`${i.id}`)}
            >
              <h1 className="text-black">{i.name}</h1>
            </div>
          );
        })}
      </div>
      <div
        className="w-full h-auto"
        onClick={() =>
          window.open("https://github.com/Ozneeee/GSAP-learning-projects")
        }
      >
        <p className="star text-white text-center text-lg translate-y-[100px] optacity-0">
          Like the repo ?{" "}
          <span className="underline cursor-pointer">Give it a star !</span>
        </p>
      </div>
    </div>
  );
}
