import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "styles/Home";
import Simulator from "features/LevelUp/modules/Simulator";
import { LevelUpProvider } from "features/context";

const SimulatorPage: NextPage = () => {
	return (
		<Container>
			<Head>
				<title>Level up animation</title>
				<meta name="description" content="Level up animation" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<LevelUpProvider>
				<Simulator />
			</LevelUpProvider>
		</Container>
	);
};

export default SimulatorPage;
