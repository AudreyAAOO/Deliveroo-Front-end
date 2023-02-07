import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import Category from "./Components/Category";

function App() {
  //! STATE
  // eslint-disable-next-line
  const [data, setData] = useState({});
  // State qui me sert à savoir si la data a été récupérée
  const [isLoading, setIsLoading] = useState(true);

  // Je déclare la focntion qui fait la requête
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

                return <Category listCategory={elemCategory} key={index} />// Je donne l'objet représentant une categorie en props à mon composant
              } else {
                {/*  si categorie est vide return null */ }
                return null;
              }
            })};

          </section>

          <section className="right-part"> "PANIER (*＾▽＾)"／</section>
        </div>
      </main>
    </div>
  </>);
}

export default App;