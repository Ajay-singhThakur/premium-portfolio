import { motion } from "framer-motion";
import { skills } from "../utils/data.js";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/10 rounded-xl shadow-lg border border-white/20"
          >
            <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-300 mt-2">{skill.level}%</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
