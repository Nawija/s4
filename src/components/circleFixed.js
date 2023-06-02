import React from "react";

const CircleFixed = () => (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 -z-10">
        <svg
            width="2000"
            height="1542"
            viewBox="0 0 2000 1542"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_f_1612_176)">
                <rect
                    x="306"
                    y="-841"
                    width="1433"
                    height="1384"
                    rx="692"
                    fill="#A70A33"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_1612_176"
                    x="-693"
                    y="-1840"
                    width="3431"
                    height="3382"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="499.5"
                        result="effect1_foregroundBlur_1612_176"
                    />
                </filter>
            </defs>
        </svg>
    </div>
);

export default CircleFixed;
