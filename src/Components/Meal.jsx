const Meal = ({ meal }) => {
	return (
		<article>
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
