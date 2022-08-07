import styled from "styled-components";

const Svg = styled.svg<{ as?: React.ElementType }>``;

const StarIcon = ({ as }: { as: React.ElementType }) => (
	<Svg
		as={as}
		viewBox="0 0 42 43"
		width="42"
		height="43"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M23.154 1.995a2.6 2.6 0 0 0-4.708 0l-5.034 10.727-11.204 1.71a2.6 2.6 0 0 0-1.469 4.386l8.184 8.388L6.985 39.08a2.6 2.6 0 0 0 3.824 2.694l9.991-5.522 9.991 5.523a2.6 2.6 0 0 0 3.824-2.695l-1.938-11.875 8.184-8.387a2.6 2.6 0 0 0-1.468-4.386l-11.204-1.711-5.035-10.727Z"
			fill="#F3D98E"
		/>
	</Svg>
);

export default StarIcon;
