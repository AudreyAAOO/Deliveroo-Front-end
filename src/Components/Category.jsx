import Meal from "./Meal";

const Category = ({ listCategory }) => {
	//console.log("listCategory: ", listCategory);

	return (
		<section className="category-container">
			{/* J'affiche le titre de ma categorie */}
			<h2>{listCategory.name}</h2>

			<div className="meals-container">
				{/* Je parcours le tableau meals contenu dans la clef meals de mon objet représentant une categorie */}
				{listCategory.meals.map((elemMeal) => {
					// J'affiche un composant Meal pour chaque objet dans le tableau meals (chaque objet représentant un plat)
					// Je donne en props cet objet à mon composant
					return <Meal meal={elemMeal} key={elemMeal.id} />;
				})}
			</div>
		</section>
	);
};

export default Category;
