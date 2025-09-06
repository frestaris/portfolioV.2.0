import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import pdfFile from "./assets/Resume_ArisFresta_2025.pdf";
import { developers } from "./data/data";

const CARD_HEIGHT = 310;
const EXTRA_SPACE = 180;
const CONTAINER_HEIGHT = CARD_HEIGHT + EXTRA_SPACE;
const SPINS = 1;

const DeveloperCard = ({ dev }) => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "Aris_Fresta_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
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
            className="text-[#94cea8] underline cursor-pointer"
            title={dev.github}
          >
            "GitHub Profile"
          </a>
          ,
        </p>
        <p>
          <span className="text-[#53b9fe]">linkedin</span>:{" "}
          <a
            href={dev.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94cea8] underline cursor-pointer"
            title={dev.linkedin}
          >
            "Linkedin Profile"
          </a>
          ,
        </p>
        <p>
          <span className="text-[#53b9fe]">resume</span>:{" "}
          <button
            onClick={handleDownloadCV}
            className="text-[#94cea8] underline cursor-pointer"
          >
            "Download CV"
          </button>
          ,
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
};

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
              transition={{ duration: 3, ease: "easeOut" }}
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
          {spinning ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center justify-center text-center"
            >
              {/* Spinner ring with 404 inside */}
              <div className="relative flex items-center justify-center">
                {/* Spinner ring */}
                <div className="w-40 h-40 border-2 border-gray-600 border-t-[#ff5555] rounded-full animate-spin"></div>

                {/* 404 text inside ring */}
                <div className="absolute flex flex-col items-center justify-center">
                  <p className="text-4xl md:text-5xl font-bold text-[#ff5555] drop-shadow-[0_0_10px_rgba(255,85,85,0.8)]">
                    404
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 tracking-widest font-mono">
                    NOT FOUND
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="relative">
              {/* Base image */}
              <motion.img
                key={developers[finalIndex].id}
                src={developers[finalIndex].avatar}
                alt={`${developers[finalIndex].name} ${developers[finalIndex].surname}`}
                className="glitch-img w-40 h-40 md:w-52 md:h-52 lg:w-56 lg:h-56 rounded-full object-cover"
                style={{
                  filter: "contrast(1.1) saturate(1.2) hue-rotate(90deg)",
                  boxShadow: "0 0 30px rgba(106,153,85,0.8)",
                }}
                initial={{ filter: "blur(8px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />

              {/* Matrix stripes overlay */}
              <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,255,0,0.3)_2px,transparent_2px)] bg-[length:100%_8px] animate-pulse mix-blend-overlay" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
