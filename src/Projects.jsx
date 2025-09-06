import { useRef, useState } from "react";
import { motion, Reorder } from "framer-motion";
import { projects } from "./data/data";
import reactjs from "./assets/react.png";

export default function Projects() {
  const [items, setItems] = useState(projects);
  const [active, setActive] = useState(projects[0]);
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
          {/* Left: Image (50%), aligned top */}
          <div className="w-full md:w-1/2 flex items-start justify-start">
            <img
              src={active.image}
              alt={active.title}
              className="rounded-lg border border-[#333] object-contain"
            />
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
                  <span className="text-[#C57991]">export</span>{" "}
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
                  &nbsp;&nbsp;<span className="text-[#53b9fe]">demo</span>:{" "}
                  <a
                    href={active.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#94cea8] underline"
                  >
                    "{active.live}"
                  </a>
                  ,{"\n"}
                  {active.linkUrl && (
                    <>
                      &nbsp;&nbsp;<span className="text-[#53b9fe]">code</span>:{" "}
                      <a
                        href={active.linkUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#94cea8] underline"
                      >
                        "{active.linkUrl}"
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
