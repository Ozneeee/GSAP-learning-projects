import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HistoricFrieze() {
  const [epoque, setEpoque] = useState("-3500 - 476");
  const [carrePosition, setCarrePosition] = useState("absolute");

  const launchAnim = () => {
    ScrollTrigger.create({
      trigger: ".carre",
      start: "top center",
      onEnter: () => {
        setEpoque("-3500 - 476");
        setCarrePosition("fixed");
      },
      onLeaveBack: () => {
        setCarrePosition("absolute");
      },
    });

    ScrollTrigger.create({
      trigger: ".b3",
      start: "center bottom",
      onEnter: () => {
        setEpoque("476 - 1492");
      },
      onLeaveBack: () => {
        setEpoque("-3500 - 476");
      },
    });

    ScrollTrigger.create({
      trigger: ".b4",
      start: "center bottom",
      onEnter: () => {
        setEpoque("1492 - 1789");
      },
      onLeaveBack: () => {
        setEpoque("476 - 1492");
      },
    });

    ScrollTrigger.create({
      trigger: ".b5",
      start: "center bottom",
      onEnter: () => {
        setEpoque("1789 - 2024");
      },
      onLeaveBack: () => {
        setEpoque("1492 - 1789");
      },
    });
  };

  useEffect(() => {
    launchAnim();
  }, []);

  return (
    <div className="selection:bg-yellow-400">
      <div className="bigBlock b1 w-full h-screen bg-yellow-100 p-16">
        <h1 className="text-center font-bold text-6xl">HISTORICAL PERIODS</h1>
        <p className="p-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid omnis
          nemo, laudantium quaerat vero quidem repellendus ab quam similique
          minus. Nesciunt dignissimos, quidem laborum odit illum est repellendus
          modi. Modi provident rem unde eaque eum fugiat omnis beatae animi ex
          asperiores. Provident natus, praesentium laboriosam fuga, aliquam ex
          odio laudantium ipsum veritatis voluptatibus eligendi veniam
          consequatur quidem ab, quis itaque. Vel provident pariatur quos
          laboriosam maiores eveniet ea deleniti odit magnam alias, ipsam
          molestias corporis error, minima, nostrum tempora quia minus quas
          magni explicabo vitae dignissimos. Exercitationem ullam, officiis id
          fuga vel ipsum facilis libero quis vero nam illum facere voluptatem
          dolorem quaerat omnis at veritatis velit reprehenderit iure? Amet
          impedit accusantium rerum ipsum nemo non tenetur ut! Quae quibusdam
          eius praesentium est obcaecati cum fuga veniam doloremque non
          corrupti, laboriosam maxime voluptatem dolorem expedita eaque libero
          suscipit. Molestias sed ut quaerat magni, ad aliquam quidem laborum
          libero ipsa sequi quia vero maxime nihil natus tempora officiis ea
          quis doloribus iste praesentium, fugit nam itaque eos doloremque?
          Molestias, doloribus minima facilis mollitia veritatis natus facere.
          Laborum veritatis beatae reiciendis nemo temporibus odio doloribus
          dolore pariatur repellendus. Repellendus beatae esse dolores iure
          provident culpa enim! Officia in vero magnam omnis quo.
        </p>
      </div>
      <div className="bigBlock b2 w-full h-screen bg-yellow-300 p-16 relative">
        <div
          className={`carre w-auto h-auto bg-white text-md left-0 py-8 px-6 ${carrePosition} ${
            carrePosition === "absolute"
              ? "top-0"
              : "top-[50%] -translate-y-[50%]"
          }`}
        >
          <h2 className="text-center">Dates :</h2>
          <h2>{epoque}</h2>
        </div>
        <h1 className="text-center font-bold text-6xl">ANTIQUES</h1>
        <p className="p-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          praesentium quod, nobis maxime, sapiente fuga excepturi autem quis
          nisi voluptas quo fugit vitae distinctio dolor at assumenda mollitia
          deleniti illum est quas eius placeat dignissimos blanditiis iure! Odit
          quas iure earum eos ipsa culpa laudantium, ratione labore vitae.
          Itaque harum modi eveniet voluptatibus, ipsum voluptatum nesciunt ab
          ipsa totam, libero fugit perferendis architecto tempora ea temporibus
          a nam consequatur repellat expedita sequi at dolore. Ratione ipsam
          totam vitae fuga quos corporis exercitationem, natus incidunt modi
          iste! Facilis voluptatibus perspiciatis odio, suscipit doloribus sunt
          similique esse facere. Maiores asperiores quos itaque minima, labore
          vitae veniam est dolores ipsam expedita perferendis delectus, mollitia
          hic consequuntur quisquam officia suscipit. Totam, dolorum quidem quos
          iure sit rem, ab eius eveniet blanditiis labore modi aperiam. Ipsum
          provident, perferendis consectetur voluptas debitis quisquam earum
          impedit enim, soluta repellendus error eos voluptates maxime dolorem
          cumque, amet distinctio deleniti eius voluptatibus sit explicabo.
          Distinctio nostrum consequatur soluta? Aspernatur impedit nobis eos
          iste non velit, delectus enim esse molestiae corporis earum reiciendis
          quibusdam ex maxime soluta vitae unde quia ut perspiciatis dolores
          blanditiis a. Necessitatibus doloribus, ab voluptatem, eligendi
          quaerat asperiores repudiandae eum non, ducimus delectus laudantium
          illum maxime.
        </p>
      </div>
      <div className="bigBlock b3 w-full h-screen bg-yellow-500 p-16">
        <h1 className="text-center font-bold text-6xl">MIDDLE AGES</h1>
        <p className="p-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          praesentium quod, nobis maxime, sapiente fuga excepturi autem quis
          nisi voluptas quo fugit vitae distinctio dolor at assumenda mollitia
          deleniti illum est quas eius placeat dignissimos blanditiis iure! Odit
          quas iure earum eos ipsa culpa laudantium, ratione labore vitae.
          Itaque harum modi eveniet voluptatibus, ipsum voluptatum nesciunt ab
          ipsa totam, libero fugit perferendis architecto tempora ea temporibus
          a nam consequatur repellat expedita sequi at dolore. Ratione ipsam
          totam vitae fuga quos corporis exercitationem, natus incidunt modi
          iste! Facilis voluptatibus perspiciatis odio, suscipit doloribus sunt
          similique esse facere. Maiores asperiores quos itaque minima, labore
          vitae veniam est dolores ipsam expedita perferendis delectus, mollitia
          hic consequuntur quisquam officia suscipit. Totam, dolorum quidem quos
          iure sit rem, ab eius eveniet blanditiis labore modi aperiam. Ipsum
          provident, perferendis consectetur voluptas debitis quisquam earum
          impedit enim, soluta repellendus error eos voluptates maxime dolorem
          cumque, amet distinctio deleniti eius voluptatibus sit explicabo.
          Distinctio nostrum consequatur soluta? Aspernatur impedit nobis eos
          iste non velit, delectus enim esse molestiae corporis earum reiciendis
          quibusdam ex maxime soluta vitae unde quia ut perspiciatis dolores
          blanditiis a. Necessitatibus doloribus, ab voluptatem, eligendi
          quaerat asperiores repudiandae eum non, ducimus delectus laudantium
          illum maxime.
        </p>
      </div>
      <div className="bigBlock b4 w-full h-screen bg-yellow-800 p-16">
        <h1 className="text-center font-bold text-6xl">MODERN TIMES</h1>
        <p className="p-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          praesentium quod, nobis maxime, sapiente fuga excepturi autem quis
          nisi voluptas quo fugit vitae distinctio dolor at assumenda mollitia
          deleniti illum est quas eius placeat dignissimos blanditiis iure! Odit
          quas iure earum eos ipsa culpa laudantium, ratione labore vitae.
          Itaque harum modi eveniet voluptatibus, ipsum voluptatum nesciunt ab
          ipsa totam, libero fugit perferendis architecto tempora ea temporibus
          a nam consequatur repellat expedita sequi at dolore. Ratione ipsam
          totam vitae fuga quos corporis exercitationem, natus incidunt modi
          iste! Facilis voluptatibus perspiciatis odio, suscipit doloribus sunt
          similique esse facere. Maiores asperiores quos itaque minima, labore
          vitae veniam est dolores ipsam expedita perferendis delectus, mollitia
          hic consequuntur quisquam officia suscipit. Totam, dolorum quidem quos
          iure sit rem, ab eius eveniet blanditiis labore modi aperiam. Ipsum
          provident, perferendis consectetur voluptas debitis quisquam earum
          impedit enim, soluta repellendus error eos voluptates maxime dolorem
          cumque, amet distinctio deleniti eius voluptatibus sit explicabo.
          Distinctio nostrum consequatur soluta? Aspernatur impedit nobis eos
          iste non velit, delectus enim esse molestiae corporis earum reiciendis
          quibusdam ex maxime soluta vitae unde quia ut perspiciatis dolores
          blanditiis a. Necessitatibus doloribus, ab voluptatem, eligendi
          quaerat asperiores repudiandae eum non, ducimus delectus laudantium
          illum maxime.
        </p>
      </div>
      <div className="bigBlock b5 w-full h-screen bg-yellow-950 p-16">
        <h1 className="text-center font-bold text-6xl">CONTEMPORARY PERIOD</h1>
        <p className="p-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          praesentium quod, nobis maxime, sapiente fuga excepturi autem quis
          nisi voluptas quo fugit vitae distinctio dolor at assumenda mollitia
          deleniti illum est quas eius placeat dignissimos blanditiis iure! Odit
          quas iure earum eos ipsa culpa laudantium, ratione labore vitae.
          Itaque harum modi eveniet voluptatibus, ipsum voluptatum nesciunt ab
          ipsa totam, libero fugit perferendis architecto tempora ea temporibus
          a nam consequatur repellat expedita sequi at dolore. Ratione ipsam
          totam vitae fuga quos corporis exercitationem, natus incidunt modi
          iste! Facilis voluptatibus perspiciatis odio, suscipit doloribus sunt
          similique esse facere. Maiores asperiores quos itaque minima, labore
          vitae veniam est dolores ipsam expedita perferendis delectus, mollitia
          hic consequuntur quisquam officia suscipit. Totam, dolorum quidem quos
          iure sit rem, ab eius eveniet blanditiis labore modi aperiam. Ipsum
          provident, perferendis consectetur voluptas debitis quisquam earum
          impedit enim, soluta repellendus error eos voluptates maxime dolorem
          cumque, amet distinctio deleniti eius voluptatibus sit explicabo.
          Distinctio nostrum consequatur soluta? Aspernatur impedit nobis eos
          iste non velit, delectus enim esse molestiae corporis earum reiciendis
          quibusdam ex maxime soluta vitae unde quia ut perspiciatis dolores
          blanditiis a. Necessitatibus doloribus, ab voluptatem, eligendi
          quaerat asperiores repudiandae eum non, ducimus delectus laudantium
          illum maxime.
        </p>
      </div>
    </div>
  );
}
