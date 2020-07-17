import React from "react";
import Input from "../Input";
import SearchIcon from "../images/search-icon.svg";

const BarraDePesquisa = ({ onChange, onClick, value }) => {
  return (
    <React.Fragment>
      <Input
        placeholder="Digite um nome de usuario"
        type="text"
        onChange={onChange}
        value={value}
      />
      <button onClick={onClick}>
        <img src={SearchIcon} alt="search" />
      </button>
    </React.Fragment>
  );
};

export default BarraDePesquisa;
