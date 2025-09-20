import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav ref={navRef} className="fixed top-8 right-8 z-50">
      {/* Hamburger animation*/}
      <div className="flex justify-end">
        <div
          onClick={() => setIsOpen((v) => !v)}
          className="relative w-10 h-10 cursor-pointer text-white"
        >
          <span
            className={`absolute left-1/2 top-1/2 block h-[2px] w-5 bg-current rounded 
      transition-transform duration-600 ease-in-out
      ${
        isOpen
          ? "-translate-x-1/2 -translate-y-1/2 rotate-[225deg]"
          : "translate-x-[-70%] -translate-y-[8px] rotate-45"
      }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 block h-[2px] w-5 bg-current rounded 
      transition-transform duration-600 ease-in-out
      ${
        isOpen
          ? "-translate-x-1/2 -translate-y-1/2 -rotate-[225deg]"
          : "translate-x-[-70%] translate-y-[5px] -rotate-45"
      }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 block h-[2px] w-5 bg-current rounded 
      transition-transform duration-600 ease-in-out
      ${
        isOpen
          ? "-translate-x-1/2 -translate-y-1/2 rotate-[225deg]"
          : "-translate-x-[10%] -translate-y-[18px] -rotate-45"
      }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 block h-[2px] w-5 bg-current rounded 
      transition-transform duration-600 ease-in-out
      ${
        isOpen
          ? "-translate-x-1/2 -translate-y-1/2 -rotate-[225deg]"
          : "-translate-x-[10%] translate-y-[-5px] rotate-45"
      }`}
          />
        </div>
      </div>

      {/* Mobile menu dropdown*/}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, when: "beforeChildren" },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.2, when: "beforeChildren" },
            }}
            className="overflow-visible"
          >
            <motion.ul
              className="flex flex-col items-center space-y-6 py-6 px-4 text-lg font-mono
             rounded-2xl bg-[#2a2a2a] border border-white/20"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    staggerDirection: 1,
                  },
                },
                exit: {
                  transition: {
                    staggerChildren: 0.05,
                    staggerDirection: -1,
                  },
                },
              }}
            >
              {[
                ["projects", "Projects"],
                ["experience", "Experience"],
                ["skills", "Skills"],
                ["about", "About"],
              ].map(([id, label]) => (
                <motion.li
                  key={id}
                  variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      },
                    },
                    exit: {
                      opacity: 0,
                      x: 100,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      },
                    },
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <button
                    onClick={() => {
                      document
                        .getElementById(id)
                        ?.scrollIntoView({ behavior: "smooth" });
                      setIsOpen(false);
                    }}
                    className="text-[#4ec9b0] hover:cursor-pointer"
                  >
                    <span className="text-[#808080]">{"<"}</span>
                    {label}
                    <span className="text-[#808080]">{">"}</span>
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
