import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { developers } from "./data/data";

const CARD_HEIGHT = 300;
const EXTRA_SPACE = 180;
const CONTAINER_HEIGHT = CARD_HEIGHT + EXTRA_SPACE;
const SPINS = 1;

const DeveloperCard = ({ dev }) => (
  <div
    className="flex flex-col items-start text-left px-6 text-xs sm:text-sm overflow-hidden"
    style={{ height: CARD_HEIGHT }}
  >
    <span className="text-[#da70d6]">{"{"}</span>
    <div className="pl-6 leading-6 space-y-1 overflow-hidden">
      <p>
        <span className="text-[#53b9fe]">id</span>:{" "}
        <span className="text-[#C586C0]">{dev.id}</span>,
      </p>
      <p>
        <span className="text-[#53b9fe]">name</span>:{" "}
        <span className="text-[#ce9178]">"{dev.name}"</span>,
      </p>
      <p>
        <span className="text-[#53b9fe]">surname</span>:{" "}
        <span className="text-[#ce9178]">"{dev.surname}"</span>,
      </p>
      <p>
        <span className="text-[#53b9fe]">age</span>:{" "}
        <span className="text-[#C586C0]">{dev.age}</span>,
      </p>
      <p>
        <span className="text-[#53b9fe]">github</span>:{" "}
        <a
          href={dev.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block max-w-[180px] overflow-hidden text-ellipsis whitespace-nowrap text-[#94cea8] underline align-middle"
          title={dev.github}
        >
          "{dev.github}"
        </a>
      </p>

      <p>
        <span className="text-[#53b9fe]">linkedin</span>:{" "}
        <a
          href={dev.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block max-w-[180px] overflow-hidden text-ellipsis whitespace-nowrap text-[#94cea8] underline align-middle"
          title={dev.linkedin}
        >
          "{dev.linkedin}"
        </a>
      </p>

      <p>
        <span className="text-[#53b9fe]">nationality</span>:{" "}
        <span className="text-[#ce9178]">"{dev.nationality}"</span>,
      </p>
      <p>
        <span className="text-[#53b9fe]">occupation</span>:{" "}
        <span className="text-[#ce9178]">"{dev.occupation}"</span>,
      </p>
    </div>
    <p>
      <span className="text-[#da70d6]">{"}"}</span>
      <span>,</span>
    </p>
  </div>
);

export default function Hero() {
  const [finalIndex, setFinalIndex] = useState(0);
  const [spinning, setSpinning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Avatar pop from top on mobile
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handleResize = () => setIsMobile(mq.matches);
    handleResize();
    mq.addEventListener("change", handleResize);
    return () => mq.removeEventListener("change", handleResize);
  }, []);

  const centerOffset = (CONTAINER_HEIGHT - CARD_HEIGHT) / 2;
  const spinDistance =
    (developers.length * SPINS + finalIndex) * CARD_HEIGHT - centerOffset;

  return (
    <div className="h-screen flex items-center justify-center text-white font-mono px-4 md:px-8">
      <div className="grid w-full max-w-[1600px] gap-8 items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
        {/* Developers block */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col items-start order-2 md:order-1 lg:col-start-2">
          {/* Code header */}
          <div className="flex sm:text-lg text-sm leading-7 mb-4">
            <span className="text-[#C57991]">export</span>&nbsp;
            <span className="text-[#398cd6]">const</span>&nbsp;
            <span className="text-[#47c1db]">developers</span>&nbsp;=&nbsp;
            <span className="text-[#ffc811]"> [</span>
          </div>

          {/* Slot machine */}
          <div
            className="relative w-full max-w-[380px] mx-auto overflow-hidden"
            style={{ height: CONTAINER_HEIGHT }}
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: -spinDistance }}
              transition={{ duration: 4, ease: "easeOut" }}
              onAnimationComplete={() => setSpinning(false)}
              className="absolute w-full left-0"
            >
              {[...Array(SPINS + 2)].map((_, spinIndex) =>
                developers.map((dev, i) => (
                  <DeveloperCard key={`${spinIndex}-${i}`} dev={dev} />
                ))
              )}
            </motion.div>

            {/* Gradient fades */}
            <div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#1e1e1e] to-transparent"
              style={{ height: CONTAINER_HEIGHT / 3 }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1e1e1e] to-transparent"
              style={{ height: CONTAINER_HEIGHT / 3 }}
            />
          </div>

          {/* Closing bracket */}
          <div className="flex text-lg leading-7 mt-4">
            <span className="text-[#ffc811]">]</span>
          </div>
        </div>

        {/* Avatar block */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col items-center justify-center order-1 md:order-2 lg:col-start-4 min-h-[220px] md:min-h-0 mt-30 md:mt-0">
          {!spinning && (
            <motion.img
              key={developers[finalIndex].id}
              src={developers[finalIndex].avatar}
              alt={`${developers[finalIndex].name} ${developers[finalIndex].surname}`}
              className="w-40 h-40 md:w-52 md:h-52 lg:w-56 lg:h-56 rounded-full object-cover"
              initial={{ filter: "blur(8px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
