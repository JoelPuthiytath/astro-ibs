"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";

const AnimatedText = () => {
  const words = useMemo(() => ["Data", "Technology", "Creativity"], []);
  const fullText = useMemo(() => "", []);
  const [state, setState] = useState({
    text: words[0],
    wordIndex: 0,
    isDeleting: false,
    typingSpeed: 150,
    isPaused: false,
  });

  const updateText = useCallback(() => {
    if (state.isPaused) {
      const pauseTimeout = setTimeout(() => {
        setState((prevState) => ({ ...prevState, isPaused: false }));
      }, 2000); // 2 seconds delay

      return () => clearTimeout(pauseTimeout);
    }

    const timeout = setTimeout(() => {
      if (
        !state.isDeleting &&
        state.text === fullText + words[state.wordIndex]
      ) {
        setState((prevState) => ({
          ...prevState,
          isPaused: true,
          isDeleting: true,
          typingSpeed: 100,
        }));
      } else if (state.isDeleting && state.text === fullText) {
        setState((prevState) => ({
          ...prevState,
          isDeleting: false,
          wordIndex: (prevState.wordIndex + 1) % words.length,
          typingSpeed: 100,
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          text: state.isDeleting
            ? prevState.text.slice(0, -1)
            : fullText +
              words[state.wordIndex].slice(
                0,
                prevState.text.length - fullText.length + 1
              ),
        }));
      }
    }, state.typingSpeed);

    return () => clearTimeout(timeout);
  }, [state, fullText, words]);

  useEffect(() => {
    const cleanup = updateText();
    return cleanup;
  }, [state, updateText]);

  return (
    <span>
      {state.text}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default AnimatedText;
