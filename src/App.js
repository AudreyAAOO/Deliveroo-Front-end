import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";

function App() {
  //! STATE
  // eslint-disable-next-line
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://site--mydeliveroo--hw4gvwsxlwd5.code.run/"); // http://localhost:3000/ "https://site--mydeliveroo--hw4gvwsxlwd5.code.run/
      //console.log(response.data);

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      //res.status(400).json(error.message);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("useEffect executed");
  }, []);

  //! COMPORTEMENTS



  //! RENDER
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (<>

    <Header />
    <main>
      <div>

        <div>
          <h2>{data.restaurant.name}</h2>
          <p>{data.restaurant.description}</p>

        </div>

        <div className="containerMap">


          {data.categories.map((element, i) => {
            console.log("elem: ", element);
            console.log("elem.name: ", element.name);
            console.log("elem.meals: ", element.meals);
            return (
              <>

                {/* <div id={element.id} key={i} data={element} name={element.name} >{element}</div> */}
                <div id={element.id} key={i} data={element} name={element.name}>
                  <h2>{element.name}</h2>
                </div>
                {element.meals.map((element, num) => {
                  console.log("2. elem: ", element);
                  console.log("2. elem.meals: ", element.meals);
                  return (
                    <section key={num} donnees={element} classname="containerMeal">

                      <h3>{element.title}</h3>

                      <p>{element.description}</p>

                    </section>
                  );
                })};




              </>);

          })}


        </div>

      </div>


    </main>

  </>);
}

export default App;