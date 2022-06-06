import React from "react";

const ImportIcon = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3333 1.66669L11.5 8.50002"
        stroke={props.color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.8333 5.14166V9.16666H14.8583"
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

export default ImportIcon;
