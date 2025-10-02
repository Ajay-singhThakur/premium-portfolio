import { motion } from "framer-motion";
import { projects } from "../utils/data.js";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/10 rounded-xl shadow-lg border border-white/20"
          >
            <img src={p.image} alt={p.title} className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{p.description}</p>
            <a href={p.link} target="_blank" className="text-blue-400 hover:underline">View Project →</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
