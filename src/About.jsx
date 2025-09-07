import { useState } from "react";
import { aboutMe } from "./data/data";
import pic from "./assets/pic-1.jpg";
import PowerShellModal from "./PowerShellModal";
import { Award, GraduationCap } from "lucide-react";

export default function About() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section
      id="about"
      className="min-h-screen text-white font-mono px-6 md:px-16 py-16 bg-[#1e1e1e]"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center text-[#4ec9b0]">
        <span className="text-[#808080]">{"<"}</span>About
        <span className="text-[#808080]">{" />"}</span>
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left: Photo */}
        <div className="flex flex-col items-center lg:items-start">
          <pre className="text-[#53b9fe]">
            [<span className="text-[#ce9178]">Photo</span>]
          </pre>
          <img
            src={pic}
            alt="Aris Fresta"
            className="w-48 h-48 md:w-56 md:h-56 rounded-2xl border border-white/20 shadow-lg object-cover mt-2"
          />

          {/* Experience & Education as comments */}
          <div className="mt-6 flex flex-wrap gap-4 text-sm lg:flex-col lg:items-start">
            <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#4ec9b0] text-[#4ec9b0] bg-[#4ec9b0]/10">
              <Award size={16} className="text-[#4ec9b0]" />
              2+ years · Web Dev
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#ffc811] text-[#ffc811] bg-[#ffc811]/10">
              <GraduationCap size={16} className="text-[#ffc811]" />
              Self-Taught
            </span>
          </div>
        </div>

        {/* Right: About text */}
        <div className="flex-1">
          {!showForm ? (
            <div
              className="flex flex-col p-6 rounded-2xl border  border-white/20 text-xs sm:text-base
     bg-white/5 backdrop-blur-md shadow-lg shadow-black/40 
     hover:shadow-[0_0_25px_rgba(71,193,219,0.5)] transition"
            >
              <div className="text-[#6a9955] mb-4">// About Me</div>

              <div className="leading-7">
                {aboutMe.description.split("\n").map((line, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-[3rem_auto] gap-4 mb-2"
                  >
                    {/* Line number with gutter divider */}
                    <span className="relative text-gray-500 mt-2 text-xs text-right pr-2 select-none">
                      {idx + 687}
                      <span className="absolute top-0 right-0 h-full border-r border-gray-700"></span>
                    </span>

                    {/* Code-styled paragraph */}
                    {line.trim() ? (
                      <p>
                        <span className="text-[#808080]">&lt;</span>
                        <span className="text-[#398cd6]">p</span>
                        <span className="text-[#808080]">&gt;</span> {line}{" "}
                        <span className="text-[#808080]">&lt;/</span>
                        <span className="text-[#398cd6]">p</span>
                        <span className="text-[#808080]">&gt;</span>
                      </p>
                    ) : (
                      <span>&nbsp;</span>
                    )}
                  </div>
                ))}

                {/* Button  */}
                <div className="grid grid-cols-[3rem_auto] gap-4 mt-4">
                  <span className="relative text-gray-500 mt-2 text-xs text-right pr-2 select-none">
                    {aboutMe.description.split("\n").length + 687}
                    <span className="absolute top-0 right-0 h-full border-r border-gray-700"></span>
                  </span>
                  <p>
                    <span className="text-[#808080]">&lt;</span>
                    <span className="text-[#398cd6]">button</span>{" "}
                    <span className="text-[#9cdcfe]">onClick</span>
                    <span className="text-white">=</span>
                    <span className="text-[#ce9178]">
                      <span>
                        <span className="text-[#a464d6]">{"{"}</span>
                        <span className="text-[#398cd6]">() =&gt;</span>{" "}
                        <span className="text-[#ffc811]">setShowForm</span>
                        <span className="text-[#398cd6]">(true)</span>
                        <span className="text-[#a464d6]">{"}"}</span>
                      </span>
                    </span>
                    <span className="text-[#808080]">&gt;</span>{" "}
                    <span
                      onClick={() => setShowForm(true)}
                      className="text-[#4ec9b0] hover:text-[#ffc811] cursor-pointer underline"
                    >
                      Get in Touch
                    </span>{" "}
                    <span className="text-[#808080]">&lt;/</span>
                    <span className="text-[#398cd6]">button</span>
                    <span className="text-[#808080]">&gt;</span>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <PowerShellModal onClose={() => setShowForm(false)} />
          )}
        </div>
      </div>
    </section>
  );
}
