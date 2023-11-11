function GenerateNumber({ generateRandomNumber, onGenerate }) {
	const handleGenerate = () => {
		const randomNum = generateRandomNumber();
		onGenerate(randomNum);
	};

	return <button onClick={handleGenerate}>Generate</button>;
}

export default GenerateNumber;
