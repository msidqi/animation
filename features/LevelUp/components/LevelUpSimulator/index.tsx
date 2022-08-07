import ExpBar from "features/LevelUp/components/ExpBar";
import { useState } from "react";
import { Input, Wrapper, Button } from "./styles";
import { useLevelUp } from "features/context";
import Avatar from "../Avatar";

const LevelUpSimulator = () => {
	const { dispatch, ...state } = useLevelUp();
	const [expToAdd, setExpToAdd] = useState(0);
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setExpToAdd(e.target.valueAsNumber);
	};
	const handleCalculate = () => {
		if (expToAdd > 0) {
			dispatch({
				type: "CHANGE_EXP",
				payload: { exp: expToAdd },
			});
		}
	};

	const handleRefresh = () => {
		window.location.reload();
	};

	return (
		<>
			<Avatar />
			<Wrapper>
				<ExpBar />
				<div>level: {state.level}</div>
				<br />
				<label htmlFor="exp">Enter Exp Amount:</label>
				<Input
					id="exp"
					type="number"
					value={expToAdd}
					onChange={handleInputChange}
				/>
				<Button onClick={handleCalculate}>Calculate</Button>
				<Button onClick={handleRefresh}>Refresh</Button>
			</Wrapper>
		</>
	);
};

export default LevelUpSimulator;
