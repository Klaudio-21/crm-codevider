import { AiOutlineSearch } from "react-icons/ai";
import "./Search.css";



const Search = ({ placeholder, value, onChange }) => {
    return (
        <>
            <div className="search-component">
                <input className="input-search" type="text" placeholder={placeholder} value={value} onChange={onChange} />
                <AiOutlineSearch className="search-icon" />
            </div>
        </>
    );
};
export default Search;