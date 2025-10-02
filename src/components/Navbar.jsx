import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const sections = ["home", "about", "skills", "projects", "testimonials", "contact"];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 flex justify-center bg-black/50 backdrop-blur-lg border-b border-white/10"
    >
      <ul className="flex space-x-8 py-4 text-sm uppercase">
        {sections.map((sec) => (
          <li key={sec}>
            <a
              href={`#${sec}`}
              onClick={() => setActive(sec)}
              className={`transition-colors ${
                active === sec ? "text-blue-400 font-bold" : "text-gray-300 hover:text-white"
              }`}
            >
              {sec}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
