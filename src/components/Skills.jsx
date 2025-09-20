import { skillGroups } from "../data/skills";
import { motion } from "framer-motion";

const CARD_HEIGHT = 120;
const EXTRA_SPACE = 80;
const CONTAINER_HEIGHT = CARD_HEIGHT * 3 + EXTRA_SPACE;
const DURATION = 15;

const SkillColumn = ({ skills, direction = "up", delay = 0, title }) => {
  const doubled = [...skills, ...skills];

  return (
    <div className="flex flex-col items-center mt-6">
      {/* Title */}
      {title && (
        <h3 className="text-sm md:text-xl font-semibold mb-4 text-[#47c1db]">
          <span className="text-[#da70d6]">{"{"}</span>
          {title}
          <span className="text-[#da70d6]">{"}"}</span>
        </h3>
      )}

      {/* Marquee container */}
      <div
        className="relative overflow-hidden w-full"
        style={{ height: CONTAINER_HEIGHT }}
      >
        {direction === "up" ? (
          // Upward marquee
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-50%" }}
            transition={{
              duration: DURATION,
              ease: "linear",
              repeat: Infinity,
              delay,
            }}
            className="flex flex-col"
          >
            {doubled.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center
   h-[120px] md:h-[150px] w-full select-none my-2
   rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md
   shadow-lg shadow-black/40 hover:shadow-[0_0_25px_rgba(71,193,219,0.5)] transition"
              >
                <img
                  src={s.img}
                  alt={s.skill}
                  className="w-10 h-10 md:w-14 md:h-14 object-contain mb-1"
                />
                <span className="text-xs md:text-sm text-center break-words whitespace-normal px-2">
                  {s.skill}
                </span>
              </div>
            ))}
          </motion.div>
        ) : (
          // Downward marquee
          <motion.div
            initial={{ y: "-50%" }}
            animate={{ y: 0 }}
            transition={{
              duration: DURATION,
              ease: "linear",
              repeat: Infinity,
              delay,
            }}
            className="flex flex-col"
          >
            {doubled.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center
   h-[120px] md:h-[150px] w-full select-none my-2
   rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md
   shadow-lg shadow-black/40 hover:shadow-[0_0_25px_rgba(71,193,219,0.5)] transition"
              >
                <img
                  src={s.img}
                  alt={s.skill}
                  className="w-10 h-10 md:w-14 md:h-14 object-contain mb-1"
                />
                <span className="text-xs md:text-sm text-center break-words whitespace-normal px-2">
                  {s.skill}
                </span>
              </div>
            ))}
          </motion.div>
        )}

        {/* Fade masks */}
        <div
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#1f1f1f] to-transparent pointer-events-none"
          style={{ height: EXTRA_SPACE }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1f1f1f] to-transparent pointer-events-none"
          style={{ height: EXTRA_SPACE }}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  const columns = Object.entries(skillGroups).map(([title, data], index) => ({
    title,
    data,
    dir: index % 2 === 0 ? "up" : "down",
  }));

  return (
    <section
      id="skills"
      className="min-h-screen relative text-white py-16 px-4"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center text-[#4ec9b0]">
        <span className="text-[#808080]">{"<"}</span>Skills
        <span className="text-[#808080]">{" />"}</span>
      </h2>

      {/* Centered container with side space */}
      <div className="flex justify-center gap-1 sm:gap-4 max-w-6xl mx-auto w-full">
        {columns.map((col, i) => (
          <div key={i} className="flex-1 max-w-[180px]">
            <SkillColumn
              skills={col.data}
              direction={col.dir}
              delay={col.delay}
              title={col.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
