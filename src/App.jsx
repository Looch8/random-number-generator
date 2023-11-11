import "./App.css";
import { useState } from "react";
import ValueComponent from "./components/ValueComponent";

function GenerateNumber({ generateRandomNumber, onGenerate }) {
	const handleGenerate = () => {
		const randomNum = generateRandomNumber();
		onGenerate(randomNum);
	};

	return <button onClick={handleGenerate}>Generate</button>;
}

function App() {
	const [min, setMin] = useState(0);
	const [max, setMax] = useState(0);
	const [generatedNumber, setGeneratedNumber] = useState(null);

	const handleMinChange = (newValue) => {
		setMin(newValue);
	};

	const handleMaxChange = (newValue) => {
		setMax(newValue);
	};

	const generateRandomNumber = () => {
		return Math.random() * (max - min) + min;
	};

	const handleGenerate = (number) => {
		setGeneratedNumber(number);
	};

	return (
		<>
			<ValueComponent
				valueName={"Min"}
				value={min}
				onValueChange={handleMinChange}
			/>
			<ValueComponent
				valueName={"Max"}
				value={max}
				onValueChange={handleMaxChange}
			/>
			<h2>
				<GenerateNumber
					generateRandomNumber={generateRandomNumber}
					onGenerate={handleGenerate}
				/>
			</h2>
			{generatedNumber !== null && (
				<p>Generated Number: {generatedNumber.toFixed(0)}</p>
			)}
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
