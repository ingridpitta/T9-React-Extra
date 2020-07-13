import React from "react";
import searchIcon from "../../assets/icons/search-icon.svg";
import "./search.css";

const Search = ({
  placeholder,
  type,
  classInput,
  changeUser,
  classButton,
  buttonAction,
  value
}) => {
  return (
    <div className="search-component">
      <input
        placeholder={placeholder}
        type={type}
        className={classInput}
        onChange={changeUser}
        value={value}
      ></input>
      <button className={classButton} onClick={buttonAction}>
        <img src={searchIcon} alt="search icon"></img>
      </button>
    </div>
  );
};

export default Search;
