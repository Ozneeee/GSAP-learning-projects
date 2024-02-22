import React, { useEffect } from "react";
import { gsap } from "gsap";

const wineLogo = require("../../assets/img/wineLogo.png");
const barelLogo = require("../../assets/img/barellLogo.png");

export default function AnimatedLanding() {
  const launchAnim = () => {
    const mainTL = gsap.timeline();

    mainTL
      .to(".title", { y: 0, autoAlpha: 1, delay: 0.2 })
      .to(".bar", { height: 170 })
      .to(".btn", { y: 0, autoAlpha: 1 })
      .to(".navLinks", { y: 0, autoAlpha: 1, stagger: 0.1 })
      .to("img", { x: 0, autoAlpha: 1, stagger: 0.1 });
  };

  useEffect(() => {
    launchAnim();
  }, []);

  return (
    <div className="select-none">
      <header className="w-full h-20 bg-gradient-to-b from-blue-950 to-transparant flex flex-row items-center justify-between px-6 fixed z-20">
        <div className="w-12 h-12">
          <img
            className="logo invert -translate-x-12 opacity-0"
            src={wineLogo}
            alt="Logo de l entreprise"
          />
        </div>
        <div>
          <ul className="flex flex-row items-center justify-between">
            <li className="navLinks -translate-y-24">
              <a className="text-white uppercase font-medium" href="#">
                Accueil
              </a>
            </li>
            <li className="mx-16 navLinks -translate-y-24">
              <a className="nosVinsTxt text-white uppercase font-medium" href="#">
                Nos vins
              </a>
            </li>
            <li className="navLinks -translate-y-24">
              <a className="text-white uppercase font-medium" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-12 h-12">
          <img
            className="logo invert translate-x-12 opacity-0"
            src={barelLogo}
            alt="Logo de l entreprise"
          />
        </div>
      </header>
      <div className="LandingBackground w-full h-screen bg-red-300 fixed top-0 left-0 z-10 brightness-50"></div>
      <main className="w-full h-screen fixed top-0 left-0 z-30 flex flex-col items-center justify-around p-12 mt-6">
        <h1 className="title text-white uppercase text-wrap text-8xl font-thin -translate-y-96 opacity-0">
          DES VIGNES D'EXEPTION.
        </h1>
        <div className="bar w-1 h-0 bg-white"></div>
        <div className="btn w-32 h-10 border-2 border-white flex flex-row items-center justify-center cursor-pointer -translate-y-16 opacity-0">
          <p className="text-white">Découvrir</p>
        </div>
      </main>
    </div>
  );
}
