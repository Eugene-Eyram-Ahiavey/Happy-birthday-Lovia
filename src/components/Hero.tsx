import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      relative
      overflow-hidden
      "
    >

      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">

        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
          absolute
          top-20
          left-10
          text-4xl
          "
        >
          ❤️
        </motion.div>


        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
          absolute
          top-40
          right-10
          text-4xl
          "
        >
          ✨
        </motion.div>


        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="
          absolute
          bottom-32
          left-20
          text-4xl
          "
        >
          🌸
        </motion.div>

      </div>


      <div className="text-center max-w-3xl">


        <motion.p
          initial={{
            opacity:0,
            y:30
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:1
          }}

          className="
          text-lg
          md:text-2xl
          text-pink-500
          font-semibold
          mb-6
          "
        >
          ✨ A Special Day For Someone Special ✨
        </motion.p>



        <motion.h1
          initial={{
            opacity:0,
            scale:0.8
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            duration:1
          }}

          className="
          text-5xl
          sm:text-6xl
          md:text-8xl
          font-bold
          text-pink-600
          "
        >
          Happy Birthday
          <br />
          Lovia ❤️
        </motion.h1>



        <motion.p

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          transition={{
            delay:1,
            duration:1
          }}

          className="
          mt-8
          text-lg
          md:text-xl
          text-gray-700
          leading-8
          "
        >
          Today is a celebration of the beautiful person you are,
          the smiles you share, and the memories that make you special.
        </motion.p>



      </div>

    </section>
  );
}