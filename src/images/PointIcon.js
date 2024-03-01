import React from "react";

const PointIcon = ({ bg, color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="none">
      <circle
        cx={13}
        cy={13}
        r={10}
        fill={bg}
        stroke={color}
        strokeWidth={6}
        transform="rotate(90 13 13)"
      />
    </svg>
  );
};

export default PointIcon;
