import styled from "styled-components";

export const Wrapper = styled.div`
	min-height: 100vh;
	padding: 4rem 0;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* background: #00052e; */
	/* background: ##0f133a; */
	background: #00052e;
	position: relative;
	overflow: hidden;
`;

export const Background = styled.div`
	background: url("/background.svg");
	background-repeat: no-repeat;
	background-size: 3000px 3000px;
	background-position: center;
	position: absolute;
	width: 3000px;
	height: 3000px;

	@keyframes rotate360 {
		to {
			transform: rotate(360deg);
		}
	}
	animation: 5s rotate360 infinite linear;
`;
