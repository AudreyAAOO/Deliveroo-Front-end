import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import Category from "./Components/Category";
// import CounterPanier from "./Components/CounterPanier";

function App() {
  //! STATE
  // eslint-disable-next-line
  const [data, setData] = useState({});
  const [counters, setCounters] = useState([0]);
  const [panier, setPanier] = useState(false);

  // State qui me sert à savoir si la data a été récupérée
  const [isLoading, setIsLoading] = useState(true);

  // Je déclare la fonction qui fait la requête
  const fetchData = async () => {
    try {
      const response = await axios.get("https://site--mydeliveroo--hw4gvwsxlwd5.code.run/"); // http://localhost:3000/ "https://site--mydeliveroo--hw4gvwsxlwd5.code.run/
      //console.log("response.data (*＾▽＾)／ : ", response.data);
      setData(response.data);  // Je stocke le résultat dans data
      setIsLoading(false);  // Je fais paser isLoading à false

    } catch (error) {
      console.log("error.message : ", error.message);
      console.log("error.response.data : ", error.response.data);
    }
  };

  //! le useEffect se déclenche juste après le 1er rendu
  useEffect(() => {
    fetchData(); // J'appelle ma fonction
    console.log("---- useEffect executed ---- (*＾▽＾)／ ");
  }, []);   //!! ne pas oublier [] si on ne veut pas refaire la requête

  //! COMPORTEMENTS
  const handleAdd = ({elemMeal}) => {
    console.log("clic");
    const copy = [...counters];
    copy.push(elemMeal)
    setCounters(copy);
    console.log("copy: ", copy);
    setPanier(!panier);
    console.log("panier T/F ?", panier);
  }


  //! RENDER
  return isLoading ? (  // Tant que isLoading vaut true, j'affiche un indicateur de chargement
    <span>En cours de chargement... </span>
  ) : (<>

    <div className="App">
      <Header />
      <div className="hero-container container">
        <div>
          <h1>{data.restaurant.name}</h1>
          <p className="hero-description">{data.restaurant.description}</p>
        </div>
        <img src={data.restaurant.picture} alt="photo d'un brunch" />
      </div>
      <main>
        <div className="container main-part">

          <section className="left-part">
            {/* Je parcours le tableau categories, chacun des objets de ce tableau sera mentionnable sous le nom elemCategory */}
            {data.categories.map((elemCategory, index) => {

              //console.log("elemCategory: ", elemCategory);
              //console.log("elemCategory.name: ", elemCategory.name);
              // Si ma catégorie contient des plats, j'affiche un composant Category
              if (elemCategory.meals.length !== 0) {
                return (<>
                  {/* <Category listCategory={elemCategory} key={index} />// Je donne l'objet représentant une categorie en props à mon composant */}
                  <section className="category-container">
                    {/* J'affiche le titre de ma categorie */}
                    <h2>{elemCategory.name}</h2>

                    <div className="meals-container">
                      {/* Je parcours le tableau meals contenu dans la clef meals de mon objet représentant une categorie */}
                      {elemCategory.meals.map((elemMeal) => {

                        // J'affiche un composant Meal pour chaque objet dans le tableau meals (chaque objet représentant un plat)
                        // Je donne en props cet objet à mon composant

                        return (
                          // <Meal meal={elemMeal} key={elemMeal.id} onClick={handleAdd} />;
                          <article id="encadreMeal" onClick={handleAdd}>
                            {/* className={panier && "addMealinPanier"}  */}
                            <div>
                              <p className="meal-title">{elemMeal.title}</p>
                              <p className="meal-description">{elemMeal.description}</p>
                              <div className="price-popular-container">
                                <p>{elemMeal.price} €</p>
                                {/* remarquer la clé popular: si elle existe(true) le plat est populaire, l'afficher */}
                                {elemMeal.popular && <p style={{ color: "orange" }}>Populaire</p>}
                              </div>
                            </div>
                            {elemMeal.picture && <img src={elemMeal.picture} alt="meal" />}
                          </article>
                        )
                      })}
                    </div>
                  </section>


                </>)
              } else {
                {/*  si categorie est vide return null */ }
                return null;
              }
            })}

          </section>

          <section className="right-part"> "PANIER (*＾▽＾)"／
            {counters.map((itemCounter, index) => {
              return (
                //  <CounterPanier key={index} counter={counter} counters={counters} setCounters={setCounters} index={index} />
                <span>{itemCounter}</span>

              )
            })}

          </section>
        </div>
      </main>
      <footer>
        Made with <a href="https://reactjs.org/">React</a> at{" "}
        <a href="https://www.lereacteur.io/">
          Le Reacteur by Audrey
        </a>
      </footer>
    </div>
  </>);
}

export default App;