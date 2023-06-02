import React from "react";

const BgMain = () => (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 -z-10">
        <svg
            width="2000"
            height="898"
            viewBox="0 0 2000 898"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_f_1641_179)">
                <path
                    d="M274 -118H1726V-118C1726 166.979 1494.98 398 1210 398H790C505.021 398 274 166.979 274 -118V-118Z"
                    fill="#A70A33"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_1641_179"
                    x="-226"
                    y="-618"
                    width="2452"
                    height="1516"
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
                        stdDeviation="250"
                        result="effect1_foregroundBlur_1641_179"
                    />
                </filter>
            </defs>
        </svg>
    </div>
);

export default BgMain;
