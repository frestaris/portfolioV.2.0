import { useEffect, useRef, useState } from "react";
import { motion, Reorder } from "framer-motion";
import { projects } from "./data/projects";
import reactjs from "./assets/react.png";

export default function Projects() {
  const [items, setItems] = useState(projects);
  const [active, setActive] = useState(projects[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const handleDrag = (event, info) => {
    if (!containerRef.current) return;
    const { left, right } = containerRef.current.getBoundingClientRect();
    const edgeSize = 50; // px near edge
    const scrollSpeed = 5;

    if (info.point.x < left + edgeSize) {
      containerRef.current.scrollLeft -= scrollSpeed;
    } else if (info.point.x > right - edgeSize) {
      containerRef.current.scrollLeft += scrollSpeed;
    }
  };

  useEffect(() => {
    // reset carousel when switching project
    setActiveIndex(0);
  }, [active.id]);

  return (
    <section
      id="projects"
      className="min-h-screen mt-24 md:mt-0 text-white font-mono flex flex-col"
    >
      <h2 className="text-2xl md:text-4xl font-bold my-16 text-center text-[#4ec9b0]">
        <span className="text-[#808080]">{"<"}</span>Projects
        <span className="text-[#808080]">{" />"}</span>
      </h2>

      {/* Tab bar with native scroll */}
      <div
        ref={containerRef}
        className="w-full overflow-x-auto bg-[#252526] border-b border-[#333] top-0 z-10
             scrollbar-thin scrollbar-thumb-[#555] scrollbar-track-[#252526]"
      >
        <Reorder.Group
          axis="x"
          values={items}
          onReorder={setItems}
          className="flex"
        >
          {items.map((p) => (
            <Reorder.Item
              key={p.id}
              value={p}
              whileDrag={{
                backgroundColor: "#1e1e1e",
                opacity: 1,
              }}
              onDrag={handleDrag}
              className={`px-4 py-2 text-sm whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                active.id === p.id
                  ? "bg-[#1e1e1e] text-[#ffc811] border-t-2 border-[#398cd6]"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => setActive(p)}
            >
              <img src={reactjs} alt="icon" className="w-4 h-4" />
              {p.title}.jsx
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>

      {/* Editor Window */}
      <div className="p-6 flex-1 min-h-0 overflow-hidden">
        <motion.div
          key={active.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="h-full flex flex-col md:flex-row gap-6"
        >
          {/* Left: Carousel (50%), aligned top */}
          <div className="w-full md:w-1/2 flex items-start justify-start">
            <motion.div
              key={active.id}
              className="relative w-full h-72 md:h-96 overflow-hidden rounded-lg "
            >
              {/* Track */}
              <motion.div
                className="flex h-full"
                animate={{ x: `-${activeIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                {active.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${active.title} ${i + 1}`}
                    className="w-full h-full flex-shrink-0 object-contain"
                  />
                ))}
              </motion.div>
              {/* Left arrow */}
              {activeIndex > 0 && (
                <button
                  onClick={() => setActiveIndex(activeIndex - 1)}
                  className="sm:block hidden absolute left-4 top-1/2 -translate-y-1/2 
              items-center justify-center
             w-10 h-10 rounded-full 
             bg-[#398cd6] hover:bg-[#2880cc]
             text-white text-3xl leading-none hover:cursor-pointer"
                >
                  ‹
                </button>
              )}

              {/* Right arrow */}
              {activeIndex < active.images.length - 1 && (
                <button
                  onClick={() => setActiveIndex(activeIndex + 1)}
                  className="sm:block hidden absolute right-4 top-1/2 -translate-y-1/2 
              items-center justify-center
             w-10 h-10 rounded-full 
             bg-[#398cd6] hover:bg-[#2880cc]
             text-white text-3xl leading-none hover:cursor-pointer"
                >
                  ›
                </button>
              )}
              {/* Controls */}
              <div className="absolute inset-x-0 bottom-2 flex justify-center space-x-2">
                {active.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-3 h-3 rounded-full hover:cursor-pointer ${
                      i === activeIndex ? "bg-[#398cd6]" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Code */}
          <div className="w-full md:w-1/2">
            <pre className="text-xs sm:text-sm leading-6 whitespace-pre-wrap break-words h-full">
              <code className="flex flex-col">
                {/* Comment */}
                <span className="text-[#6a9955] mb-auto">
                  {"// " + active.description}
                </span>

                {/* Main code */}
                <div>
                  {"\n"}
                  <span className="text-[#398cd6]">const</span>{" "}
                  <span className="text-[#47c1db]">{active.title}</span> ={" "}
                  <span className="text-[#ffc811]">{"{"}</span>
                  {"\n"}
                  &nbsp;&nbsp;<span className="text-[#53b9fe]">
                    frontend
                  </span>: <span className="text-[#a464d6]">{"["}</span>
                  {active.frontend.map((b, i) => (
                    <span key={i} className="text-[#ce9178]">
                      '{b.skill}'
                      {i < active.frontend.length - 1 && (
                        <span className="text-white">, </span>
                      )}
                    </span>
                  ))}
                  <span className="text-[#a464d6]">{"]"}</span>,{"\n"}
                  &nbsp;&nbsp;<span className="text-[#53b9fe]">
                    backend
                  </span>: <span className="text-[#a464d6]">{"["}</span>
                  {active.backend.map((b, i) => (
                    <span key={i} className="text-[#ce9178]">
                      '{b.skill}'
                      {i < active.backend.length - 1 && (
                        <span className="text-white">, </span>
                      )}
                    </span>
                  ))}
                  <span className="text-[#a464d6]">{"]"}</span>,{"\n"}
                  &nbsp;&nbsp;<span className="text-[#53b9fe]">
                    tools
                  </span>: <span className="text-[#a464d6]">{"["}</span>
                  {active.tools.map((b, i) => (
                    <span key={i} className="text-[#ce9178]">
                      '{b.skill}'
                      {i < active.tools.length - 1 && (
                        <span className="text-white">, </span>
                      )}
                    </span>
                  ))}
                  <span className="text-[#a464d6]">{"]"}</span>,{"\n"}
                  &nbsp;&nbsp;<span className="text-[#53b9fe]">
                    photos
                  </span>:{" "}
                  <span className="text-[#C586C0]">{active.images.length}</span>
                  ,{"\n"}
                  &nbsp;&nbsp;
                  <span className="text-[#53b9fe]">demo</span>:{" "}
                  <a
                    href={active.live}
                    target="_blank"
                    rel="noreferrer"
                    title={active.live}
                    className="text-[#94cea8] underline hover:cursor-pointer"
                  >
                    "Live link"
                  </a>
                  ,{"\n"}
                  {active.linkUrl && (
                    <>
                      &nbsp;&nbsp;<span className="text-[#53b9fe]">code</span>:{" "}
                      <a
                        href={active.linkUrl}
                        target="_blank"
                        rel="noreferrer"
                        title={active.linkUrl}
                        className="text-[#94cea8] underline hover:cursor-pointer"
                      >
                        "Github repository link"
                      </a>
                      ,{"\n"}
                    </>
                  )}
                  <span className="text-[#ffc811]">{"}"}</span>
                </div>
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
