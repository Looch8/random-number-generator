import "./App.css";
import ValueComponent from "./components/ValueComponent";

function App() {
	return (
		<>
			<ValueComponent valueName={"Min"} />
			<ValueComponent valueName={"Max"} />
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
