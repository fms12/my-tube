import React, { useState, useEffect } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addToCache } from "../utils/redux/searchSlice";
import { YOUTUBE_SEARCH_API } from "../utils/apiContent";
import { Link } from "react-router-dom";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import AutoComplete from "./AutoComplete";

function SearchBar() {
const [searchQuery, setSearchQuery] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.searchSuggestionCache);

  const dispatch = useDispatch();


  const handleClickAway =()=>{
    setShowSuggestions(false);
  }

  const cachingFunction = () => {
    const timerId = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return timerId;
  };

  //Debouncing the search
  useEffect(() => {
    const timerId = cachingFunction();
    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    const obj = {};
    obj[searchQuery] = json[1];

    dispatch(
      addToCache({
        [searchQuery]: json[1],
      })
    );
  };

  if (searchQuery !== "" && !suggestions) return null;

  if (!suggestions) return null;
  return (
    <div className="flex grow-0 basis-[750px] justify-center min-w-0 w-[40%] relative items-center flex-col max-sm:mr-3">
      <form
        className="flex items-center w-[100%]"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className="bg-black items-center border-2 border-solid border-[#222222] border-r-0 rounded-tl-[40px] rounded-bl-[40px] caret-[white] pr-1 pl-4 ml-8 flex-1 ">
            <input
              className="flex 1 border-none relative w-[100%] py-[7px] outline-none leading-6 bg-transparent text-white"
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              onFocus={setShowSuggestions}
              onBlur={setShowSuggestions}
            />
          </div>
        </ClickAwayListener>
        <Link to={`/results?search_query=${searchQuery}`}>
          <button className="border border-[#222222] rounded-r-full cursor-pointer py-[6.5px] w-[5.5rem]  m-0 text-white  bg-[#222222] max-sm:w-[3rem]">
            <SearchOutlinedIcon className="" />
          </button>
        </Link>
      </form>
      {showSuggestions && (
        <div className="w-[100%] min-h-[100%] mt-1 ">
          <div className="w-[82%] absolute left-10">
            {suggestions.map((suggestion) => (
              <AutoComplete key={suggestion} suggestion={suggestion} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
