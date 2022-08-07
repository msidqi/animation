import { Wrapper } from "./styles";
import LevelUpSimulator from "../../components/LevelUpSimulator";
import { LevelUpProvider } from "features/context";

const Simulator = () => (
	<Wrapper>
		<LevelUpProvider>
			<LevelUpSimulator />
		</LevelUpProvider>
	</Wrapper>
);

export default Simulator;
