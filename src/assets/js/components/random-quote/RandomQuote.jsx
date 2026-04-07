import React, { useState, useEffect } from "react";
import "./RandomQuote.css";
import LoadingFetchData from "../loading-fetch-data/LoadingFetchData";
import Toast_Handelar from "../Toast_Handelar";
import axios from "axios";

function RandomQuote() {
  const [quote, setQuote] = useState(null);

  const getRandomQuote = async () => {
    try {
      const response = await axios.get(
        "https://api.quotable.io/random?minLength=100&maxLength=140"
      );
      setQuote(response.data);
    } catch (err) {
      Toast_Handelar("error", "Sorry we can't get today's quote!");
    }
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <>
      <div className="RandomQuote">
        <div className="container" data-aos="fade-down">
          {quote ? (
            <div className="quote">
              <h1>{quote.content}</h1>
              <p>{quote.author}</p>
            </div>
          ) : (
            <LoadingFetchData />
          )}
        </div>
      </div>
    </>
  );
}

export default RandomQuote;