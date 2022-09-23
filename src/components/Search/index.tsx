import React, { FC } from "react";
import { SearchProps } from "./search.types";
import { FaSearch } from "react-icons/fa";
import "./styles.css";

export const Search: FC<SearchProps> = ({ placeholder }) => {
  return (
    <div className="search">
      <input placeholder={placeholder} />
      <FaSearch />
    </div>
  );
};
