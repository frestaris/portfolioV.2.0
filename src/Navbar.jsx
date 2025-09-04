import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 right-4 z-50">
      {/* Hamburger */}
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
      {/* Mobile menu panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-visible"
          >
            <motion.ul
              className="flex flex-col items-center space-y-6 py-6 text-lg font-mono "
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    staggerDirection: 1,
                  },
                },
                exit: {
                  transition: {
                    staggerChildren: 0.15,
                    staggerDirection: -1,
                  },
                },
              }}
            >
              {[
                ["#experience", "Experience"],
                ["#skills", "Skills"],
                ["#about", "About"],
                ["#projects", "Projects"],
              ].map(([href, label]) => (
                <motion.li
                  key={href}
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
                  <a
                    href={href}
                    className="text-[#4ec9b0]"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-[#808080]">{"<"}</span>
                    {label}
                    <span className="text-[#808080]">{">"}</span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
