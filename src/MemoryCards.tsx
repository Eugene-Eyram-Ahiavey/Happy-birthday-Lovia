import { motion } from "framer-motion";

const memories = [
  {
    title: "Your Smile 😊",
    text: "One thing I admire most about you is your smile. It has a way of brightening every room and making difficult days feel lighter.",
  },

  {
    title: "Your Kindness ❤️",
    text: "You have a beautiful heart. The way you care about people and show compassion is something I truly admire.",
  },

  {
    title: "Your Strength 💪",
    text: "Life hasn't always been easy, yet you continue to move forward with courage and grace. That strength inspires me.",
  },

  {
    title: "Your Maturity 🌹",
    text: "Your ability to handle situations thoughtfully and calmly is one of the qualities I respect most about you.",
  },

  {
    title: "Your Beautiful Energy ✨",
    text: "Being around you brings positivity and warmth. Your presence alone can make an ordinary day feel special.",
  },

  {
    title: "Simply You 💕",
    text: "Above everything else, I appreciate you for being exactly who you are. Never stop being that amazing person.",
  },
];

export default function MemoryCards() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-center text-3xl md:text-5xl font-bold text-pink-600 mb-12">
        Things I Admire About You ❤️
      </h2>

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        max-w-6xl
        mx-auto
      "
      >
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            whileHover={{
              scale: 1.03,
            }}
            className="
              bg-white
              rounded-2xl
              shadow-lg
              p-6
              border
              border-pink-100
            "
          >
            <h3 className="text-xl font-bold text-pink-500 mb-4">
              {memory.title}
            </h3>

            <p className="text-gray-700 leading-7">
              {memory.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}