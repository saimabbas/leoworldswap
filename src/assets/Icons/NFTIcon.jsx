import React from "react";

const NFTIcon = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.46147 14.0289C3.95531 14.6865 4.42408 15.6389 5.2539 15.6389H14.8056C15.6296 15.6389 16.1 14.6981 15.6056 14.0389L13.5108 11.2458C13.1142 10.7171 12.323 10.7116 11.9192 11.2348L9.86821 13.8917C9.46147 14.4186 8.66309 14.4085 8.26981 13.8714L7.25909 12.4912C6.86548 11.9537 6.06622 11.9441 5.65985 12.4721L4.46147 14.0289ZM1.66667 20C1.22222 20 0.833333 19.8333 0.5 19.5C0.166667 19.1667 0 18.7778 0 18.3333V1.66667C0 1.22222 0.166667 0.833333 0.5 0.5C0.833333 0.166667 1.22222 0 1.66667 0H18.3333C18.7778 0 19.1667 0.166667 19.5 0.5C19.8333 0.833333 20 1.22222 20 1.66667V18.3333C20 18.7778 19.8333 19.1667 19.5 19.5C19.1667 19.8333 18.7778 20 18.3333 20H1.66667ZM1.66667 17.3333C1.66667 17.8856 2.11438 18.3333 2.66667 18.3333H17.3333C17.8856 18.3333 18.3333 17.8856 18.3333 17.3333V2.66667C18.3333 2.11438 17.8856 1.66667 17.3333 1.66667H2.66667C2.11438 1.66667 1.66667 2.11438 1.66667 2.66667V17.3333Z"
        fill={props.color}
      />
    </svg>
  );
};

export default NFTIcon;