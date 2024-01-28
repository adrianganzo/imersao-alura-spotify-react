import React, { useState } from "react";
import search from "../../assets/icons/search.png";
import smallLeft from "../../assets/icons/small-left.png";
import smallRight from "../../assets/icons/small-right.png";
import { SearchContext } from "../../context/SearchContext";
import "./Header.css";

export default function Header() {
  const [buscaAtiva, setBuscaAtiva] = useState(false);

  function handleSearch(event) {
    event.preventDefault();
    setBuscaAtiva(true);
  }

  return (
    <SearchContext.Provider value={buscaAtiva}>
      <nav className="header__navigation">
        <div className="navigation">
          <button className="arrow-left">
            <img src={smallLeft} alt="Seta para esquerda" />
          </button>
          <button className="arrow-right">
            <img src={smallRight} alt="Seta para direita" />
          </button>
        </div>

        <div className="header__search">
          <img src={search} alt="" />
          <input
            id="search-input"
            type="text"
            maxLength="800"
            placeholder="O que você quer ouvir?"
            onChange={handleSearch}
          />
        </div>

        <div className="header__login">
          <button className="subscribe">Inscreva-se</button>
          <button className="login">Entrar</button>
        </div>
      </nav>
    </SearchContext.Provider>
  );
}
