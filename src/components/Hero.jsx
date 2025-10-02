import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 animate-gradient-x">
      <motion.img
        src="/hero.png"
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-white shadow-xl mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.h1
        className="text-5xl font-extrabold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Hi, I’m <span className="text-white">Ajay Thakur</span>
      </motion.h1>
      <p className="text-gray-200 max-w-xl">
        A passionate <span className="text-white font-semibold">Software Engineer</span> building modern, interactive, and scalable web apps.
      </p>
      <div className="mt-6 flex gap-4">
        <a href="/resume.pdf" download className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 shadow-md transition">Resume</a>
        <a href="#contact" className="px-6 py-3 rounded-lg bg-white/20 hover:bg-white/30 transition">Contact</a>
      </div>
    </section>
  );
}
