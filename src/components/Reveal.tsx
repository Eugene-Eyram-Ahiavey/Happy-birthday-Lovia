import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function Reveal({ children }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
        amount: 0.2,
      }}

      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}