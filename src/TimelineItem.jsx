import { motion, useTransform } from "framer-motion";

export default function TimelineItem({ exp, idx, total, scrollYProgress }) {
  const step = 1 / total;
  const start = idx * step;
  const end = (idx + 1) * step;

  // Dot background
  const bgColor = useTransform(
    scrollYProgress,
    [0, start, end],
    ["#6b7280", "#6b7280", "#61DAFB"]
  );

  // Reveal effect (anticipate)
  const show = useTransform(
    scrollYProgress,
    [start, start + (end - start) * 0.5],
    [0, 1]
  );

  // Motion styles for content
  const contentOpacity = show;
  const contentY = useTransform(show, [0, 1], [20, 0]);
  const blurAmount = useTransform(show, [0, 1], [6, 0]);
  const filter = useTransform(blurAmount, (v) => `blur(${v}px)`);

  return (
    <div className="relative flex items-center min-h-[300px]">
      {/* Dot */}
      <motion.div
        style={{ backgroundColor: bgColor }}
        className="absolute left-6 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
             w-10 h-10 rounded-full border-[10px] border-[#1f1f1f]"
      />

      {/* Content wrapper */}
      <motion.div
        className="
          w-full
          flex flex-col items-start gap-2
          md:grid md:grid-cols-2 md:items-center
        "
        style={{
          opacity: contentOpacity,
          y: contentY,
          filter,
          willChange: "opacity, transform, filter",
        }}
      >
        {/* Date */}
        <div className="pl-16 md:pl-0 text-left md:text-right md:pr-8">
          <p className="text-lg font-semibold text-[#ffc811]">{exp.year}</p>
        </div>

        {/* Role + Company */}
        <div className="pl-16 md:pl-8 text-left">
          <h3 className="sm:text-xl text-xs font-bold">{exp.role}</h3>
          <h4 className="sm:text-md text-xs text-[#61DAFB]">{exp.company}</h4>
          <p className="mt-2 sm:text-base text-xs text-gray-400">
            {exp.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
