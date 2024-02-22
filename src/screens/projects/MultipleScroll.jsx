import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function MultipleScroll() {
  const launchAnim = () => {
    gsap.to(".titleAlps", {
      y: 300,
      scrollTrigger: {
        trigger: "moutains",
        scrub: 0.5,
      },
    });
  };

  useEffect(() => {
    launchAnim();
  }, []);

  return (
    <div>
      <div className="bg-mountain w-full h-screen relative">
        <div className="mountains absolute -bottom-20 w-full h-full z-20 "></div>
        <div className="titleAlps w-full h-full flex flex-col items-center justify-center -mt-20">
          <span className="titleAlpsTxt text-4xl font-thin">The</span>
          <h1 className="titleAlps text-8xl font-bold uppercase">
            FRENCH ALPS
          </h1>
        </div>
      </div>
      <div className="AlpsParagraph w-full h-screen bg-white py-10 px-44 text-justify mt-36">
        <p className="font-bold text-xl">Know more on the French Alps</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
          reiciendis id consequuntur at alias nostrum voluptates voluptas
          inventore nisi consequatur placeat dicta. Quis culpa eaque porro autem
          aspernatur qui, sequi sint velit, dolorem obcaecati veritatis!
          Nesciunt voluptates vel error expedita atque commodi ab deleniti odit
          odio quas eveniet eligendi quae corrupti pariatur beatae officiis
          cupiditate laboriosam possimus, aperiam voluptatum. Praesentium velit
          atque aperiam laudantium libero perferendis quae possimus veniam
          voluptatum reiciendis unde dolor sunt, et excepturi esse? At dolorum
          asperiores a quod? Suscipit iusto necessitatibus nesciunt fugit esse,
          unde animi quo? Facere fuga odio possimus earum quisquam provident?
          Quis aut quos laboriosam, necessitatibus, iure, inventore iste odio
          maiores nulla voluptatibus illo delectus velit eos impedit
          repudiandae? Dolore, asperiores ipsa. Sapiente aut vel quo iure nulla,
          modi, error quam nemo a obcaecati reiciendis aspernatur, blanditiis
          fuga officia facere est quasi optio unde ullam iste voluptatibus
          debitis ex asperiores. Atque fugit officiis aliquam dolor placeat id
          suscipit quod dolores reprehenderit recusandae velit reiciendis fugiat
          pariatur dolorem ex, neque, ab aut rerum vitae deleniti? Mollitia
          tempore amet saepe magni asperiores dicta adipisci vitae beatae
          aspernatur. Quisquam fugiat fugit rerum facilis obcaecati odio
          accusamus perspiciatis velit doloribus numquam. Eligendi maxime eum
          dicta culpa distinctio repellendus nostrum obcaecati delectus, libero,
          laborum a vel quia quos iusto deserunt labore similique id est tempore
          possimus odit totam tempora corrupti sequi. Est quibusdam dolores
          doloremque dignissimos aliquid maiores harum, suscipit error impedit
          modi aliquam hic blanditiis quaerat repellat quas dolor voluptatem
          deleniti corrupti. Dicta odio quasi ad. Tenetur earum aliquam,
          doloremque, quam voluptatibus quos corrupti temporibus ducimus dolorum
          facilis animi repellendus rem, debitis repudiandae ex molestias
          impedit aut. Consequatur doloremque fuga, quibusdam debitis pariatur
          sint animi! Reprehenderit, eligendi magnam iste explicabo consectetur
          dicta impedit sapiente voluptatem ut voluptates molestias ducimus
          placeat nisi necessitatibus consequatur. In nobis eveniet eos rem
          distinctio ipsum aliquid. Vitae mollitia veritatis placeat. Quas
          dolore impedit minima veniam! Excepturi alias numquam quod temporibus,
          architecto quam autem sequi molestias commodi corrupti consectetur
          beatae consequatur quia voluptates non iure unde soluta corporis, qui
          id? Aliquid possimus quae officia doloribus eligendi earum unde
          inventore facilis laborum? Culpa laudantium, officiis sit tenetur eum
          nobis corrupti reprehenderit eaque enim excepturi animi porro id
          veritatis consequatur? Asperiores, iusto nemo quaerat quas id autem
          nam, dolores laboriosam aspernatur consectetur tempora. Illo vero
          natus aperiam odit. Animi tempora aperiam odit dicta blanditiis
          voluptatem, debitis et dolores veniam deleniti omnis voluptatibus
          assumenda ut numquam!
        </p>
      </div>
    </div>
  );
}
