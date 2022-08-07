import { useContext, createContext, useReducer, Dispatch } from "react";
import { useSpring } from "react-spring";

type LevelUpActionTypes = {
	type: "CHANGE_EXP" | "RESET_LEVEL";
	payload?: Partial<LevelUpState>;
};

type LevelUpState = {
	exp: number;
	expInCurrentLevel: number;
	level: number;
	shouldTriggerAnimation: boolean;
	shouldTriggerNextLevelAnimation: boolean;
	fromPercent: number;
	toPercent: number;
	startAnimation: (fromPercent?: number, toPercent?: number) => void;
	// @TODO: type styles and api
	styles: any;
	api: any;
	backgroundApi: any;
	backgroundStyles: any;
};

const INITIAL_STATE: LevelUpState = {
	exp: 0,
	expInCurrentLevel: 0,
	level: 1,
	shouldTriggerAnimation: false,
	shouldTriggerNextLevelAnimation: false,
	fromPercent: 0,
	toPercent: 0,
	startAnimation: () => {},
	styles: {},
	api: {},
	backgroundApi: {},
	backgroundStyles: {},
};

const LevelUpContext = createContext<
	LevelUpState & { dispatch: Dispatch<LevelUpActionTypes> }
>({ ...INITIAL_STATE, dispatch: () => {} });
export const useLevelUp = () => {
	const context = useContext(LevelUpContext);
	if (context === undefined) {
		throw new Error("useLevelUp must be used within a LevelUpProvider");
	}

	return context;
};

export const getAmountNeededToLvlUp = (level: number): number => {
	if (level <= 0) return 0;
	if (level == 1) return 1000;
	return getAmountNeededToLvlUp(level - 1) * 1.3;
};

const reducer = (
	state: LevelUpState,
	action: LevelUpActionTypes
): LevelUpState => {
	const currentLevel = state.level;
	const expToBeAdded = action.payload?.exp || 0; // 3000
	const currentExp = state.exp;
	const expNeededToLvlUp = getAmountNeededToLvlUp(currentLevel);
	let shouldTriggerAnimation = state.shouldTriggerAnimation || false;
	let shouldTriggerNextLevelAnimation = false;
	let exp = 0;
	let expInCurrentLevel = 0;
	let fromPercent = state.fromPercent;
	let toPercent = 0;
	let level = state.level;
	if (expNeededToLvlUp <= expToBeAdded + currentExp) {
		// level up once
		toPercent = 100;
		// flag to do animation at the end of leveling up (not after this level is done)
		shouldTriggerAnimation = true;
		// save (expToBeAdded + currentExp - expNeededToLvlUp) in exp field
		exp = expToBeAdded + currentExp - expNeededToLvlUp;
		// flag to continue leveling up with {payload.exp: 0, exp: rest of exp left}
		shouldTriggerNextLevelAnimation = true;
		level += 1;
	} else {
		// change exp to expToBeAdded + currentExp
		toPercent = ((expToBeAdded + currentExp) / expNeededToLvlUp) * 100;
		// set state.exp to 0
		expInCurrentLevel = expToBeAdded + currentExp;
		exp = 0;
		shouldTriggerNextLevelAnimation = false;
	}

	switch (action.type) {
		case "CHANGE_EXP": {
			return {
				...state,
				...action.payload,
				shouldTriggerAnimation,
				shouldTriggerNextLevelAnimation,
				fromPercent,
				toPercent,
				exp,
				level,
				expInCurrentLevel,
			};
		}
		case "RESET_LEVEL": {
			return INITIAL_STATE;
		}
		default:
			throw new Error("Invalid levelup type");
	}
};

export const LevelUpProvider = ({
	children,
}: {
	children?: React.ReactNode;
}) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
	const [styles, api] = useSpring(() => ({
		from: {
			width: `${state.fromPercent}%`,
		},
		to: {
			width: `${state.toPercent}%`,
		},
	}));

	const [backgroundStyles, backgroundApi] = useSpring(() => ({
		from: {
			opacity: 0,
		},
		to: { opacity: 0 },
	}));

	return (
		<LevelUpContext.Provider
			value={{
				...state,
				dispatch,
				api,
				styles,
				backgroundApi,
				backgroundStyles,
			}}
		>
			{children}
		</LevelUpContext.Provider>
	);
};
