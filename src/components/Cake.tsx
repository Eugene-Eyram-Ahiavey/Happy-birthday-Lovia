

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function Cake() {
  const [wishMade, setWishMade] = useState(false);

  const makeWish = () => {
    setWishMade(true);

    confetti({
      particleCount: 400,
      spread: 180,
      origin: {
        y: 0.6,
      },
    });
  };

  return (
    <section className="py-20 px-4">

      <div className="max-w-3xl mx-auto text-center">

        {!wishMade ? (
          <>
            <h2
              className="
              text-3xl
              md:text-5xl
              font-bold
              text-pink-600
              mb-10
              "
            >
              One Last Thing... 🎂
            </h2>


            {/* Floating Cake */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
              text-8xl
              mb-8
              "
            >
              🎂
            </motion.div>


            <p
              className="
              text-lg
              md:text-xl
              text-gray-700
              mb-8
              "
            >
              Close your eyes, make a wish,
              and tap the button below ✨
            </p>


            <button
              onClick={makeWish}
              className="
              bg-pink-500
              hover:bg-pink-600
              text-white
              px-8
              py-4
              rounded-full
              text-lg
              font-semibold
              shadow-lg
              transition
              "
            >
              Make A Wish 🌟
            </button>

          </>

        ) : (

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              duration: 0.8,
            }}
          >

            <div
              className="
              text-8xl
              mb-6
              "
            >
              🎂
            </div>


            <div
              className="
              text-5xl
              mb-6
              "
            >
              💨✨
            </div>


            <h2
              className="
              text-3xl
              md:text-5xl
              font-bold
              text-pink-600
              mb-6
              "
            >
              Happy Birthday Lovia ❤️
            </h2>


            <p
              className="
              text-lg
              md:text-xl
              text-gray-700
              leading-8
              max-w-2xl
              mx-auto
              "
            >
              May this new chapter of your life be filled with
              happiness, success, peace, good health, and
              countless beautiful memories.
            </p>


            <p
              className="
              mt-8
              text-xl
              font-semibold
              text-pink-500
              "
            >
              Thank you for being an amazing person.
              Never stop shining ✨
            </p>


            <p
              className="
              mt-8
              text-2xl
              "
            >
              ❤️ 🎉 ❤️ 🎉 ❤️
            </p>


          </motion.div>

        )}

      </div>

    </section>
  );
}