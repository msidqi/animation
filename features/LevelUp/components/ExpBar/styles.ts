import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	width: 469px;
	height: 18px;
	background-color: rgba(255, 255, 255, 0.21);
	border-radius: 124px;
	margin: 0 auto 3rem auto;
`;

type BarProps = {
	animate?: boolean;
	fromPercent?: number;
	toPercent?: number;
};

export const Bar = styled.div<BarProps>`
	opacity: 1;
	position: relative;
	height: 100%;
	/* width: ${({ toPercent }) => toPercent ?? 0}%; */
	background: linear-gradient(90deg, #445ef1 -2.33%, #0fc9f2 100%);
	border-radius: 124px;
	box-shadow: 0 0 30px 1px rgba(68, 94, 241, 0.5),
		0 0 30px 1px rgba(15, 201, 242, 0.5);
`;

export const Icon = styled.svg`
	position: absolute;
	right: 0;
	top: 50%;
	transform: translate(50%, -50%);
	filter: drop-shadow(0 0 10px #f3d98e);
`;

export const Progress = styled.p`
	position: absolute;
	right: 0;
	top: -50px;
	transform: translate(50%, 0);
	width: max-content;
`;
