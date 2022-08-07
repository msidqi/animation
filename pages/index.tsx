import type { NextPage } from "next";
import Head from "next/head";
import { Container, Main } from "styles/Home";
import Simulator from "features/LevelUp/modules/Simulator";

const SimulatorPage: NextPage = () => {
	return (
		<Container>
			<Head>
				<title>Level up animation</title>
				<meta name="description" content="Level up animation" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Main>
				<Simulator />
			</Main>
		</Container>
	);
};

export default SimulatorPage;
