
import { TypeAnimation } from "react-type-animation";

export default function BirthdayMessage() {
  return (
    <div className="text-center py-16 px-6">
      <TypeAnimation
        sequence={[
          "Today is your special day ❤️",
          2000,

          "You deserve all the happiness in the world 🌹",
          2000,

          "Thank you for being you ✨",
          2000,
        ]}
        wrapper="h2"
        speed={50}
        repeat={Infinity}
        className="
        text-xl
        md:text-3xl
        font-semibold
        text-pink-600
        "
      />
    </div>
  );
}