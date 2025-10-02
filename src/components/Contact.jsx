export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-gray-300 mb-6">
        Let’s connect! Feel free to reach out for collaborations or just a friendly chat.
      </p>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <textarea placeholder="Your Message" className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
        <button type="submit" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition">Send Message</button>
      </form>
    </section>
  );
}
