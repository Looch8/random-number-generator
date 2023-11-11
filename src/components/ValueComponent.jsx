function ValueComponent({ valueName, value, onValueChange }) {
	const increaseValue = () => {
		return onValueChange(value + 1);
	};

	const decreaseValue = () => {
		// Value can not be decreased less than 0
		if (value > 0) return onValueChange(value - 1);
	};

	return (
		<>
			<h2>
				{valueName} number: {value}
			</h2>
			<button onClick={increaseValue}>Increase value</button>
			<button onClick={decreaseValue}>Decrease value</button>
		</>
	);
}

export default ValueComponent;
