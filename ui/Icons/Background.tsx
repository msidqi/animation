import styled from "styled-components";

const Svg = styled.svg<{ as?: React.ElementType }>``;

const backgroundSvg = ({
	as,
	style,
}: {
	as?: React.ElementType;
	style?: Record<string, any>;
}) => (
	<Svg
		as={as}
		style={style}
		width="512"
		height="512"
		viewBox="-256 -256 512 512"
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
	>
		<defs>
			<radialGradient id="e" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
				<stop offset="0%" stop-color="#fff" stop-opacity=".65" />
				<stop offset="100%" stop-opacity=".65" />
			</radialGradient>
			<mask id="c">
				<circle r="256" fill="#fff" />
			</mask>
			<g id="d">
				<g id="b">
					<path id="a" d="m0 0-69-500H69z" />
					<use xlinkHref="#a" transform="rotate(30)" />
					<use xlinkHref="#a" transform="rotate(60)" />
					<use xlinkHref="#a" transform="rotate(90)" />
				</g>
				<use xlinkHref="#b" transform="rotate(120)" />
				<use xlinkHref="#b" transform="rotate(240)" />
			</g>
		</defs>
		<g mask="url(#c)" transform="scale(1 .75)">
			<use xlinkHref="#d" fill="lightslateblue" />
			<use xlinkHref="#d" fill="#483d8b" transform="rotate(15)" />
			<circle r="360" fill="url(#e)" />
		</g>
	</Svg>
);

export default HighLevel;
