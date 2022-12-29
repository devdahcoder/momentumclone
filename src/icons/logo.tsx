import React from 'react';

type Props = {
    className?: string;
    width?: string;
    height?: string;
}

const Logo = ({className, width, height }: Props) => {

    const svgStyle = className ?? '';
    const svgWidth = width ?? '512';
    const svgHeight = height ?? '512';

    return (
		<svg
			className={`loading-logo ${svgStyle}`}
			width={svgWidth}
			height={svgHeight}
			viewBox={`0 0 ${svgWidth} ${svgHeight}`}
			fill="#ccc"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm122.763 344.309h-15.484v-95.746c0-34.76-18.012-54.983-47.715-54.983-27.176 0-50.875 20.856-50.875 56.879v93.85h-15.484v-96.695c0-33.5-18.327-54.035-47.083-54.035s-51.507 25.28-51.507 57.827v92.9h-15.483V183.151h15.483v28.756c10.428-16.748 24.964-32.548 53.719-32.548 28.124 0 45.5 16.116 54.352 34.76 10.428-18.012 27.807-34.76 58.143-34.76 38.235 0 61.935 26.86 61.935 67.307z" />
		</svg>
	);
}
export default Logo