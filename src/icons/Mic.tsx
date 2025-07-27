import React from 'react';

type MicIconProps = {
  variant?: 'white' | 'gradient';
  size?: number;
};

const Mic: React.FC<MicIconProps> = ({ variant = 'gradient', size = 24 }) => {
  if (variant === 'white') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 7V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7Z"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M17 7H14M17 11H14"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M20 11C20 15.4183 16.4183 19 12 19M12 19C7.58172 19 4 15.4183 4 11M12 19V22M12 22H15M12 22H9"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  // Default: gradient
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.25 8.75V13.75C21.25 17.2017 18.4517 20 15 20C11.5482 20 8.75 17.2017 8.75 13.75V8.75C8.75 5.29822 11.5482 2.5 15 2.5C18.4517 2.5 21.25 5.29822 21.25 8.75Z"
        stroke="url(#paint0_linear_13_257)"
        strokeWidth="1.5"
      />
      <path
        d="M21.25 8.75H17.5M21.25 13.75H17.5"
        stroke="url(#paint1_linear_13_257)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M25 13.75C25 19.2729 20.5229 23.75 15 23.75M15 23.75C9.47715 23.75 5 19.2729 5 13.75M15 23.75V27.5M15 27.5H18.75M15 27.5H11.25"
        stroke="url(#paint2_linear_13_257)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_13_257"
          x1="15"
          y1="2.5"
          x2="15"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#452B93" />
          <stop offset="1" stopColor="#775FF2" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_13_257"
          x1="19.375"
          y1="8.75"
          x2="19.375"
          y2="13.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#452B93" />
          <stop offset="1" stopColor="#775FF2" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_13_257"
          x1="15"
          y1="13.75"
          x2="15"
          y2="27.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#452B93" />
          <stop offset="1" stopColor="#775FF2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Mic;