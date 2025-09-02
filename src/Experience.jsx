import { experiences } from "./data/data";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"], // fill animation range
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative text-white px-6 md:px-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-[#6a9955]">
        <span className="text-[#398cd6]">{"{"}</span>/* Experience */
        <span className="text-[#398cd6]">{"}"}</span>
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Background line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-gray-700" />

        {/* Animated colored line (fills as you scroll the section) */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-1/2 top-0 -translate-x-1/2 origin-top w-1 h-full
             bg-gradient-to-b from-[#398cd6] to-[#ffc811] z-10"
        />

        {/* Timeline items */}
        <div className="space-y-32">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.6 }}
              className="relative flex items-center"
            >
              {/* Date (left side) */}
              <div className="w-1/2 pr-8 text-right">
                <p className="text-lg font-semibold text-[#ffc811]">
                  {exp.year}
                </p>
              </div>

              {/* Dot (always on center line) */}
              <motion.div
                initial={{ backgroundColor: "#374151", scale: 1 }}
                whileInView={{
                  backgroundColor: "#398cd6",
                  scale: 1.2,
                  boxShadow: "0 0 15px rgba(57, 140, 214, 0.8)",
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.6 }}
                className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-[#121212] z-10"
              />

              {/* Content (right side) */}
              <div className="w-1/2 pl-8 text-left">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <h4 className="text-md text-[#53b9fe]">{exp.company}</h4>
                <p className="mt-2 text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
