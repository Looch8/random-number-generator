import { useState } from "react";
import "./App.css";

function MinValue() {
	const [minValue, setMinValue] = useState(0);

	const handleMinAmount = () => {
		return setMinValue(minValue + 1);
	};

	return (
		<>
			<h3>Min number: {minValue}</h3>{" "}
			<button onClick={handleMinAmount}>Increase value</button>
		</>
	);
}

function MaxValue() {
	const [maxValue, setMaxValue] = useState(0);

	const handleMaxAmount = () => {
		return setMaxValue(maxValue + 1);
	};

	return (
		<>
			<h3>Max number: {maxValue}</h3>{" "}
			<button onClick={handleMaxAmount}>Increase value</button>
		</>
	);
}

function App() {
	return (
		<>
			<MinValue />
			<MaxValue />
		</>
	);
}

export default App;

//  Tier: 1-Beginner

// Generate a random number between a range of defined minimun and maximun.

// The generator allows the user to use the random property for purposes like games that contains some kind of lottary or for statistics.

// User Stories
//   - User can define maximun and minimun values for the random number.
//   - User can press the generate button to generate random number.

// Bonus features
//   - User can add option for negative values
//  - User can add option for decimal numbers
