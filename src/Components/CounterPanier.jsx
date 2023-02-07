import { useState } from "react";

const CounterPanier = ({ counter, counters, setCounters, index }) => {
	//! COMPORTEMENTS
	const handleClick = (index) => {
		//console.log("clic");
		const copy = [...counters];
		copy[index]++;
		//console.log(element);
		setCounters(copy);
	};

	const functionPlus = () => {
		const copy = [...counters];
		copy[index]++;
		//console.log(element);
		setCounters(copy);
	};

	const functionMoins = () => {
		const copy = [...counters];
		copy[index]--;
		//console.log(element);
		setCounters(copy);
	};

	const functionReset = () => {
		const copy = [...counters];
		copy[index] = 0;
		//console.log(element);
		setCounters(copy);
	};

	//! RENDER
	return <div className="container-panier"></div>;
};
export default CounterPanier;
