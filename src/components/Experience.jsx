import { experiences } from "../data/experiences";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import TimelineItem from "./TimelineItem";

export default function Experience() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 25%", "end end"],
  });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative text-white px-6 md:px-16 py-14 "
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-16 text-center text-[#4ec9b0]">
        <span className="text-[#808080]">{"<"}</span>Experience
        <span className="text-[#808080]">{" />"}</span>
      </h2>

      <div className="grid grid-cols-6">
        <div className="relative col-span-6 md:col-span-4">
          {/* Line */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 h-full">
            <div className="absolute left-1/2 -translate-x-1/2 w-[4px] h-full bg-gray-700" />
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-1/2 -translate-x-1/2 origin-top w-[4px] h-full bg-gradient-to-b from-[#334155] to-[#61DAFB] z-10"
            />
          </div>

          {/* Items */}
          <div className="space-y-24">
            {experiences.map((exp, idx) => (
              <TimelineItem
                key={idx}
                exp={exp}
                idx={idx}
                total={experiences.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
