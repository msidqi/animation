import { Wrapper, LevelWrapper } from "./styles";
import { animated, useSpring } from "react-spring";
import { useState, useEffect } from "react";
import LowLevel from "ui/Icons/LowLevel";
import HighLevel from "ui/Icons/HighLevel";
import Level from "ui/Icons/Level";
import { useLevelUp } from "features/context";

function Avatar() {
	const {
		shouldTriggerAnimation,
		shouldTriggerNextLevelAnimation,
		backgroundApi,
	} = useLevelUp();
	const [toggle, setToggle] = useState(false);
	const [styles, api] = useSpring(() => ({
		to: { scale: 1 },
		from: { scale: 1 },
	}));

	const [levelStyles, levelApi] = useSpring(() => ({
		to: { scale: 0, transform: "translateY(+20px)" },
		from: { scale: 0, transform: "translateY(+20px)" },
	}));

	useEffect(() => {
		// apply final animation
		if (shouldTriggerAnimation && !shouldTriggerNextLevelAnimation)
			api.start({
				to: async (next, cancel) => {
					if (!shouldTriggerAnimation) cancel();
					await next({
						delay: 1000,
						scale: 0.2,
						// filter: "blur(5px)",
					});
					setToggle(true);
					await next({ scale: 1.2 });

					levelApi.start({
						to: { scale: 1, transform: "translateY(0px)" },
						from: { scale: 0, transform: "translateY(+20px)" },
						delay: 1500,
					});
					backgroundApi.start({
						from: {
							opacity: 0,
						},
						to: async (next) => {
							await next({ opacity: 1 });
							await next({ opacity: 0, delay: 1500 });
						},
					});
					await next({
						scale: 1,
						delay: 1500,
						transform: "translateY(-160px)",
					});
				},
				from: { scale: 1, transform: "translateY(0px)" },
			});
	}, [shouldTriggerAnimation, shouldTriggerNextLevelAnimation]);

	return (
		<Wrapper>
			{toggle ? (
				<HighLevel style={{ ...styles, zIndex: 9999 }} as={animated.svg} />
			) : (
				<LowLevel style={{ ...styles, zIndex: 9999 }} as={animated.svg} />
			)}
			<LevelWrapper style={{ zIndex: 1 }}>
				<Level style={levelStyles} as={animated.svg} />
			</LevelWrapper>
		</Wrapper>
	);
}

export default Avatar;
