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
    const response = await axios.get("https://site--mydeliveroo--hw4gvwsxlwd5.code.run/"); // http://localhost:3000/ "https://site--mydeliveroo--hw4gvwsxlwd5.code.run/
    //console.log(response.data);

    setData(response.data);
    setIsLoading(false);

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
      <div>afficher data : </div>

    </main>





  </>);
}

export default App;