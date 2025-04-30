import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./utils/constants";
import { cacheResult } from "./utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const text = await response.text();
    const cleaned = text
      .replace(/^window\.google\.ac\.h\(/, "")
      .replace(/\);?$/, "");
    const parsed = JSON.parse(cleaned);

    const suggestions = parsed[1].map((item) => item[0]);
    setSearchSuggestions(suggestions);
    dispatch(cacheResult({ [searchQuery]: suggestions }));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchQuery]) {
        setSearchSuggestions(cache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s"
          alt="menu"
          className="h-8 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <a>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="youtube logo"
            className="h-8 mx-2"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-400 p-2 rounded-r-full cursor-pointer bg-gray-100 w-30 border-l-0">
          Search
        </button>
        {showSuggestions && (
          <div className="absolute w-[33.5rem] bg-white z-10 shadow-lg rounded-lg border border-gray-100">
            <ul>
              {searchSuggestions?.map((suggestion) => (
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user icon"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Head;
