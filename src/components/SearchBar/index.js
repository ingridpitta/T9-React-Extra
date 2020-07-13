import React from "react";
import { Search } from "../";
import "./searchBar.css";

const SearchBar = ({
  type,
  classInput,
  classButton,
  changeUser,
  buttonAction,
  placeholder,
  value
}) => {
  return (
    <div>
      <Search
        type={type}
        value={value}
        classInput={classInput}
        classButton={classButton}
        placeholder={placeholder}
        changeUser={changeUser}
        buttonAction={buttonAction}
      />
    </div>
  );
};

export default SearchBar;
