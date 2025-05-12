// CircularProgressBar.jsx
import React from 'react';

const CircularProgressBar = ({ progress }) => {
  const radius = 50;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2} className="progress-circle">
      <circle
        stroke="#E6E6E6"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#00BFFF"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        className="progress-circle-fill"
      />
      <text
        x={radius}
        y={radius}
        textAnchor="middle"
        dy=".3em"
        fontSize="20px"
        fill="#00BFFF"
      >
        {Math.round(progress)}
      </text>
    </svg>
  );
};

export default CircularProgressBar;
