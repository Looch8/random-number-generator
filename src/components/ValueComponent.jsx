import { useState } from "react";

function ValueComponent({ valueName }) {
	const [value, setValue] = useState(0);

	const handleValue = () => {
		return setValue(value + 1);
	};

	return (
		<>
			<h3>
				{valueName} number: {value}
				<button onClick={handleValue}>Increase value</button>
			</h3>
		</>
	);
}

export default ValueComponent;
