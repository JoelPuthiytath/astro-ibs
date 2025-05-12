"use client";
import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";
import "./styles.css";

const MobileTextArea = ({ inputValue, onFocus, onChange, onSubmit }) => {
  const [text, setText] = useState(inputValue);
  const textAreaRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    adjustTextAreaHeight();
  }, [text]);

  const adjustTextAreaHeight = () => {
    const textArea = textAreaRef.current;
    const container = containerRef.current;

    textArea.style.height = "auto";
    if (textArea.scrollHeight > 70) {
      textArea.style.height = `${textArea.scrollHeight}px`;
      container.style.height = `${textArea.scrollHeight}px`;
    } else {
      textArea.style.height = `50px`;
      container.style.height = `50px`;
    }
  };

  const handleSubmit = () => {
    console.log("Submitted:", text);
    onSubmit(text);
    setText("");
  };

  const placeholderCenterStyles = {
    textAlign: "left",
    fontSize: "1.2em",
    fontWeight: 500,
    minHeight: "1.5em",
    paddingTop: "0.5em",
    paddingLeft: "1em",
  };

  return (
    <div className="relative max-w-md mx-auto mt-4 mobile-text-area">
      <div
        ref={containerRef}
        className="relative bg-white border border-gray-300 overflow-hidden text-area-container min-h-[50px] "
      >
        <textarea
          ref={textAreaRef}
          value={inputValue}
          onFocus={onFocus}
          onChange={(e) => {
            onChange(e);
            setText(e.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSubmit();
            }
          }}
          placeholder="Unlock Tailored Services"
          className="w-[90%] p-2 pr-10 bg-transparent focus:outline-none resize-none overflow-hidden "
          rows={1}
          style={placeholderCenterStyles}
        />
        <button
          onClick={handleSubmit}
          className="absolute right-2 bottom-1.5 bg-[#6B2DDF] text-white p-2 rounded-full  focus:outline-none focus:ring-2  flex items-center justify-center"
        >
          <a
            src="./images/smartsearch/up-arrow.webp"
            alt="search"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};

export default MobileTextArea;
