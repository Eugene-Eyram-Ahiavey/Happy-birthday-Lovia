import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Letter from "./components/Letter"; 

export default function Envelope() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="py-20 px-4">

      <div className="max-w-3xl mx-auto text-center">

        <h2
          className="
          text-3xl
          md:text-5xl
          font-bold
          text-pink-600
          mb-8
          "
        >
          One Last Surprise Awaits... ✨
        </h2>


        <AnimatePresence mode="wait">

          {!opened ? (

            <motion.div

              key="envelope"

              animate={{
                y: [0, -10, 0],
              }}

              transition={{
                duration: 2,
                repeat: Infinity,
              }}

              whileHover={{
                scale: 1.05,
              }}

              whileTap={{
                scale: 0.95,
              }}

              onClick={() => setOpened(true)}

              className="
              cursor-pointer
              bg-pink-100
              border-4
              border-pink-300
              rounded-2xl
              shadow-xl
              h-56
              flex
              items-center
              justify-center
              flex-col
              mx-auto
              max-w-md
              "
            >

              <span className="text-7xl">
                💌
              </span>


              <p
                className="
                mt-4
                text-lg
                font-semibold
                text-pink-600
                "
              >
                Tap To Open
              </p>


            </motion.div>


          ) : (

            <motion.div

              key="letter"

              initial={{
                opacity: 0,
                y: 50,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.8,
              }}

            >

              <Letter />

            </motion.div>

          )}

        </AnimatePresence>


      </div>

    </section>
  );
}