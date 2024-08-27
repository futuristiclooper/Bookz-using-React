import { carddata } from "../config";
import Bookscard from "./Bookscard";
import { useState } from "react";

function filterdata(searchText, cards) {
  const Data= cards.filter((card) => card.title.toLowerCase().includes(searchText.toLowerCase()));
  return Data;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [cards, setCards] = useState(carddata);

  const [allcards, setAllCards] = useState(carddata);


  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            const data = filterdata(searchText, allcards);
            setCards(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="body">
        {cards.map((eachbook) => {
          return <Bookscard book={eachbook} key={eachbook.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
