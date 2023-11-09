import { useState } from "react";
import "./App.css";

function Numbers() {
	const [numberOne, setNumberOne] = useState(0);
	const [numberTwo, setNumberTwo] = useState(0);

	const numberButtonClick = () => {
		return setNumberOne(numberOne + 1);
	};

	return (
		<>
			<h3>Number one: {numberOne}</h3>{" "}
			<button onClick={numberButtonClick}>Increase number</button>
			<h3>Number two: {numberTwo}</h3>
		</>
	);
}

function App() {
	return (
		<>
			<Numbers />
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
