import React from "react";
import CountUp from "react-countup";
export default function index({ start, end, label }) {
  return (
    <>
      <div>
        <CountUp start={start} end={end} duration={2.5} enableScrollSpy />
        {label}
      </div>
    </>
  );
}
