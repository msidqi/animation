import { Wrapper, Background } from "./styles";
import LevelUpSimulator from "../../components/LevelUpSimulator";
import { useLevelUp } from "features/context";
import { animated } from "react-spring";

const Simulator = () => {
	const { backgroundStyles } = useLevelUp();
	return (
		<Wrapper>
			<Background as={animated.div} style={backgroundStyles} />
			<LevelUpSimulator />
		</Wrapper>
	);
};

export default Simulator;
