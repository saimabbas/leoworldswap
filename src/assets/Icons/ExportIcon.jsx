import React from "react";

const ExportIcon = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8333 9.16665L17.6666 2.33331"
        stroke={props.color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3333 5.66669V1.66669H14.3333"
        stroke={props.color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.16669 1.66669H7.50002C3.33335 1.66669 1.66669 3.33335 1.66669 7.50002V12.5C1.66669 16.6667 3.33335 18.3334 7.50002 18.3334H12.5C16.6667 18.3334 18.3334 16.6667 18.3334 12.5V10.8334"
        stroke={props.color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ExportIcon;
