import { useEffect, useState } from "react";

/**
 * Lightweight replacement for Typed.js.
 * Cycles through `strings`, typing and backspacing each one, forever.
 */
export default function useTypewriter(strings, { typeSpeed = 100, backSpeed = 60, pause = 1200 } = {}) {
  const [text, setText] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      const currentWord = strings[wordIndex % strings.length];

      if (!deleting) {
        charIndex += 1;
        setText(currentWord.slice(0, charIndex));
        if (charIndex === currentWord.length) {
          deleting = true;
          timeoutId = setTimeout(tick, pause);
          return;
        }
        timeoutId = setTimeout(tick, typeSpeed);
      } else {
        charIndex -= 1;
        setText(currentWord.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex += 1;
        }
        timeoutId = setTimeout(tick, backSpeed);
      }
    };

    timeoutId = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [strings.join("|"), typeSpeed, backSpeed, pause]);

  return text;
}
