import React from "react";

const MarketIcon = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z"
        fill={props.color}
      />
      <path
        d="M18.67 2H16.77C14.59 2 13.44 3.15 13.44 5.33V7.23C13.44 9.41 14.59 10.56 16.77 10.56H18.67C20.85 10.56 22 9.41 22 7.23V5.33C22 3.15 20.85 2 18.67 2Z"
        fill={props.color}
      />
      <path
        d="M18.67 13.43H16.77C14.59 13.43 13.44 14.58 13.44 16.76V18.66C13.44 20.84 14.59 21.99 16.77 21.99H18.67C20.85 21.99 22 20.84 22 18.66V16.76C22 14.58 20.85 13.43 18.67 13.43Z"
        fill={props.color}
      />
      <path
        d="M7.24 13.43H5.34C3.15 13.43 2 14.58 2 16.76V18.66C2 20.85 3.15 22 5.33 22H7.23C9.41 22 10.56 20.85 10.56 18.67V16.77C10.57 14.58 9.42 13.43 7.24 13.43Z"
        fill={props.color}
      />
    </svg>
  );
};

export default MarketIcon;