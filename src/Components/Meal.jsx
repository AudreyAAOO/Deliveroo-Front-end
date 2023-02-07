import React, { useState, useEffect } from "react";
//import CounterPanier from "./CounterPanier";

const Meal = ({ meal, onClick, counters, setCounters }) => {
	//!STATE

	// const [panier, setPanier] = useState(false);

	//!COMPORTEMENT

	// const handleAdd = () => {
	// 	console.log("clic");
	// 	const copy = [...counters];
	// 	copy.push("0")
	// 	setCounters(copy);
	// 	console.log(copy);
	// 	setPanier(!panier);
	// 	console.log("panier T/F ?", panier);
	//   }

	//! RENDER
	return (
		<article id="encadreMeal" onClick={onClick}> 
		{/* className={panier && "addMealinPanier"}  */}
			<div>
					<p className="meal-title">{meal.title}</p>
					<p className="meal-description">{meal.description}</p>
					<div className="price-popular-container">
						<p>{meal.price} €</p>
						{/* remarquer la clé popular: si elle existe(true) le plat est populaire, l'afficher */}
						{meal.popular && <p style={{ color: "orange" }}>Populaire</p>}
					</div>
			</div> 
				{meal.picture && <img src={meal.picture} alt="meal" />}
		</article>	
	);
};

export default Meal;
