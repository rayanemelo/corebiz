import { SearchProps } from "./search.types";
import { FaSearch } from "react-icons/fa";
import "./styles.css";

export const Search = ({ placeholder }: SearchProps) => {
  return (
    <div className="search">
      <input placeholder={placeholder} />
      <FaSearch />
    </div>
  );
};
