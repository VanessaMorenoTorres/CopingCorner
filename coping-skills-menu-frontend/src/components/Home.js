import React from "react";
import axios from "axios";
import { useState } from "react";
import "./cStyles/home.css";

function Home() {
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        // console.log(response.data.content + response.data.author) //this was to test that api was working
        setQuote(response.data.content + " -" + response.data.author);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
      <div className="homeCont">
    <div className="homepage">
      <h2>Welcome, we are happy to see you!</h2>
      <p>
        Welcome to our coping corner! The pupose of this app is to help
        individuals of all ages practice coping skills preventatively.
        What is a coping skill? It is anything that helps you deal with
        stress or makes you feel better. Practicing these skills before we 
        "need" them builds healthy habits that make us more likely to use these skills when we are facing
        challenges or not feeling like ourselves. If you prepare yourself and 
        your tools(strategies) ahead of time, you will be able to overcome anything.  
      </p>
      <p>
          Click on the "Create Strategy List" link if you would like to move forward
           and create your own personalized list of coping skills.
      </p>
      <div className="holdsQuotes">
        <h5>Click button below for inspirational quote</h5>
        {quote && <p>{quote}</p>}
        <button id="btn-quote" className="btn btn-primary" onClick={getQuote}>Get Quote</button>
      </div>
      </div>
    </div>
  );
}

export default Home;
