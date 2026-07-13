import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";

import Verification from "./components/Verification";  
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import FloatingHearts from "./components/FloatingHearts"; 
import BirthdayMessage from "./BirthdayMessage";
import MemoryCards from "./MemoryCards";
import Envelope from "./Envelope"; 
import Cake from "./components/Cake"; 
import birthdayMusic from "./assets/music/birthday.mp3" 
import Reveal from "./components/Reveal";
 
function App() {
  const [verified, setVerified] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(
    null
  );

  useEffect(() => {
    if (!verified) return;

    audioRef.current?.play();

    const interval = setInterval(() => {
      confetti({
        particleCount: 150,
        spread: 120,
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [verified]);

  if (!verified) {
  return (
    <Verification
      onSuccess={() => {

        setVerified(true);

        setTimeout(() => {
          audioRef.current?.play();
        }, 500);

      }}
    />
  );
}

  return (
   <>

      <audio
        ref={audioRef}
        src={birthdayMusic}
        loop
      />


      {!verified ? (

        <Verification
          onSuccess={() => {

            setVerified(true);

            setTimeout(() => {
              audioRef.current?.play();
            }, 500);

          }}
        />

      ) : (

        <div className="min-h-screen bg-gradient-to-b from-pink-100 via-white to-rose-100">

          <FloatingHearts />
          <section className="py-20">
          <Reveal>
            <Hero />
          </Reveal>
          </section> 

          <section className="py-16">
          <Reveal>
            <BirthdayMessage />
          </Reveal>
          </section>

          <section className="py-16">
          <Reveal>
            <Gallery />
          </Reveal>
          </section>

        <section className="py-16"> 
          <Reveal>
            <MemoryCards /> 
          </Reveal>
          </section> 

          <section className="py-20"> 
          <Reveal>
            <Envelope />
          </Reveal>
          </section>  

          
          <section className="py-20">
          <Reveal>
            <Cake />
          </Reveal>
          </section>

        </div>

      )}

    </>
  );
}

export default App;