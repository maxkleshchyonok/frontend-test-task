import React from 'react';

const PearLogo = ({ height = 24, width = 15 }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 15 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M6.9873 5.03381C11.2027 5.03554 10.2779 5.24394 11.7314 10.1031C13.1915 14.984 12.5671 12.5181 13.6621 15.9889C14.7299 19.3742 13.4654 23.7797 7.0127 23.9948V23.9967C7.00846 23.9966 7.00424 23.9959 7 23.9957C6.99576 23.9959 6.99154 23.9966 6.9873 23.9967V23.9948C0.534604 23.7797 -0.729907 19.3742 0.337891 15.9889C1.43292 12.5181 0.808521 14.984 2.26855 10.1031C3.71916 5.25372 2.80098 5.03638 6.9873 5.03381Z"
            fill="black"
        />
        <g filter="url(#filter0_d_4015_2793)">
            <path
                d="M9.61169 1.47049C10.6522 0.30432 12.9183 0.498463 13.1735 0.524338L13.1989 0.525294C13.1987 0.536595 13.1647 3.09247 11.8324 4.05469C10.6396 4.91582 9.08392 4.61912 8.76538 4.54635L8.74391 4.56688C8.74319 4.55993 8.74188 4.5514 8.74096 4.54149C8.73635 4.54039 8.73197 4.53948 8.72827 4.53857L8.73998 4.52684C8.7105 4.18948 8.62794 2.57324 9.61169 1.47049Z"
                fill="black"
            />
        </g>
        <path
            d="M12.1641 17.3877C12.1641 19.1766 9.75427 20.4879 9.75427 20.4879C9.75427 20.4879 11.1313 19.1766 11.1313 17.3877C11.1313 15.5988 9.89198 14.889 10.7871 14.5651C11.6821 14.2412 12.1641 15.5988 12.1641 17.3877Z"
            fill="#FFFAFA"
        />
        <defs>
            <filter
                id="filter0_d_4015_2793"
                x="7.67107"
                y="0.496582"
                width="6.58144"
                height="6.26552"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dy="1.05366" />
                <feGaussianBlur stdDeviation="0.52683" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_4015_2793"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_4015_2793"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);

export default PearLogo;
