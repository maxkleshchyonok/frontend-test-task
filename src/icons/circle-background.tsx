import React from 'react';

const CircleBackground = ({ className }: { className: string }) => (
    <svg
        width="1600"
        height="617"
        viewBox="0 0 1440 617"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <g filter="url(#filter0_i_4015_2789)">
            <path
                d="M1545 825C1545 606.196 1458.08 396.354 1303.36 241.637C1148.65 86.9194 938.804 1.65192e-05 720 0C501.196 -1.65192e-05 291.355 86.9194 136.637 241.637C-18.0805 396.354 -105 606.196 -105 825L1545 825Z"
                fill="white"
            />
        </g>
        <path
            d="M720 0.5C938.671 0.500017 1148.39 87.3665 1303.01 241.99C1457.52 396.496 1544.37 606.009 1544.5 824.5H-104.499C-104.367 606.009 -17.5157 396.496 136.99 241.99C291.614 87.3665 501.329 0.5 720 0.5Z"
            stroke="#89DECA"
        />
        <path
            d="M136.637 241.637C123.252 255.022 110.374 268.82 98.0164 283L136.637 241.637ZM136.637 241.637C149.55 228.724 162.846 216.284 176.5 204.327M1414.7 380C1436.34 413.792 1455.45 449.058 1471.91 485.5L1414.7 380ZM939.001 29.5964C972.721 38.8817 1005.79 50.2939 1038 63.7507L939.001 29.5964Z"
            stroke="#89DECA"
            strokeWidth="10"
            strokeLinejoin="round"
        />
        <defs>
            <filter
                id="filter0_i_4015_2789"
                x="-105"
                y="0"
                width="1650"
                height="825"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="50" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4015_2789" />
            </filter>
        </defs>
    </svg>
);

export default CircleBackground;
