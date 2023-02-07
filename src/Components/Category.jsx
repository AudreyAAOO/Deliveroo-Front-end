import Meal from "./Meal";
import { useState } from "react";

const Category = ({ listCategory, panier, setPanier, counters, setCounters }) => {
	//console.log("listCategory: ", listCategory);

	


	const handleAdd = (e) => {
		console.log("clic");
		const copy = [...listCategory];
		copy.push(e)
		setCounters(copy);
		console.log(e);
		setPanier(!panier);
		console.log("panier T/F ?", panier);
	  }


	return (
		<section className="category-container">
			{/* J'affiche le titre de ma categorie */}
			<h2>{listCategory.name}</h2>

			<div className="meals-container">
				{/* Je parcours le tableau meals contenu dans la clef meals de mon objet représentant une categorie */}
				{listCategory.meals.map((elemMeal) => {

					// J'affiche un composant Meal pour chaque objet dans le tableau meals (chaque objet représentant un plat)
					// Je donne en props cet objet à mon composant

					return <Meal meal={elemMeal} key={elemMeal.id} onClick={handleAdd} />;
				})}
			</div>
		</section>
	);
};

export default Category;
