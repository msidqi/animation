import StarIcon from "ui/Icons/StarIcon";
import { useLevelUp, getAmountNeededToLvlUp } from "features/context";
import { useEffect } from "react";
import { animated } from "react-spring";
import React from "react";
import { Wrapper, Bar, Icon, Progress } from "./styles";

const ExpBar = React.memo(() => {
	const state = useLevelUp();
	const {
		dispatch,
		level,
		fromPercent,
		toPercent,
		expInCurrentLevel,
		styles,
		api,
	} = state;

	const startAnimation = (fromPercent?: number, toPercent?: number) =>
		api.start({
			from: {
				width: `${state.fromPercent ?? fromPercent}%`,
			},
			to: {
				width: `${state.toPercent ?? toPercent}%`,
			},
			onRest: () => {
				if (state.shouldTriggerNextLevelAnimation) {
					console.log("trigger next animation");
					dispatch({
						type: "CHANGE_EXP",
					});
				} else {
					console.log("DONT trigger next animation");
				}
			},
		});

	useEffect(() => {
		startAnimation();
	}, [state]);

	return (
		<Wrapper>
			<Bar
				as={animated.div}
				style={{ ...styles }}
				fromPercent={fromPercent}
				toPercent={toPercent}
				animate
			>
				<Progress>
					{expInCurrentLevel} /{getAmountNeededToLvlUp(level)}
				</Progress>
				<StarIcon as={Icon} />
			</Bar>
		</Wrapper>
	);
});

export default ExpBar;
