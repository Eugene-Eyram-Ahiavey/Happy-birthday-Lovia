import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const heart = {
        id: Date.now(),
        left: Math.random() * 100,
      };

      setHearts((prev) => [...prev, heart]);

      setTimeout(() => {
        setHearts((prev) =>
          prev.filter((h) => h.id !== heart.id)
        );
      }, 5000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
          }}
        >
          ❤️
        </div>
      ))}
    </>
  );
}