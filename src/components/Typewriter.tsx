'use client'
import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  speed?: number
  delay?: number
  className?: string
}
const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 100, // velocidad de escritura (ms por letra)
  delay = 100, // velocidad de escritura (ms por letra)
  className
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const process = async () => {
      await Await(delay)

      const interval = setInterval(() => {
        setDisplayedText((prev) => {
          let _new = prev
          if (prev.length < text.length)
            _new += text[prev.length]
          else
            clearInterval(interval);
          return _new
        });
      }, speed);

      return interval
    }
    process();

    // return () => clearInterval(interval);
  }, [text, speed, delay]);

  return <span className={className}>{displayedText}</span>;
};

export default Typewriter

const Await = (timeToWait: number) => new Promise<void>((resolve) => {
  setTimeout(() => {
    resolve()
  }, timeToWait);
})